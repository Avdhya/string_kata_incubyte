function add(numbers) {
    if (numbers === "") {
        console.log("Input is an empty string, returning 0");
        return 0;
    }

    if (numbers.includes(',')) {
        const nums = numbers.split(',').map(Number);
        const sum = nums.reduce((acc, curr) => acc + curr, 0);
        console.log(`Numbers: ${nums}, Sum: ${sum}`);
        return sum;
    }

    let num = parseInt(numbers);
    console.log(`Single number ${numbers}, returning ${num}`);
    return num;
}

// Export the function to make it available for imports in other files
module.exports = add;

console.log(add("1,4"))