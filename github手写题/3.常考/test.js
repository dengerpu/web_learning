function findAuctionWinner(bids) {
    let maxBid = -1;
    let winner = '';

    for (let i = 0; i < bids.length; i++) {
        const [name, bid] = bids[i].split(' ');
        const bidAmount = parseInt(bid, 10);

        if (bidAmount > maxBid) {
            maxBid = bidAmount;
            winner = name;
        }
    }

    return winner;
}

// Example usage:
const input1 = [
    "Jerry 300",
    "Sun 500",
    "Anna 450"
];

const input2 = [
    "Tom 20",
    "Alan 20"
];

console.log(findAuctionWinner(input1)); // Output: Sun
console.log(findAuctionWinner(input2)); // Output: Tom
