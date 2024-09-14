function canMakeEquationValid(equations) {
    const results = [];

    function evaluateExpression(expr) {
        const tokens = expr.match(/\d+|\+|\*/g);
        if (!tokens) return null;

        let stack = [];
        let currentNumber = 0;
        let operation = '+';

        for (let token of tokens) {
            if (!isNaN(token)) {
                currentNumber = parseInt(token, 10);
            } else {
                if (operation === '+') {
                    stack.push(currentNumber);
                } else if (operation === '*') {
                    stack.push(stack.pop() * currentNumber);
                }
                operation = token;
                currentNumber = 0;
            }
        }

        if (operation === '+') {
            stack.push(currentNumber);
        } else if (operation === '*') {
            stack.push(stack.pop() * currentNumber);
        }

        return stack.reduce((a, b) => a + b, 0);
    }

    equations.forEach(equation => {
        const [left, right] = equation.split('=');

        if (evaluateExpression(left) === evaluateExpression(right)) {
            results.push("Yes");
            return;
        }

        let valid = false;

        for (let i = 0; i <= equation.length; i++) {
            for (let digit = 0; digit <= 9; digit++) {
                const newEquation = equation.slice(0, i) + digit + equation.slice(i);
                const [newLeft, newRight] = newEquation.split('=');

                if (evaluateExpression(newLeft) === evaluateExpression(newRight)) {
                    valid = true;
                    break;
                }
            }
            if (valid) break;
        }

        results.push(valid ? "Yes" : "No");
    });

    return results;
}

// Example usage
const inputEquations = [
    "16=1+2*3",
    "7*8*9=54",
    "1*1=1+22",
    "4*6=22+2",
    "15+7=1+2",
    "11+1=1+5"
];

console.log(canMakeEquationValid(inputEquations));
// Output: [ 'Yes', 'Yes', 'No', 'Yes', 'Yes', 'No' ]
