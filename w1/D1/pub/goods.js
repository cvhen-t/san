const express = require('express')
const router = express.Router()
router.get('/list',(res,req,next)=>{
    req.send('展示商品列表成功')
})

module.exports = router;