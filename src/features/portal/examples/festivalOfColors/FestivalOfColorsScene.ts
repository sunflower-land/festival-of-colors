import mapJson from "assets/map/festival_of_colors.json";
import tileset from "assets/map/festival_of_colors_tileset.json";
import confetti from "canvas-confetti";
import { SceneId } from "features/world/mmoMachine";
import { BaseScene, NPCBumpkin } from "features/world/scenes/BaseScene";
import { MachineInterpreter } from "./lib/festivalOfColorsMachine";
import { FESTIVAL_OF_COLORS_DAILY } from "./lib/festivalOfColors";
import { getKeys } from "features/game/types/craftables";

export const NPCS: NPCBumpkin[] = [
  {
    x: 287,
    y: 530,
    npc: "bob",
    direction: "left",
  },
  {
    x: 650,
    y: 550,
    npc: "rodolfo",
  },
];

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

    this.load.image("Blue", "world/paintbomb_blue.png");
    this.load.image("Red", "world/paintbomb_red.png");
    this.load.image("Green", "world/paintbomb_green.png");
    this.load.image("Yellow", "world/paintbomb_yellow.png");
    this.load.image("Purple", "world/paintbomb_purple.png");
  }
  async create() {
    this.map = this.make.tilemap({
      key: "festival_of_colors",
    });

    super.create();

    this.initialiseNPCs(NPCS);

    if (this.portalService?.state.context.hasPurchased) {
      this.addPaintBombs();
    }

    this.portalService?.onEvent((event) => {
      if (event.type === "PURCHASED") {
        this.addPaintBombs();
      }
    });
  }

  private addPaintBombs() {
    const dateKey = new Date().toISOString().split("T")[0];
    const challenge = FESTIVAL_OF_COLORS_DAILY[dateKey];

    const collected = this.portalService?.state.context.paintBombs;

    getKeys(challenge.bombs).forEach((name) => {
      if (collected?.includes(name)) return;

      const bomb = this.add.sprite(
        challenge.bombs[name].x,
        challenge.bombs[name].y,
        name
      );
      this.physics.world.enable(bomb);

      (bomb.body as Phaser.Physics.Arcade.Body)
        .setSize(10, 10)
        .setOffset(3, 3)
        .setImmovable(true)
        .setCollideWorldBounds(true);

      this.physics.add.overlap(
        this.currentPlayer as Phaser.GameObjects.GameObject,
        bomb as Phaser.GameObjects.GameObject,
        () => {
          bomb.destroy();
          confetti();
          this.portalService?.send("COLLECT_BOMB", { bomb: name });
        }
      );
    });
  }

  public get portalService() {
    return this.registry.get("portalService") as MachineInterpreter | undefined;
  }
}
