import { InventoryItemName, Wardrobe } from "features/game/types/game";
import { Bomb } from "./festivalOfColorsMachine";
import { Coordinates } from "features/game/expansion/components/MapPlacement";

type DailyChallenge = {
  requires: Partial<Record<InventoryItemName, number>>;
  reward: {
    items: Partial<Record<InventoryItemName, number>>;
    wearables: Wardrobe;
  };
  message: string;
  bombs: Record<Bomb, Coordinates>;
};

export const FESTIVAL_OF_COLORS_DAILY: Record<string, DailyChallenge> = {
  "2024-06-18": {
    requires: { Eggplant: 10 },
    reward: {
      items: { Mark: 2 },
      wearables: {},
    },
    message: "Today is purple day!",
    bombs: {
      Blue: { x: 580, y: 540 },
      Green: { x: 560, y: 540 },
      Purple: { x: 540, y: 540 },
      Red: { x: 520, y: 540 },
      Yellow: { x: 500, y: 540 },
    },
  },
};
