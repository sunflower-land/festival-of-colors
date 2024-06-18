import PubSub from "pubsub-js";
import React, { useContext } from "react";
import { useActor } from "@xstate/react";
import { PortalContext } from "../lib/PortalProvider";
import { PIXEL_SCALE } from "features/game/lib/constants";
import { SUNNYSIDE } from "assets/sunnyside";
import worldIcon from "assets/icons/world.png";
import { goHome } from "../lib/portalUtil";
import { HudContainer } from "components/ui/HudContainer";
import { Balances } from "components/Balances";
import Decimal from "decimal.js-light";

import blueBomb from "assets/decorations/paintbomb_blue.png";
import redBomb from "assets/decorations/paintbomb_red.png";
import yellowBomb from "assets/decorations/paintbomb_yellow.png";
import purpleBomb from "assets/decorations/paintbomb_purple.png";
import greenBomb from "assets/decorations/paintbomb_green.png";
import { Bomb } from "../lib/festivalOfColorsMachine";

export const BOMB_TO_IMAGE: Record<Bomb, string> = {
  Blue: blueBomb,
  Red: redBomb,
  Yellow: yellowBomb,
  Purple: purpleBomb,
  Green: greenBomb,
};

export const FestivalOfColorsHUD: React.FC = () => {
  const { portalService } = useContext(PortalContext);
  const [portalState] = useActor(portalService);

  const bombs = portalState.context.paintBombs;

  console.log({ bombs });
  const travelHome = () => {
    goHome();
  };

  return (
    <>
      <HudContainer>
        <Balances
          sfl={portalState.context.state.balance}
          coins={portalState.context.state.coins}
          blockBucks={
            portalState.context.state.inventory["Block Buck"] ?? new Decimal(0)
          }
        />
        <div
          className="fixed z-50 flex "
          style={{
            left: `${PIXEL_SCALE * 3}px`,
            top: `${PIXEL_SCALE * 3}px`,
          }}
        >
          {bombs.map((name) => (
            <img
              key={name}
              className="h-10 img-highlight-heavy mr-2"
              src={BOMB_TO_IMAGE[name]}
            />
          ))}
        </div>
        <div
          className="fixed z-50 flex flex-col justify-between"
          style={{
            left: `${PIXEL_SCALE * 3}px`,
            bottom: `${PIXEL_SCALE * 3}px`,
            width: `${PIXEL_SCALE * 22}px`,
          }}
        >
          <div
            id="deliveries"
            className="flex relative z-50 justify-center cursor-pointer hover:img-highlight"
            style={{
              width: `${PIXEL_SCALE * 22}px`,
              height: `${PIXEL_SCALE * 23}px`,
            }}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              travelHome();
            }}
          >
            <img
              src={SUNNYSIDE.ui.round_button}
              className="absolute"
              style={{
                width: `${PIXEL_SCALE * 22}px`,
              }}
            />
            <img
              src={worldIcon}
              style={{
                width: `${PIXEL_SCALE * 12}px`,
                left: `${PIXEL_SCALE * 5}px`,
                top: `${PIXEL_SCALE * 4}px`,
              }}
              className="absolute"
            />
          </div>
        </div>
      </HudContainer>
    </>
  );
};
