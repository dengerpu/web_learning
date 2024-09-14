function maxSatisfiedCustomers(n, m, preferences) {
    let maxSatisfied = 0;

    function search(selectedCustomers, usedDrinks, index) {
        if (index === n) {
            maxSatisfied = Math.max(maxSatisfied, selectedCustomers.length);
            return;
        }

        let [drink1, drink2] = preferences[index];

        if (!usedDrinks[drink1] && !usedDrinks[drink2]) {
            usedDrinks[drink1] = true;
            usedDrinks[drink2] = true;
            selectedCustomers.push(index);

            search(selectedCustomers, usedDrinks, index + 1);

            selectedCustomers.pop();
            usedDrinks[drink1] = false;
            usedDrinks[drink2] = false;
        }

        search(selectedCustomers, usedDrinks, index + 1);
    }

    search([], Array(m+1).fill(false), 0);
    
    return maxSatisfied;
}

// Example usage:
const n = 3;
const m = 4;
const preferences = [
    [1, 2],
    [2, 3],
    [3, 4]
];

const result = maxSatisfiedCustomers(n, m, preferences);
console.log(result); // Output should be 2
