function add(numbers) {
    if (numbers === "") return 0; // If the input is an empty string, return 0
    if (numbers.length === 1) return parseInt(numbers, 10); // If only one number is provided, return it as an integer
        const sanitized = numbers.replace(/\n/g, ",");
    if (numbers.includes(",")) {
        const numArray = sanitized.split(",").map(num => parseInt(num, 10));
        return numArray.reduce((sum, num) => sum + num, 0); // Sum the array of numbers
    }
    if (!numbers.includes(',')) return parseInt(numbers, 10);

}
module.exports = add;