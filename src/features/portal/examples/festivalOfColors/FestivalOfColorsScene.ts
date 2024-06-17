import mapJson from "assets/map/festival_of_colors.json";
import tileset from "assets/map/festival_of_colors_tileset.json";
import { SceneId } from "features/world/mmoMachine";
import { BaseScene } from "features/world/scenes/BaseScene";

export class FestivalOfColorsScene extends BaseScene {
  sceneId: SceneId = "festival_of_colors";

  constructor() {
    super({
      name: "festival_of_colors",
      map: {
        json: mapJson,
        imageKey: "festival-of-colors-tileset",
        defaultTilesetConfig: tileset,
      },
      audio: { fx: { walk_key: "dirt_footstep" } },
    });
  }

  preload() {
    super.preload();
  }
  async create() {
    this.map = this.make.tilemap({
      key: "festival_of_colors",
    });

    super.create();
  }
}
