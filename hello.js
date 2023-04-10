const args = process.argv.slice(2);
const sum = args.reduce((total, num) => total + parseInt(num), 0);
console.log(sum);