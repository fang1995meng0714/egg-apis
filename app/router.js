'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/apis/register', controller.user.user.register);
  // router.get('/apis/user', controller.user.user.index);
};
