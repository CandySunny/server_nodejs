// 环境参数
const env = process.env.NODE_ENV

// mySql 配置
let MYSQL_CONF = {}

// 开发环境
if (env === 'dev'){
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'admin',
        port: '3306',
        database: 'blog_react'
    }
}

// 线上环境
if(env === 'production'){
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'admin',
        port: '3306',
        database: 'blog_react'
    }
}

module.exports = {
    MYSQL_CONF
}