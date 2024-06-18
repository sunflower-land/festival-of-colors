import mapJson from "assets/map/festival_of_colors.json";
import tileset from "assets/map/festival_of_colors_tileset.json";
import confetti from "canvas-confetti";
import { SceneId } from "features/world/mmoMachine";
import { BaseScene, NPCBumpkin } from "features/world/scenes/BaseScene";
import { MachineInterpreter } from "./lib/festivalOfColorsMachine";
import { FESTIVAL_OF_COLORS_DAILY } from "./lib/festivalOfColors";
import { getKeys } from "features/game/types/craftables";
import { goHome } from "./lib/portalUtil";

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
    this.load.spritesheet("waterfall", "world/waterfall_sheet.png", {
      frameWidth: 159,
      frameHeight: 260,
    });
    this.load.spritesheet("portal", "world/color_portal.webp", {
      frameWidth: 47,
      frameHeight: 47,
    });
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

    const waterfall = this.add.sprite(417.5, 672, "waterfall");
    this.anims.create({
      key: "waterfall_anim",
      frames: this.anims.generateFrameNumbers("waterfall", {
        start: 0,
        end: 10,
      }),
      repeat: -1,
      frameRate: 10,
    });
    waterfall.play("waterfall_anim", true);
    waterfall.setDepth(1000000);

    const portal = this.add.sprite(637.5, 541.5, "portal");
    this.anims.create({
      key: "portal_anim",
      frames: this.anims.generateFrameNumbers("portal", {
        start: 0,
        end: 10,
      }),
      repeat: -1,
      frameRate: 10,
    });
    portal.play("portal_anim", true);
    portal.setInteractive({ cursor: "pointer" }).on("pointerdown", () => {
      goHome();
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

      bomb.setDepth(1000000000);

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
