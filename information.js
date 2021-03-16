let name = "Jonathan";
let campus = "Wild Code School Lyon";

const cowsay = require("cowsay");

console.log(cowsay.say({
	text : `Hi my name is ${name} and my campus is ${campus}`,
	e : "><",
	T : "U "
}));

module.exports = cowsay;