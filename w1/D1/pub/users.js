const express = require('express')
const router  = express.Router()

router.get('/adduser',(res,req,next)=>{
    req.send('添加用户成功')
})

module.exports = router;