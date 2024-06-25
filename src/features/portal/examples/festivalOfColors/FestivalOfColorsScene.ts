import mapJson from "assets/map/festival_of_colors.json";
import tileset from "assets/map/festival_of_colors_tileset.json";
import confetti from "canvas-confetti";
import { SceneId } from "features/world/mmoMachine";
import { BaseScene, NPCBumpkin } from "features/world/scenes/BaseScene";
import { Bomb, MachineInterpreter } from "./lib/festivalOfColorsMachine";
import { FESTIVAL_OF_COLORS_DAILY } from "./lib/festivalOfColors";
import { goHome } from "./lib/portalUtil";
import { Coordinates } from "features/game/expansion/components/MapPlacement";

export const NPCS: NPCBumpkin[] = [
  {
    x: 287,
    y: 530,
    npc: "bob",
    direction: "left",
  },
  {
    x: 473,
    y: 285,
    npc: "rodolfo",
  },
];

export class FestivalOfColorsScene extends BaseScene {
  sceneId: SceneId = "festival_of_colors";
  private audioWaterfall!: Phaser.Sound.BaseSound;
  private waterfallSprite!: Phaser.GameObjects.Sprite;

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
    this.load.audio("audioWaterfall", "world/soundWaterfall.mp3");
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

    this.layers["Day 1"].setVisible(false);
    this.layers["Day 2"].setVisible(false);
    this.layers["Day 3"].setVisible(false);
    this.layers["Day 4"].setVisible(false);
    this.layers["Day 5"].setVisible(false);

    this.initialiseNPCs(NPCS);

    if (this.portalService?.state.context.hasPurchased) {
      this.addPaintBombs();
    }

    this.portalService?.onEvent((event) => {
      if (event.type === "PURCHASED") {
        this.addPaintBombs();
      }
    });

    this.waterfallSprite = this.add.sprite(401.5, 656, "waterfall");
    this.anims.create({
      key: "waterfall_anim",
      frames: this.anims.generateFrameNumbers("waterfall", {
        start: 0,
        end: 10,
      }),
      repeat: -1,
      frameRate: 10,
    });
    this.waterfallSprite.play("waterfall_anim", true);
    this.waterfallSprite.setDepth(1000000);

    this.audioWaterfall = this.sound.add("audioWaterfall", {
      loop: true,
      volume: 0,
    });
    this.audioWaterfall.play();

    const portal = this.add.sprite(621.5, 525.5, "portal");
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

  update() {
    super.update();

    if (this.currentPlayer && this.waterfallSprite) {
      const distance = Phaser.Math.Distance.Between(
        this.currentPlayer.x,
        this.currentPlayer.y,
        this.waterfallSprite.x,
        this.waterfallSprite.y
      );

      const maxDistance = 300;
      const minVolume = 0.1;
      const maxVolume = 1;

      let volume = minVolume;
      if (distance < maxDistance) {
        volume = Phaser.Math.Linear(
          maxVolume,
          minVolume,
          distance / maxDistance
        );
      }

      (this.audioWaterfall as any).setVolume(volume);
    }
  }

  private addPaintBombs() {
    const dateKey = new Date().toISOString().split("T")[0];
    const challenge = FESTIVAL_OF_COLORS_DAILY[dateKey];

    const day1Layer = this.map.getLayer(challenge.layer)?.tilemapLayer;
    const coordinates: Coordinates[] = [];
    day1Layer?.forEachTile((obj) => {
      if (obj.index === -1) return;

      coordinates.push({
        x: obj.pixelX,
        y: obj.pixelY,
      });
    });

    const collected = this.portalService?.state.context.paintBombs;

    const bombs: Bomb[] = ["Red", "Blue", "Green", "Yellow", "Purple"];
    bombs.forEach((name, index) => {
      if (collected?.includes(name)) return;

      const bomb = this.add.sprite(
        coordinates[index].x,
        coordinates[index].y,
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
