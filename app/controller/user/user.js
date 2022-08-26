'use strict';
const Controller = require('egg').Controller;

class UserController extends Controller {
  async register() {
    const { ctx, service } = this;
    const params = ctx.request.body;
    if (!params.username) {
      return ctx.body = '用户名不能为空';
    } else if (!params.password) {
      return ctx.body = '密码不能为空';
    }
    // const res = await service.user
    const res = await service.common.getUser(ctx.request.body);
    if(res.length) {
      return ctx.body = '用户已存在';
    }
    const data = await service.user.register(params);
    if (data.affectedRows === 1) {
      ctx.body = {
        code: 1,
        message: '新增用户成功'
      };
    } else {
      ctx.body = {
        code: 0,
        message: '新增用户失败'
      };
    }
  }

  async login() {
    const { ctx, service } = this;
    const params = ctx.request.body;
    if (!params.username) {
      return ctx.body = '用户名不能为空';
    } else if (!params.password) {
      return ctx.body = '密码不能为空';
    }

    const login = await service.user.login(params);
    if(login) {
      ctx.body = {
        code: 1,
        message: '密码正确'
      };
    } else {
      ctx.body = {
        code: 0,
        message: '密码错误'
      };
    }
  }
}

module.exports = UserController;
