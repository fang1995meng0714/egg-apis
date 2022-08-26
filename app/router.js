'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/apis/register', controller.user.user.register);
  router.post('/apis/login', controller.user.user.login);
};
