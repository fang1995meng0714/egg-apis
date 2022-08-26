'use strict';
const Controller = require('egg').Controller;

class UserController extends Controller {
  async register() {
    
    const { ctx, service } = this;
    const params = ctx.request.body;
    console.log(params)
    if (!params.username) {
      return ctx.body = '用户名不能为空';
    } else if (!params.password) {
      return ctx.body = '密码不能为空';
    }
    console.log(22222)
    // const res = await service.user
    const res = await service.common.getUser(ctx.request.body);
    console.log(3333)
    if(res.length) {
      return ctx.body = '用户已存在';
    }
    console.log(66666)
    const data = await service.user.register(params);
    console.log(77777)
    if (data.affectedRows === 1) {
      ctx.body = '新增用户成功';
    } else {
      ctx.body = '新增用户失败';
    }
  }
}

module.exports = UserController;
