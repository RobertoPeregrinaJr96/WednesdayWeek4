// Your code here

class CallCenter {
	constructor(name) {
		this.name = name
	}
	sayHello() {
		return console.log(`Hello this is ${this.name}`)
	}
	callMeLater(msecs) {
	 setTimeout(() => { this.sayHello() }, msecs)
	}
}
let judy = new CallCenter("Judy");
console.log(judy.sayHello());         // prints "Hello this is Judy"
judy.callMeLater(1000);  // waits one second then prints "Hello this is Judy"
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = CallCenter;
} catch {
	module.exports = null;
}
