function parseTime(time, pattern) {
  if(arguments.length === 0 || !time) {
    return null;
  }
  const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if(typeof time === 'object') {
    date = time;
  } else {
    // 判断是否是时间戳
    if(typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    } else if(typeof time === 'string') {
      time = time.replace(new RegExp(/-/gm), '/').replace('T', ' ').replace(new RegExp(/\.[\d]{3}/gm), '');
    }
    if(typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    if(key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value];
    } else if(result.length > 0 && value < 10) {
      value = '0' + value;
    }
    return value || 0;
  })
  return time_str;
}
console.log(parseTime(Date.now()));
console.log(parseTime('2022-01-01 00:00:00'));
console.log(parseTime(1640995200000));
console.log(parseTime(1640995200));
console.log(parseTime('2022-01-01T00:00:00.000Z'));
console.log(parseTime('2022-01-01T00:00:00.000Z', '{y}-{m}-{d} {h}:{i}'));