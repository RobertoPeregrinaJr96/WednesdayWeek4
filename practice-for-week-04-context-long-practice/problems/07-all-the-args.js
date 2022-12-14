function allTheArgs(func, ...args) {
  //console.log(args)
  return function (...num) {
    // console.log(num)
    return func(...args, ...num) // we spread the args array[1,2] and num array[3] to make [1,2,3] to plug in the func callback
  }

}

function sum(...nums) {
  return nums.reduce((acc, num) => acc + num);
}

const onePlusTwo = allTheArgs(sum, 1, 2);

const onePlusTwoPlusThree = onePlusTwo(3);
const onePlusTwoPlusFour = onePlusTwo(4);

console.log(onePlusTwoPlusThree); // => 6
console.log(onePlusTwoPlusFour);  // => 7
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
