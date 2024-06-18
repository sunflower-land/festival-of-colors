import { Coordinates } from "features/game/expansion/components/MapPlacement";
import { SceneId } from "../mmoMachine";

export type SpawnLocation = Record<
  SceneId,
  { default: Coordinates } & Partial<Record<SceneId, Coordinates>>
>;

const randomXOffset = Math.random() * 60;
const randomYOffset = Math.random() * 20;

export const SPAWNS: () => SpawnLocation = () => ({
  festival_of_colors: {
    default: {
      x: 600,
      y: 550,
    },
  },
  goblin_house: {
    // Make sure everyone doesn't spawn in same spot
    default: {
      x: 230 + randomXOffset,
      y: 420 - randomYOffset,
    },
  },
  sunflorian_house: {
    // Make sure everyone doesn't spawn in same spot
    default: {
      x: 230 + randomXOffset,
      y: 420 - randomYOffset,
    },
  },
  nightshade_house: {
    // Make sure everyone doesn't spawn in same spot
    default: {
      x: 230 + randomXOffset,
      y: 420 - randomYOffset,
    },
  },
  bumpkin_house: {
    // Make sure everyone doesn't spawn in same spot
    default: {
      x: 230 + randomXOffset,
      y: 420 - randomYOffset,
    },
  },
  faction_house: {
    // Make sure everyone doesn't spawn in same spot
    default: {
      x: 230 + randomXOffset,
      y: 420 - randomYOffset,
    },
  },
  kingdom: {
    // Make sure everyone doesn't spawn in same spot
    default: {
      x: 235,
      y: 845,
    },
  },
  retreat: {
    // Make sure everyone doesn't spawn in same spot
    default: {
      x: 290 + randomXOffset,
      y: 420 - randomYOffset,
    },
  },
  plaza: {
    // Make sure everyone doesn't spawn in same spot
    default: {
      x: 400 + randomXOffset,
      y: 450 - randomYOffset,
    },

    kingdom: {
      x: 64,
      y: 35,
    },

    woodlands: {
      x: 850,
      y: 142,
    },
    beach: {
      x: 26,
      y: 318,
    },
  },
  crop_boom: {
    default: {
      x: 220,
      y: 422,
    },
  },
  mushroom_forest: {
    default: {
      x: 220,
      y: 422,
    },
  },
  beach: {
    default: {
      x: 450,
      y: 652,
    },
  },

  auction_house: {
    default: {
      x: 170,
      y: 242,
    },
  },
  clothes_shop: {
    default: {
      x: 144,
      y: 245,
    },
  },
  decorations_shop: {
    default: {
      x: 81,
      y: 215,
    },
  },
  windmill_floor: {
    default: {
      x: 80,
      y: 140,
    },
  },
  woodlands: {
    default: {
      x: 30,
      y: 290,
    },
  },
});
