// let t = parseInt(read_line())
// for(let i = 0; i < t; i++) {
//     let temp = read_line().split(' ').map(item => parseInt(item))
//     let n = temp[0], x = temp[1];
//     let lines = [];
//     for(let i = 0; i < n; i++) {
//         let temp = read_line().split(' ');
//         lines.push(temp);
//     }
//     console.log(findMCNPairs(n, x, lines));
// }
console.log(findMCNPairs(3, 4, [
[3, 17, 20, 30],
[4, 17, 20, 30, 23],
[4, 18, 18, 18, 17]
]))
function findMCNPairs(n, x, collections) {
    const mcnSets = collections.map(col => new Set(col));
    console.log('mcnSets', mcnSets);
    let found = false;
    let pair = [];
    for(let i = 0; i < n - 1 &&  !found; i++) {
        for(let j = i + 1; j < n && !found; j++) {
            console.log('set', ...mcnSets[i], 'aaaa', ...mcnSets[j]);
            const unionSize = new Set([...mcnSets[i], ...mcnSets[j]]).size;
            console.log('unionSize', unionSize);
            if(unionSize === x) {
                pair = [i + 1, j + 1];
                found = true;
            }
        }
    }
    if(found) {
        return `YES\n${pair[0]} ${pair[1]}`;
    } else {
        return 'NO';
    }
}
