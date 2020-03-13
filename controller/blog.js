const { exec } = require('../db/mySql')

const getList = (author, keyword) => {
    let sql = `select * from blogs;`

    console.log(exec(sql))

    return exec(sql)

    // return [
    //     {
    //         id: 1,
    //         title: '标题1',
    //         desc: '内容1',
    //         createtime: '1583979353606'
    //     },
    //     {
    //         id: 2,
    //         title: '标题2',
    //         desc: '内容2',
    //         createtime: '1583979353606'
    //     },
    //     {
    //         id: 3,
    //         title: '标题3',
    //         desc: '内容3',
    //         createtime: '1583979353606'
    //     },
    //     {
    //         id: 4,
    //         title: '标题4',
    //         desc: '内容4',
    //         createtime: '1583979353606'
    //     }        
    // ]
}

module.exports = {
    getList
}