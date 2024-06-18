import { InventoryItemName, Wardrobe } from "features/game/types/game";
import { Bomb } from "./festivalOfColorsMachine";
import { Coordinates } from "features/game/expansion/components/MapPlacement";

type DailyChallenge = {
  requires: Partial<Record<InventoryItemName, number>>;
  layer: string; // Tiled Layer Name
};

export const FESTIVAL_OF_COLORS_DAILY: Record<string, DailyChallenge> = {
  "2024-06-18": {
    requires: { Sunflower: 10 },
    layer: "Day 1",
  },
  "2024-06-19": {
    requires: { Potato: 10 },
    layer: "Day 2",
  },
  "2024-06-20": {
    requires: { Corn: 5 },
    layer: "Day 3",
  },
  "2024-06-21": {
    requires: { Sunflower: 10 },
    layer: "Day 4",
  },
  "2024-06-22": {
    requires: { Pumpkin: 10 },
    layer: "Day 5",
  },
  "2024-06-23": {
    requires: { Sunflower: 10 },
    layer: "Day 1",
  },
  "2024-06-24": {
    requires: { Potato: 10 },
    layer: "Day 2",
  },
  "2024-06-25": {
    requires: { Sunflower: 25 },
    layer: "Day 3",
  },
  "2024-06-26": {
    requires: { Potato: 50 },
    layer: "Day 4",
  },
  "2024-06-27": {
    requires: { Soybean: 10 },
    layer: "Day 5",
  },
  "2024-06-28": {
    requires: { Cabbage: 25 },
    layer: "Day 1",
  },
  "2024-06-29": {
    requires: { Radish: 50 },
    layer: "Day 2",
  },
};
