// 之字形输出，即分别输出每条右上左下的对角线，每次的输出顺序相反，
//        从上到下的时候即从右上角输出到左下角，从下到上的时候即从左下角输出到右上角

const a = [
    [11, 42, 23, 41],
    [57, 61, 45, 52],
    [71, 11, 23, 42],
];

// 期待输出顺序  11 57 42 23 45 41

function printMartix(martix) {
    // 初始化右上角起点tR、tC；左下角起点bR、bC
    let tR = 0,
      tC = 0,
      bR = 0,
      bC = 0,
      rowLen = martix.length,
      colLen = martix[0].length,
      fromTop = true; // 初始方向为从上到下
    // console.log(rowLen, colLen);
    while (tR < rowLen) {
      // console.log(tR, tC, bR, bC, fromTop);
      printLine(martix, tR, tC, bR, bC, fromTop);
      // 坐标的变化方式，小注意点就是：判断条件的坐标值要放在最后进行处理，否则会导致提前判断越界
      tC === colLen - 1 ? tR++ : tR;
      tC === colLen - 1 ? tC : tC++;
      bR === rowLen - 1 ? bC++ : bC;
      bR === rowLen - 1 ? bR : bR++;
      // 方向反过来
      fromTop = !fromTop;
    }
  }
  
  function printLine(martix, tR, tC, bR, bC, fromTop) {
    // 沿着对角线进行输出，起点根据当前方向进行判断即可
    if (fromTop) {
      let r = tR,
        c = tC;
      while (r <= bR && c >= bC) {
        console.log(martix[r++][c--]);
      }
    } else {
      let r = bR,
        c = bC;
      while (r >= tR && c <= tC) {
        console.log(martix[r--][c++]);
      }
    }
  }
  
  printMartix(a);