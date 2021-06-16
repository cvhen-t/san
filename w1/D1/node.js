const express = require('express')
const app =express()
const router = require('./pub')
// const router = express.Router();


// app.use(express.static('./pub'))

app.use('/api',router)

app.listen(2012,()=>{
    console.log('启动成功')
})