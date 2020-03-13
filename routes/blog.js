const router = require('koa-router')()
const { SuccessModel, ErrModel } = require('../model/resModel')
const { getList } = require('../controller/blog')

router.prefix('/api/blog')

router.get('/list', async function (ctx, next) {
  const list = await getList('sss','')
  ctx.body = new SuccessModel(list)
})

module.exports = router
