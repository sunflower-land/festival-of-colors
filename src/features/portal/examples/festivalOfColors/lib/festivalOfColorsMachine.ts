import { OFFLINE_FARM } from "features/game/lib/landData";
import { GameState } from "features/game/types/game";
import { assign, createMachine, Interpreter, State } from "xstate";
import { getUrl, loadPortal } from "../actions/loadPortal";
import { CONFIG } from "lib/config";
import { decodeToken } from "features/auth/actions/login";
import { played } from "./portalUtil";

function saveCollected(bomb: Bomb) {
  const dateKey = new Date().toISOString().split("T")[0];

  const previous = getCollected();

  const all = [...previous, bomb];

  // Remove duplicates
  const unique = all.filter((item, index) => all.indexOf(item) === index);

  localStorage.setItem(dateKey, JSON.stringify(unique));
}

function getCollected(): Bomb[] {
  const dateKey = new Date().toISOString().split("T")[0];

  const items = localStorage.getItem(dateKey);

  return items ? (JSON.parse(items) as Bomb[]) : [];
}
const getJWT = () => {
  const code = new URLSearchParams(window.location.search).get("jwt");
  return code;
};

export type Bomb = "Red" | "Green" | "Purple" | "Blue" | "Yellow";
export interface Context {
  id: number;
  jwt: string;
  state: GameState;
  hasPurchased: boolean;
  paintBombs: Bomb[];
}

type CollectBombEvent = {
  type: "COLLECT_BOMB";
  bomb: Bomb;
};
export type PortalEvent =
  | { type: "RETRY" }
  | { type: "CONTINUE" }
  | { type: "PURCHASED" }
  | CollectBombEvent;

export type PortalState = {
  value:
    | "initialising"
    | "error"
    | "unauthorised"
    | "loading"
    | "introduction"
    | "playing"
    | "complete"
    | "starting";
  context: Context;
};

export type MachineInterpreter = Interpreter<
  Context,
  any,
  PortalEvent,
  PortalState
>;

export type PortalMachineState = State<Context, PortalEvent, PortalState>;

export const festivalOfColorsMachine = createMachine({
  id: "festivalOfColorsMachine",
  initial: "initialising",
  context: {
    id: 0,
    jwt: getJWT(),
    state: CONFIG.API_URL ? undefined : OFFLINE_FARM,
    hasPurchased: true,
    paintBombs: getCollected(),
  },
  states: {
    initialising: {
      always: [
        {
          target: "unauthorised",
          // TODO: Also validate token
          cond: (context) => !!CONFIG.API_URL && !context.jwt,
        },
        {
          target: "loading",
        },
      ],
    },

    loading: {
      id: "loading",
      invoke: {
        src: async (context) => {
          const bombs = getCollected();
          if (!getUrl()) {
            return {
              game: OFFLINE_FARM,
              attemptsLeft: 5,
              bombs,
              hasPurchased: false,
            };
          }

          const { farmId } = decodeToken(context.jwt as string);

          // Load the game data
          const { game } = await loadPortal({
            portalId: CONFIG.PORTAL_APP,
            token: context.jwt as string,
          });

          const purchases =
            game.minigames.games["festival-of-colors"]?.purchases ?? [];

          const dateKey = new Date().toISOString().split("T")[0];

          const hasPurchased = purchases.some(
            (purchase) =>
              new Date(purchase.purchasedAt).toISOString().split("T")[0] ===
              dateKey
          );

          return { game, farmId, bombs, hasPurchased };
        },
        onDone: [
          {
            target: "introduction",
            actions: assign({
              state: (_: any, event) => event.data.game,
              id: (_: any, event) => event.data.farmId,
              paintBombs: (_: any, event) => event.data.bombs,
              hasPurchased: (_: any, event) => event.data.hasPurchased,
            }),
          },
        ],
        onError: {
          target: "error",
        },
      },
    },

    starting: {
      always: [
        {
          target: "playing",
        },
      ],
    },

    introduction: {
      on: {
        CONTINUE: {
          target: "playing",
        },
      },
    },

    playing: {
      on: {
        PURCHASED: {
          actions: assign({ hasPurchased: (context: any) => true }),
        } as any,
        COLLECT_BOMB: {
          actions: [
            assign({
              paintBombs: (context: any, event) => [
                ...(context.paintBombs || []),
                (event as CollectBombEvent).bomb,
              ],
            }) as any,
            ((context: Context, event: CollectBombEvent) => {
              saveCollected(event.bomb);

              played({ score: context.paintBombs.length + 1 });
            }) as any,
          ],
        } as any,
      },
    },

    complete: {
      on: {
        RETRY: {
          target: "starting",
        },
      },
    },
    error: {
      on: {
        RETRY: {
          target: "initialising",
        },
      },
    },
    unauthorised: {},
  },
});
