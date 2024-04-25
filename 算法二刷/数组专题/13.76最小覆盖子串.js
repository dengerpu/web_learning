function minWindow(s, t) {
  let left = 0;
  let map = new Map();
  let n = s.length, m = t.length;

  for(let right = 0; right < n; right++) {
    let c = s[right];
    if (map.has(c)) {
      map.set(c, map.get(c) - 1);
    }

    
  }
}