module.exports = function (source) {
  // source 就是源文件的内容
  // 这里我们简单地将源文件内容转换为大写
  if(source) {
    console.log('执行loader前', source)
    source = source[0].toUpperCase() + source.slice(1);
    console.log('执行loader后', source)
  } 
  return `module.exports = '${source}'`
}