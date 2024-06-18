import { SpeakingModal } from "features/game/components/SpeakingModal";
import { NPC_WEARABLES } from "lib/npcs";
import React, { useContext, useEffect, useState } from "react";

import blueBomb from "assets/decorations/paintbomb_blue.png";
import redBomb from "assets/decorations/paintbomb_red.png";
import yellowBomb from "assets/decorations/paintbomb_yellow.png";
import purpleBomb from "assets/decorations/paintbomb_purple.png";
import greenBomb from "assets/decorations/paintbomb_green.png";
import giftIcon from "assets/icons/gift.png";

import { Panel } from "components/ui/Panel";
import { PortalContext } from "../lib/PortalProvider";
import { useActor } from "@xstate/react";
import { Box } from "components/ui/Box";
import { Label } from "components/ui/Label";
import { Button } from "components/ui/Button";
import { RequirementLabel } from "components/ui/RequirementsLabel";
import Decimal from "decimal.js-light";
import { SquareIcon } from "components/ui/SquareIcon";
import { complete, purchase } from "../lib/portalUtil";
import { FESTIVAL_OF_COLORS_DAILY } from "../lib/festivalOfColors";
import { secondsTillReset } from "features/helios/components/hayseedHank/HayseedHankV2";
import { secondsToString } from "lib/utils/time";
import { getKeys } from "features/game/types/craftables";
import { SUNNYSIDE } from "assets/sunnyside";

interface Props {
  onClose: () => void;
}
export const Bob: React.FC<Props> = ({ onClose }) => {
  const { portalService } = useContext(PortalContext);
  const [portalState] = useActor(portalService);
  const [showIntro, setShowIntro] = useState(!portalState.context.hasPurchased);

  const { inventory } = portalState.context.state;

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // TODO
      const isValidOrigin = true; //event.oring === 'https://example.com'

      // Check if the origin of the message is trusted
      if (isValidOrigin) {
        // Handle the received message
        if (event.data.event === "purchased") {
          portalService.send("PURCHASED");
          onClose();
        }
      } else {
        // eslint-disable-next-line no-console
        console.error("Received message from untrusted origin:", event.origin);
      }
    };

    // Add event listener to listen for messages from the parent window
    window.addEventListener("message", handleMessage);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  if (showIntro) {
    return (
      <SpeakingModal
        message={[
          {
            text: "Howdy Bumpkin, would you like to play a game?",
          },
          {
            text: "It's a game of hide and seek! The rules are simple, I will hide 5 paint bombs and you will have to find them.",
          },
          {
            text: "If you find them all, I will reward you with a prize. Seems simple huh?",
          },
          {
            text: "There's only one catch, you'll have to pay to play!",
          },
        ]}
        onClose={() => setShowIntro(false)}
        bumpkinParts={NPC_WEARABLES.bob}
      />
    );
  }

  const dateKey = new Date().toISOString().split("T")[0];
  const reward =
    portalState.context.state.minigames.prizes["festival-of-colors"];

  if (!reward) {
    return (
      <Panel>
        <span>Hmmm, looks like there is no reward today</span>
      </Panel>
    );
  }
  const challenge = FESTIVAL_OF_COLORS_DAILY[dateKey];

  const hasRequirements = getKeys(challenge.requires).every((item) =>
    (inventory[item] ?? new Decimal(0)).gte(challenge.requires[item] ?? 0)
  );

  const secondLeft = secondsTillReset();

  const bombs = portalState.context.paintBombs || [];

  const claimedAt =
    !!portalState.context.state.minigames.games["festival-of-colors"]?.history[
      dateKey
    ].prizeClaimedAt;

  if (portalState.context.hasPurchased) {
    return (
      <Panel>
        <div className="p-2">
          <div className="flex justify-between">
            <Label className="-ml-1" type="default">
              Find the paint bombs
            </Label>
            <Label type="info">{`${secondsToString(secondLeft, {
              length: "short",
            })} left`}</Label>
          </div>
          <div className="flex mb-1">
            <Box
              image={blueBomb}
              secondaryImage={
                bombs.includes("Blue") ? SUNNYSIDE.icons.confirm : undefined
              }
            />
            <Box
              image={redBomb}
              secondaryImage={
                bombs.includes("Red") ? SUNNYSIDE.icons.confirm : undefined
              }
            />
            <Box
              image={greenBomb}
              secondaryImage={
                bombs.includes("Green") ? SUNNYSIDE.icons.confirm : undefined
              }
            />
            <Box
              image={purpleBomb}
              secondaryImage={
                bombs.includes("Purple") ? SUNNYSIDE.icons.confirm : undefined
              }
            />
            <Box
              image={yellowBomb}
              secondaryImage={
                bombs.includes("Yellow") ? SUNNYSIDE.icons.confirm : undefined
              }
            />
          </div>

          <div
            className="flex justify-between w-full"
            style={{
              marginTop: "2px",
              paddingTop: "3px",
              borderStyle: "dashed",
              borderTop: "1px dashed #ead4aa",
              marginBottom: "6px",
            }}
          >
            <div className="flex items-center">
              <SquareIcon icon={giftIcon} width={7} />
              <span className="text-xs ml-1">Reward</span>
            </div>
            <Label type="warning">
              <span>{`${getKeys(reward.items)
                .map((name) => `${reward.items[name]}x${name}`)
                .join(" ")} ${getKeys(reward.wearables)
                .map((name) => `${reward.wearables[name]}x${name}`)
                .join(" ")}`}</span>
            </Label>
          </div>
        </div>
        {claimedAt ? (
          <Label type="success">Claimed</Label>
        ) : (
          <Button disabled={bombs.length < 5} onClick={() => complete()}>
            Claim reward
          </Button>
        )}
      </Panel>
    );
  }

  return (
    <Panel>
      <div className="p-2">
        <div className="flex justify-between">
          <Label className="-ml-1" type="default">
            Find the paint bombs
          </Label>
          <Label type="info">{`${secondsToString(secondLeft, {
            length: "short",
          })} left`}</Label>
        </div>
        <div className="flex mb-1">
          <Box image={blueBomb} />
          <Box image={redBomb} />
          <Box image={greenBomb} />
          <Box image={purpleBomb} />
          <Box image={yellowBomb} />
        </div>
        <Label className="-ml-1  mb-1" type="default">
          Entry fee
        </Label>
        <div className="mb-2">
          <span className="text-sm mb-2">{challenge.message}</span>
        </div>
        {getKeys(challenge.requires).map((item) => (
          <RequirementLabel
            key={item}
            type="item"
            item={item}
            balance={inventory[item] ?? new Decimal(0)}
            showLabel
            requirement={new Decimal(challenge.requires[item] ?? 0)}
          />
        ))}
        <div
          className="flex justify-between w-full"
          style={{
            marginTop: "2px",
            paddingTop: "3px",
            borderStyle: "dashed",
            borderTop: "1px dashed #ead4aa",
            marginBottom: "6px",
          }}
        >
          <div className="flex items-center">
            <SquareIcon icon={giftIcon} width={7} />
            <span className="text-xs ml-1">Reward</span>
          </div>
          <Label type="warning">
            <span>{`${getKeys(reward.items)
              .map((name) => `${reward.items[name]}x${name}`)
              .join(" ")} ${getKeys(reward.wearables)
              .map((name) => `${reward.wearables[name]}x${name}`)
              .join(" ")}`}</span>
          </Label>
        </div>
      </div>
      <Button
        disabled={!hasRequirements}
        onClick={() => purchase({ sfl: 0, items: challenge.requires })}
      >
        Start
      </Button>
    </Panel>
  );
};
