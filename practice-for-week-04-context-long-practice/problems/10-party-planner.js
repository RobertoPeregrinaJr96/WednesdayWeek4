// Your code here

class PartyPlanner {
	constructor(guestList = []) {
		this.guestList = guestList;
	}
	throwParty = () => {
		let str = `Welcome to the party`
		if (!(this.guestList.length)) {
			return "Gotta add people to the guest list"
		}
		return `Welcome to the party ${this.guestList.join(" and ")}`
	}
	addToGuestList(guest) {
		this.guestList.push(guest)
		return this.guestList
	}
}
const party = new PartyPlanner();
console.log(party.throwParty())
const party1 = new PartyPlanner();
party.addToGuestList("James");
const party2 = new PartyPlanner();
// party.addToGuestList("Lucy");
console.log(party.throwParty())
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
