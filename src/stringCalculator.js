function add(numbers) {
    if (numbers == "") {
        console.log("Input is an empty string, returning 0");
        return 0;
    }

    let delimiter = /,|\n/;  // Default delimiter is comma or new line
    if (numbers.startsWith('//')) {
        const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
        delimiter = delimiterMatch[1]; // Extract custom delimiter
        numbers = numbers.slice(delimiterMatch[0].length); // Remove delimiter line
        console.log(`Custom delimiter detected: ${delimiter}`);
    }

    // Split by the detected delimiter
    const nums = numbers.split(new RegExp(`[${delimiter}]`)).map(Number);
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