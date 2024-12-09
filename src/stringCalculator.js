function add(numbers) {
    if (numbers == "") {
        console.log("Input is an empty string, returning 0");
        return 0;
    }

    let delimiter = /,|\n/;  // Default delimiter is comma or new line
    if (numbers.startsWith('//')) {
        // Match the first custom delimiter line
        const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
        if (delimiterMatch) {
            delimiter = delimiterMatch[1]; // Extract custom delimiter
            numbers = numbers.slice(delimiterMatch[0].length); // Remove delimiter line
            console.log(`Custom delimiter detected: ${delimiter}`);
        }
    }

    // Split the string by the detected delimiter(s)
    const nums = numbers.split(new RegExp(`[${delimiter}\n]`)).map(num => num.trim()).filter(Boolean).map(Number);

    // Handle negative numbers
    const negatives = nums.filter(num => num < 0);
    if (negatives.length > 0) {
        console.log(`Negative numbers detected: ${negatives}`);
        throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
    }

    // Calculate the sum of numbers
    const sum = nums.reduce((acc, curr) => acc + curr, 0);
    console.log(`Numbers: ${nums}, Sum: ${sum}`);
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