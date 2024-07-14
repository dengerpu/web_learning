/**
 * @param {number[]} nums
 * @return {number}
 */
// 利用哈希表来实现, 大于n/2就可以终止查找了
var majorityElement = function(nums) {
    let map = new Map();
    let majorNum = 0, count = 0;
    for(let num of nums) {
        map.set(num, map.get(num) ? 1 : map.get(num) + 1 );
        if(map.get(num) > count) {
            count = map.get(num);
            majorNum = num;
        }
    }
    return majorNum;
};
// 摩尔投票算法
var majorityElement = function(nums) {
    let votes = 0, majorNum = nums[0];
    for(let num of nums) {
        if(votes === 0) {
            majorNum = num;
        }
        votes += majorNum === num ? 1 : -1;
    }
    return majorNum;
}
