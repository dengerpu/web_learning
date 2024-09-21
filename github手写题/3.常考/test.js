function shortestTime(n, k, p, a, b) {
    // 对通行证位置进行排序
    b.sort((x, y) => x - y);
    
    let maxTime = 0;
    
    for (let i = 0; i < n; i++) {
      // 找到离员工最近的通行证
      let nearestPass = b.reduce((closest, current) => 
        Math.abs(current - a[i]) < Math.abs(closest - a[i]) ? current : closest
      );
      
      // 计算总距离：员工到通行证的距离 + 通行证到办公室的距离
      let totalDist = Math.abs(a[i] - nearestPass) + Math.abs(nearestPass - p);
      
      // 更新最大时间
      maxTime = Math.max(maxTime, totalDist);
      
      // 移除已使用的通行证
      b.splice(b.indexOf(nearestPass), 1);
    }
    
    return maxTime;
  }
  
  // 测试
  let n = 2, k = 4, p = 50;
  let a = [20, 100];
  let b = [60, 10, 40, 80];
  
  console.log(shortestTime(n, k, p, a, b));
  