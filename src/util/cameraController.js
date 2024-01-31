import * as Cesium from "cesium"


/**
 * 通过按键移动相机
 * @date 1/26/2024 - 1:23:50 PM
 *
 * @param {viewer} viewer
 * @param {float} [rotateRate=0.1]
 * @param {int} [moveRate=100]
 */
function addCameraController(
  viewer,
  rotateRate = 0.1,
  moveRate = 100
) {
  document.addEventListener("keydown", e => {
    // 获取相机离地面的高度
    var height = viewer.camera.positionCartographic.height;
    var calculatedMoveRate = height / moveRate;
    switch (e.key) {
      case "w":
        viewer.camera.moveForward(calculatedMoveRate);
        break;

      case "s":
        viewer.camera.moveBackward(calculatedMoveRate);
        break;

      case "a":
        viewer.camera.moveLeft(calculatedMoveRate);
        break;

      case "d":
        viewer.camera.moveRight(calculatedMoveRate);
        break;

      case "ArrowLeft":
        viewer.camera.lookLeft(Cesium.Math.toRadians(rotateRate));
        break;

      case "ArrowRight":
        viewer.camera.lookRight(Cesium.Math.toRadians(rotateRate));
        break;

      case "ArrowUp":
        viewer.camera.lookUp(Cesium.Math.toRadians(rotateRate));
        break;

      case "ArrowDown":
        viewer.camera.lookDown(Cesium.Math.toRadians(rotateRate));
        break;

      case "q":
        // 向左逆时针翻滚
        viewer.camera.twistLeft(Cesium.Math.toRadians(rotateRate));
        break;

      case "e":
        // 向右顺时针翻滚
        viewer.camera.twistRight(Cesium.Math.toRadians(rotateRate));
        break;

      default:
        // 处理未知按键
        break;
    }
  })
}

export {
  addCameraController
}
