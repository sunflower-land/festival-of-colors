import { makeGame } from "features/game/lib/transforms";
import { GameState } from "features/game/types/game";
import { CONFIG } from "lib/config";
import { ERRORS } from "lib/errors";

type Request = {
  portalId: string;
  token: string;
};

export const getUrl = () => {
  const network = new URLSearchParams(window.location.search).get("network");

  if (network && network === "mainnet") {
    return "https://api.sunflower-land.com";
  }

  if (network) {
    return "https://api-dev.sunflower-land.com";
  }

  return CONFIG.API_URL;
};

export async function loadPortal(request: Request) {
  // Uses same autosave event driven endpoint
  const response = await window.fetch(
    `${getUrl()}/portal/${request.portalId}/player`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json;charset=UTF-8",
        Authorization: `Bearer ${request.token}`,
      },
    }
  );

  if (response.status >= 400) {
    throw new Error(ERRORS.PORTAL_LOGIN_ERROR);
  }

  const data: { farm: GameState } = await response.json();

  const game = makeGame(data.farm);

  return { game };
}
