function add(numbers) {
    // If the input is an empty string, return 0
    if (numbers === "") {
        return 0;
    }

    let delimiter = /,|\n/;  // Default delimiter is comma or new line

    // If the string starts with "//", extract the custom delimiter
    if (numbers.startsWith('//')) {
        const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
        if (delimiterMatch) {
            delimiter = delimiterMatch[1]; // Extract the custom delimiter
            numbers = numbers.slice(delimiterMatch[0].length); // Remove the delimiter line
        }
    }

    // Split by the detected delimiter(s)
    const nums = numbers.split(new RegExp(`[${delimiter}\n]`)).map(num => parseInt(num));

    // Ignore numbers greater than 1000
    const validNums = nums.filter(num => num <= 1000);

    // Handle negative numbers
    const negatives = validNums.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
    }

    const sum = validNums.reduce((acc, curr) => acc + curr, 0);
    return sum;
}

// Export the function to make it available for imports in other files
module.exports = add;

console.log(add(`
`))

console.log(add(``))

console.log(add(`1,0.2,3`))

console.log(add(`10,
            20,
    30`))

console.log(add(`//;
    1;
    2;
    3`));

console.log(add(`   1,  2,  3`));

//console.log(add(`   1,  2,  -3`));