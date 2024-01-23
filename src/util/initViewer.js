import * as Cesium from "cesium"
import cesiumConfig from "../config/cesium.config"

Cesium.Ion.defaultAccessToken = cesiumConfig.IonDefaultAccessToken


/**
 * 初始化 cesium
 * @date 1/23/2024 - 10:17:36 PM
 *
 * @export
 * @param {string} [id="cesiumContainer"]
 * @returns {Cesium.Viewer} viewer
 */
export function initViewer(id = "cesiumContainer") {
  const viewer = new Cesium.Viewer(id, {
    infoBox: false,
  })

  return viewer
}