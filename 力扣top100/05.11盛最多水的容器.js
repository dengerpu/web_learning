/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let slow = 0, fast = height.length - 1, max = 0;
  while(slow < fast) {
      let area = (fast - slow) * Math.min(height[slow], height[fast]);
      max = Math.max(area, max);
      if( height[slow] < height[fast]) { // 每次移动较小的那个值
          slow++;
      }else {
          fast--;
      }
  }
  return max;

};