// Your code here
class Calculator {
	constructor() {
		this.total = 0
	}
	add(num) {
		this.total += num
		return this.total
	}
	subtract(num) {
		this.total -= num
		return this.total
	}
	divide(num) {
		this.total /= num
		return this.total
	}
	multiple(num) {
		this.total *= num
		return this.total
	}
}
let calculator = new Calculator()
console.log(calculator.add(50))
console.log(calculator.subtract(35))
console.log(calculator.multiple(10))
console.log(calculator.divide(5))
console.log(calculator.total)

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Calculator;
} catch {
	module.exports = null;
}
