import demos from "./modules/demos.js"
import cesium from "./modules/cesium.js"

export default function getNavList() {
    return {
        "demosList": [...demos.children],
        "cesiumList": [...cesium.children]
    }
}