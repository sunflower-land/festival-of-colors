import { OFFLINE_FARM } from "features/game/lib/landData";
import { GameState } from "features/game/types/game";
import { assign, createMachine, Interpreter, State } from "xstate";
import { getUrl, loadPortal } from "../actions/loadPortal";
import { CONFIG } from "lib/config";
import { decodeToken } from "features/auth/actions/login";

const getJWT = () => {
  const code = new URLSearchParams(window.location.search).get("jwt");
  return code;
};

export interface Context {
  id: number;
  jwt: string;
  state: GameState;
}

export type PortalEvent = { type: "RETRY" } | { type: "CONTINUE" };

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
  initial: "playing", //"initialising",
  context: {
    id: 0,
    jwt: getJWT(),
    state: CONFIG.API_URL ? undefined : OFFLINE_FARM,
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
          if (!getUrl()) {
            return { game: OFFLINE_FARM, attemptsLeft: 5 };
          }

          const { farmId } = decodeToken(context.jwt as string);

          // Load the game data
          const { game } = await loadPortal({
            portalId: CONFIG.PORTAL_APP,
            token: context.jwt as string,
          });

          return { game, farmId };
        },
        onDone: [
          {
            target: "introduction",
            actions: assign({
              state: (_: any, event) => event.data.game,
              id: (_: any, event) => event.data.farmId,
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
        // X_COLLECTED: {
        //   actions: assign({
        //     score: (context: any, event) => {
        //       return context.score + (event as ChickenRescuedEvent).points;
        //     },
        //   }) as any,
        // },
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
