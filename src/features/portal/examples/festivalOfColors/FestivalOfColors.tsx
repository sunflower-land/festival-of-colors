import React, { useContext, useEffect } from "react";

import logo from "assets/brand/logo_v2.png";

import { useActor, useSelector } from "@xstate/react";
import { Modal } from "components/ui/Modal";
import { Panel } from "components/ui/Panel";
import { Button } from "components/ui/Button";

import { PortalContext, PortalProvider } from "./lib/PortalProvider";
import { Ocean } from "features/world/ui/Ocean";
import { Label } from "components/ui/Label";
import { NPC_WEARABLES } from "lib/npcs";

import { useAppTranslation } from "lib/i18n/useAppTranslations";
import { FestivalOfColorsHUD } from "./components/FestivalOfColorsHUD";
import { FestivalOfColoursGame } from "./FestivalOfColoursGame";

import { goHome } from "./lib/portalUtil";
import { PortalMachineState } from "./lib/festivalOfColorsMachine";
import { Loading } from "features/auth/components";
import { CONFIG } from "lib/config";
import { WalletProvider } from "features/wallet/WalletProvider";
import {
  SpeakingModal,
  SpeakingText,
} from "features/game/components/SpeakingModal";

export const FestivalOfColorsApp: React.FC = () => {
  return (
    <WalletProvider>
      <PortalProvider>
        <Ocean>
          <FestivalOfColors />
        </Ocean>
      </PortalProvider>
    </WalletProvider>
  );
};

const _gameState = (state: PortalMachineState) => state.context.state;

export const FestivalOfColors: React.FC = () => {
  const { portalService } = useContext(PortalContext);
  const [portalState] = useActor(portalService);
  const { t } = useAppTranslation();

  const gameState = useSelector(portalService, _gameState);

  if (portalState.matches("error")) {
    return (
      <Modal show>
        <Panel>
          <div className="p-2">
            <Label type="danger">{t("error")}</Label>
            <span className="text-sm my-2">{t("error.wentWrong")}</span>
          </div>
          <Button onClick={() => portalService.send("RETRY")}>
            {t("retry")}
          </Button>
        </Panel>
      </Modal>
    );
  }

  if (portalState.matches("unauthorised")) {
    return (
      <Modal show>
        <Panel>
          <div className="p-2">
            <Label type="danger">{t("error")}</Label>
            <span className="text-sm my-2">{t("session.expired")}</span>
          </div>
          <Button onClick={goHome}>{t("close")}</Button>
        </Panel>
      </Modal>
    );
  }

  if (portalState.matches("loading")) {
    return (
      <Modal show>
        <img id="logo" src={logo} className="w-full mb-2" />

        <Panel>
          <Loading />
          <span className="text-xs">
            {`${t("last.updated")}:${CONFIG.CLIENT_VERSION}`}
          </span>
        </Panel>
      </Modal>
    );
  }

  return (
    <div>
      {portalState.matches("introduction") && (
        <Modal show onHide={() => portalService.send("CONTINUE")}>
          <SpeakingModal
            bumpkinParts={NPC_WEARABLES.rodolfo}
            message={[
              {
                text: "Howdy Bumpkin, welcome to the Festival of Colors!",
              },
              {
                text: "This is an event designed by the community for the community.",
              },
              {
                text: "You can earn daily rewards by completing missions. Explore the island and speak to Bob to get started.",
              },
            ]}
            onClose={() => portalService.send("CONTINUE")}
          />
        </Modal>
      )}

      {portalState.matches("complete") && (
        <Modal show>
          <Panel bumpkinParts={NPC_WEARABLES.chicken}>
            <div className="flex mt-1">
              <Button onClick={goHome} className="mr-1">
                {t("go.home")}
              </Button>
              <Button onClick={() => portalService.send("RETRY")}>
                {t("play.again")}
              </Button>
            </div>
          </Panel>
        </Modal>
      )}

      {gameState && (
        <>
          <FestivalOfColorsHUD />
          <FestivalOfColoursGame />
        </>
      )}
    </div>
  );
};
