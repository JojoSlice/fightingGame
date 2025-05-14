export default class Player {
  constructor(scene, x, y, spriteKey, idleanim, controls) {
    this.scene = scene;
    this.controls = controls;
    this.speed = 200;
    this.attacking = false;

    this.sprite = scene.physics.add.sprite(x, y, spriteKey);
    this.sprite.setCollideWorldBounds(true);

    this.sprite.play(idleanim);
    this.sprite.setScale(2);
  }

  update() {
    const keys = this.controls;

    let isGround = this.sprite.body.blocked.down;
    let isFalling = this.sprite.body.velocity.y > 0;

    if (isGround && !this.attacking) {
      if (keys.left.isDown) {
        this.sprite.setVelocityX(-this.speed);
        this.sprite.setFlipX(true);
        if (this.sprite.anims.currentAnim?.key !== "pinkWalk") {
          this.sprite.play("pinkWalk");
        }
      } else if (keys.right.isDown) {
        this.sprite.setVelocityX(this.speed);
        this.sprite.setFlipX(false);
        if (this.sprite.anims.currentAnim?.key !== "pinkWalk") {
          this.sprite.play("pinkWalk");
        }
      } else {
        this.sprite.setVelocityX(0);
        if (this.sprite.anims.currentAnim?.key !== "pinkIdle") {
          this.sprite.play("pinkIdle");
        }
      }
    }

    if (isGround && keys.jump.isDown && !this.attacking) {
      this.sprite.setVelocityY(-400);
      this.sprite.play("pinkJump");

      if (keys.left.isDown) {
        this.sprite.setVelocityX(-this.speed);
        this.sprite.setFlipX(true);
      } else if (keys.right.isDown) {
        this.sprite.setVelocityX(this.speed);
        this.sprite.setFlipX(false);
      }
    }

    if (isFalling) {
      this.sprite.body.setGravityY(500);
    }

    if (Phaser.Input.Keyboard.JustDown(keys.highAttack)) {
      console.log("high attack");
      this.attacking = true;
      if (isGround) {
        this.sprite.setVelocityX(0);
      }
      if (this.sprite.anims.currentAnim?.key !== "pinkHighAttack") {
        this.sprite.play("pinkHighAttack");
      }
    }
    if (isGround) {
      if (Phaser.Input.Keyboard.JustDown(keys.midAttack)) {
        this.attacking = true;
        if (this.sprite.flipX) {
          this.sprite.setVelocityX(-50);
        } else {
          this.sprite.setVelocityX(50);
        }
        console.log("mid attack");
        if (this.sprite.anims.currentAnim?.key !== "pinkMidAttack") {
          this.sprite.play("pinkMidAttack");
        }
      }
    }
    if (Phaser.Input.Keyboard.JustDown(keys.lowAttack)) {
      console.log("low attack");
    }
    if (Phaser.Input.Keyboard.JustDown(keys.special)) {
      console.log("special!");
    }

    this.sprite.on("animationcomplete", (animation, frame) => {
      if (
        animation.key === "pinkHighAttack" ||
        animation.key === "pinkMidAttack"
      ) {
        console.log("Animationen är klar!");
        this.sprite.play("pinkIdle");
        this.attacking = false;
      }
    });
  }
}
