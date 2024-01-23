import router from "../router";


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
}