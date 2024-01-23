import * as Cesium from "cesium"
import cesiumConfig from "../config/cesium.config"

Cesium.Ion.defaultAccessToken = cesiumConfig.IonDefaultAccessToken

export function initViewer(id = "cesiumContainer") {
  const viewer = new Cesium.Viewer(id, {
    infoBox: false,
  })

  return viewer
}