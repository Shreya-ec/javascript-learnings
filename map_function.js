//.map()
const numbers = [65, 44, 12, 4, 8];
const newArr = numbers.map(myFunction);
function myFunction(num) {
  return num * 10;
}
console.log(newArr);