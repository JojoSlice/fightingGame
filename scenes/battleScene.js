import Player from "../models/player.js";
import playerConfig from "../configs/playerConfig.js";
import controllConfig from "../configs/controllConfig.js";
import { createControls } from "../helpers/inputUtils.js";

export default class BattleScene extends Phaser.Scene {
  constructor() {
    super({ key: "BattleScene" });
  }

  preload() {
    this.load.image("bg1", "../images/Clouds/Clouds2/1.png");
    this.load.image("bg2", "../images/Clouds/Clouds2/2.png");
    this.load.image("bg3", "../images/Clouds/Clouds2/3.png");
    this.load.image("bg4", "../images/Clouds/Clouds2/4.png");

    playerConfig.forEach((player) => {
      player.animations.forEach((anim) => {
        this.load.spritesheet(anim.key, anim.path, {
          frameWidth: player.frameWidth,
          frameHeight: player.frameHeight,
        });
      });
    });
  }

  create() {
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;

    const width = winWidth / 2;
    const height = winHeight / 2;

    const bgKeys = ["bg1", "bg2", "bg3", "bg4"];
    const scrollFactors = [0, 0.4, 0.6, 1.0];

    this.backgroundLayers = bgKeys.map((key, index) => {
      const layer = this.add.image(width, height, key).setOrigin(0.5);
      layer.setScrollFactor(scrollFactors[index]);

      const scaleX = winWidth / layer.width;
      const scaleY = winHeight / layer.height;
      const scale = Math.max(scaleX, scaleY);
      layer.setScale(scale);

      return layer;
    });

    const ground = this.add.rectangle(
      width,
      winHeight - 10,
      winWidth,
      10,
      0x00ff00,
    );
    this.physics.add.existing(ground, true);

    playerConfig.forEach((player) => {
      player.animations.forEach((anim) => {
        if (!this.anims.exists(anim.key)) {
          this.anims.create({
            key: anim.key,
            frames: this.anims.generateFrameNumbers(anim.key, {
              start: anim.start,
              end: anim.end,
            }),
            frameRate: anim.frameRate,
            repeat: anim.repeat,
          });
        }
      });
    });

    const controls = createControls(this, controllConfig.player);

    this.player = new Player(
      this,
      50,
      winHeight - 50,
      "pink",
      "pinkIdle",
      controls,
    );
    this.physics.add.collider(this.player.sprite, ground);

    this.cameras.main.setBounds(0, 0, winWidth, winHeight);
    this.physics.world.setBounds(0, 0, winWidth, winHeight);

    this.physics.world.gravity.y = 200;

    this.cameras.main.startFollow(this.player.sprite, true, 0.1, 0.1);
    this.cameras.main.setZoom(1.5);
  }

  update() {
    this.player.update();
  }
}
