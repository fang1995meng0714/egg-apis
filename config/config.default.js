/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1660706786580_6362';

  config.security = {
    csrf:{
        enable: false,
    }
  }

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    mysql: {
      app: true,
      agent: false,
      client: {
        host: "152.136.110.69",
        port: "3306",
        user: "root",
        password: "root1234",
        database:"egg_db"
      }
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
