export default [
  {
    key: "pinkPlayer",
    frameWidth: 32,
    frameHeight: 32,
    animations: [
      {
        key: "pinkIdle",
        path: "../assets/1 Pink_Monster/Pink_Monster_Idle_4.png",
        start: 0,
        end: 3,
        frameRate: 5,
        repeat: -1,
      },
      {
        key: "pinkWalk",
        path: "../assets/1 Pink_Monster/Pink_Monster_Walk_6.png",
        start: 0,
        end: 5,
        frameRate: 5,
        repeat: -1,
      },
      {
        key: "pinkJump",
        path: "../assets/1 Pink_Monster/Pink_Monster_Jump_8.png",
        start: 0,
        end: 7,
        frameRate: 3,
        repeat: 0,
      },
      {
        key: "pinkHighAttack",
        path: "../assets/1 Pink_Monster/Pink_Monster_Attack1_4.png",
        start: 0,
        end: 3,
        frameRate: 15,
        repeat: 0,
      },
      {
        key: "pinkMidAttack",
        path: "../assets/1 Pink_Monster/Pink_Monster_Push_6.png",
        start: 0,
        end: 5,
        frameRate: 6,
        repeat: 0,
      },
    ],
  },
  {
    key: "owlPlayer",
    frameWidth: 32,
    frameHeight: 32,
    animations: [
      {
        key: "owlIdle",
        path: "../assets/2 Owlet_Monster/Owlet_Monster_Idle_4.png",
        start: 0,
        end: 3,
        frameRate: 5,
        repeat: -1,
      },
    ],
  },
];
