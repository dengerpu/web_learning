// let options =[]
// let line;
// let index = 0;
// let arr = []
// while ((line = read_line()) != "") {
//     if(index == 0) {
//       n = parseInt(line)
//       index++ 
//     }else if(index == 1){
//       const tokens = line.split(' '); 
//       options = tokens.map(item => {
//         return parseInt(item)
//       })
//     } 
// }

let arr = []
let options = [1,5]
function rotate(options) {
  let arr = [[1,2,3],[4,5,6],[7,8,9]]
  options.forEach(n => {
    if(n >= 1 && n <= 3) {
      let temp = arr[n-1][2];
      arr[n-1][2] = arr[n-1][1];
      arr[n-1][1] = arr[n-1][0];
      arr[n-1][0] = temp;
    } else if(n >= 4 && n <= 6) {
      let temp = arr[0][n-4];
      arr[0][n-4] = arr[1][n-4]; 
      arr[1][n-4] = arr[2][n-4];   
      arr[2][n-4] = temp;
    }
  })
  arr.forEach(item => {
    console.log(item.join(' '))
  })
}
function rotate(options) {
  let arr = [[1,2,3],[4,5,6],[7,8,9]]
  options.forEach(n => {
    if(n <= 3) {
      swap(arr, n-1, 0, n-1, 1)
      swap(arr, n-1, 0, n-1, 2)
    } else {
      let t = n - 3
      swap(arr, 0, t-1, 1, t-1)
      swap(arr, 1, t-1, 2, t-1)
    }
  })
  arr.forEach(item => {
    console.log(item.join(' '))
  })
}
function swap(arr,i,j,x,y) {
  let temp = arr[i][j];
  arr[i][j] = arr[x][y];
  arr[x][y] = temp;
}
rotate(options)
