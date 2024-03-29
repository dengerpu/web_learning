// 3
// 123 O
// 234 X
// 321 O
let arr =[]
let line;
let index = 0;
while ((line = read_line()) != "") {
    if(index == 0) {
      n = parseInt(line)
      index++ 
    }else {
      const tokens = line.split(' '); 
      arr = tokens.map(item => {
        return parseInt(item)
      })
    }
}