import demos from "./modules/demos.js"
import cesium from "./modules/cesium.js"

export default function getNavList() {
    const navList = {
        "demosList": [...demos.children],
        "cesiumList": [...cesium.children]
    }

    return navList
}