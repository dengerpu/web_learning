function isApproximatePeriodicString(s) {
    function areSimilar(sub1, sub2) {
      let diffCount = 0;
      for (let i = 0; i < sub1.length; i++) {
        if (sub1[i] !== sub2[i]) {
          diffCount++;
          if (diffCount > 1) return false;
        }
      }
      return true;
    }
  
    const n = s.length;
    if (n < 6 || n % 3 !== 0) return false;
  
    const substrings = [];
    for (let i = 0; i < n; i += 3) {
      substrings.push(s.substring(i, i + 3));
    }
  
    if (substrings.length <= 1) return false;
  
    for (let i = 0; i < substrings.length; i++) {
      for (let j = i + 1; j < substrings.length; j++) {
        if (!areSimilar(substrings[i], substrings[j])) {
          return false;
        }
      }
    }
  
    return true;
  }
  
  // Example usage:
  console.log(isApproximatePeriodicString("ABCABDABDABE")); // true
  console.log(isApproximatePeriodicString("ABCABBACD"));   // false
  console.log(isApproximatePeriodicString("AAAAAA"));       // true
  