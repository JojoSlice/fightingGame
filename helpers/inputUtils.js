export function createControls(scene, controlMap) {
  const result = {};
  for (const action in controlMap) {
    const keyName = controlMap[action];
    result[action] = scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes[keyName.toUpperCase()],
    );
  }
  return result;
}
