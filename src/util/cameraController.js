import * as Cesium from "cesium"


/**
 * 通过按键移动相机
 * @date 1/26/2024 - 1:23:50 PM
 *
 * @param {viewer} viewer
 * @param {number} [rotateRate=0.1]
 * @param {number} [moveRate=100]
 */
function addCameraController(
  viewer,
  rotateRate = 0.1,
  moveRate = 100
) {
  document.addEventListener("keydown", e => {
    // 获取相机离地面的高度
    // var height = viewer.camera.positionCartographic.height;
    // var moveRate = height / 100;
    switch (e.key) {
      case "w":
        // 设置相机向前移动
        viewer.camera.moveForward(moveRate);
        break;

      case "s":
        // 设置相机向后移动
        viewer.camera.moveBackward(moveRate);
        break;

      case "a":
        // 设置相机向左移动
        viewer.camera.moveLeft(moveRate);
        break;

      case "d":
        // 设置相机向右移动
        viewer.camera.moveRight(moveRate);
        break;

      case "ArrowLeft":
        // 设置相机向左旋转相机
        viewer.camera.lookLeft(Cesium.Math.toRadians(rotateRate));
        break;

      case "ArrowRight":
        // 设置相机向右旋转相机
        viewer.camera.lookRight(Cesium.Math.toRadians(rotateRate));
        break;

      case "ArrowUp":
        // 设置相机向上旋转相机
        viewer.camera.lookUp(Cesium.Math.toRadians(rotateRate));
        break;

      case "ArrowDown":
        // 设置相机向下旋转相机
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
