import { InventoryItemName, Wardrobe } from "features/game/types/game";
import { Bomb } from "./festivalOfColorsMachine";
import { Coordinates } from "features/game/expansion/components/MapPlacement";

type DailyChallenge = {
  requires: Partial<Record<InventoryItemName, number>>;
  message: string;
  bombs: Record<Bomb, Coordinates>;
};

export const FESTIVAL_OF_COLORS_DAILY: Record<string, DailyChallenge> = {
  "2024-06-18": {
    requires: { Sunflower: 10 },
    message: "Today is purple day!",
    bombs: {
      Blue: { x: 580, y: 560 },
      Green: { x: 560, y: 560 },
      Purple: { x: 540, y: 560 },
      Red: { x: 520, y: 560 },
      Yellow: { x: 500, y: 560 },
    },
  },
};
