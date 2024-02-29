// 引入css
import './style/style1.css'
// 引入less
import './style/style2.less'

console.log('window.ENV', ENV)

const print = (info) => {
  console.log(info)
}
print('hello webpack 5')

import _ from 'lodash'
console.log(_.each)


import { sum } from './math'
const sumRes = sum(10, 20)
console.log('sumRes', sumRes)

// 引入图片
function insertImgElem(imgFile) {
    const img = new Image()
    img.src = imgFile
    document.body.appendChild(img)
}
import imgFile1 from './img/1.png'
insertImgElem(imgFile1)
import imgFile2 from './img/2.jpeg'
insertImgElem(imgFile2)

// 引入动态数据-懒加载  （默认支持）
setTimeout(() => {
  import('./dynamic-data.js').then(res => {
    console.log(res.default.message)
  })
}, 3000)

// import moment from 'moment'
// moment.locale('zh-cn') // 设置语言为中文
// console.log('local', moment.locale())
// console.log('date', moment().format('ll'))

import moment from 'moment'
import 'moment/locale/zh-cn' // 手动引入中文语言包
moment.locale('zh-cn')
console.log('local', moment.locale())
console.log('date', moment().format('ll'))