const bill = 0;
const tip = bill >= 50 || bill <= 300 ? bill*(3/20) : bill/5;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)