function changeContext(func, obj) {
  // Your code here
  let cb = func.bind(obj)
  return cb()
}
function getSecret() {
  return this.secret;
}
let bat = {
  secret: "I'm scared of the dark",
};
console.log(changeContext(getSecret, bat))
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
