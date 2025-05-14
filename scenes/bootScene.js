export default class Bootscene extends Phaser.Scene {
  constructor() {
    super("Bootscene");
  }

  preload() {
    this.load.audio("bgmusic", "../sounds/music/Project_86slow.mp3");
    this.load.image("menuBackground", "../images/Clouds/Clouds2/1.png");
    this.load.image("startButton", "../assets/menu/PlayText/Default.png");
    this.load.image("startButtonHover", "../assets/menu/PlayText/Hover.png");
  }

  create() {
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;

    const width = winWidth / 2;
    const height = winHeight / 2;
    this.add
      .image(width, height, "menuBackground")
      .setOrigin(0.5)
      .setDisplaySize(winWidth, winHeight);

    const music = this.sound.add("bgmusic", {
      loop: true,
      volume: 0.8,
    });

    music.play();

    const startButton = this.add
      .image(width, height, "startButton")
      .setOrigin(0.5)
      .setInteractive();

    startButton.on("pointerover", () => {
      startButton.setTexture("startButtonHover");
      startButton.setScale(1.1);
      startButton.setTint(0xff0000);
    });

    startButton.on("pointerout", () => {
      startButton.setTexture("startButton");
      startButton.setScale(1);
      startButton.clearTint();
    });

    startButton.on("pointerdown", () => {
      startButton.setTexture("startButton");
      startButton.setTint(0xff0000);
      startButton.setScale(0.9);
      this.scene.start("BattleScene");
    });
  }
}
