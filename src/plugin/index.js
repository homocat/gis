import router from "../router";
import DataVVue3Plugin from "@kjgl77/datav-vue3";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

/**
 * 注册中间件
 * @date 1/23/2024 - 10:18:58 PM
 *
 * @export
 * @param {vue root} app
 */
export function registerPlugin(app) {
    app
        .use(router)
        .use(DataVVue3Plugin)
        .use(ElementPlus)
}