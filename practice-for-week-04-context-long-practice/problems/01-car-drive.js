// Your code here

class Car {
	constructor(speed) {
		this.speed = speed
	}
	drive(num) {
		this.speed = num
		return this.speed
	}
}
let car = new Car();
let test = car.drive.bind(Car); // we use bind to have the method bound to this variable so we can invoke it like a function
console.log(test(10))

// OR

class Car1 {
	constructor(speed) {
		this.speed = speed
	}
	drive1 = (num) => { // we can also use fat arrow syntax to bind the context of this method to this class
		this.speed = num
		return this.speed
	}
}
let car1 = new Car1();
let test1 = car1.drive1(20);
console.log(test1)

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Car;
} catch {
	module.exports = null;
}
