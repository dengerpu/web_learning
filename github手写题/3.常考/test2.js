function main() {
    console.log(maxApplesFork(6, 4, 2));
}

function maxApplesFork(m, n, k) {
    if (k > n) {
        return -1; // 小明所在下标大于总人数
    }
    
    let left = k - 1, right = n - k, used = n;
    let lnum = 0, rnum = 0, i, count = 1;
    
    for (i = 1; i <= n && used <= m;) {
        count++;
        used += i;
        
        if (used >= m) {
            return used > m ? count - 1 : count;
        }
        
        i += lnum >= left ? 0 : 1;
        i += rnum >= right ? 0 : 1;
        lnum++;
        rnum++;
    }
    
    return -1;
}

// Example usage:
main();
