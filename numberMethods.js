// Number Methods
// JS math and number objects provide several constant and methods to perform mathematical operations.

// 1. toPrecision method
var num1 = 2.123456789123456789;
const result1 = num1.toPrecision(6);
console.log('1)', result1);
// 2.12346

// 2. toExponential method
var num2 = 223
var res2 = num2.toExponential(2);
console.log('2)', res2);
// 2.23e+2

// 3. toString method 
var obj3 = [1234, 3456, "pink"];
var res3 = obj3.toString();
console.log('3)', obj3);
console.log('3)', res3);
// (3) [1234, 3456, 'pink']
// 1234,3456,pink

// 4. valueOf method
var obj4 = 3456e+4;
var res4 =  obj4.valueOf();
console.log('4)', res4);
// 34560000

// 5. ceil method
var num5 = 48.7;
var res5 = Math.ceil(num5);
console.log('5)', res5);
// 49

// 6. exp method
var num6 = 2;
var res6 = Math.exp(num6);  //e^num6 = 7.38905609893065
console.log('6)', res6);

// 7. Math.pow(base, exponent)
var res7 = Math.pow(2,3);  //2^3 = 8
console.log('7)', res7);

// 8. Math.sqrt(x)
var resultSqrt = Math.sqrt(25); // Square root of 25 is 5
console.log('8)', resultSqrt);

// 9. Math.random()
var randomValue = Math.random();
console.log('9)', randomValue);

// 10. Math.floor : <|= 
var number = 7.89;
var roundedDown = Math.floor(number);
console.log('10)', roundedDown); // Output: 7

// 11. combination
// Generate a random integer between 1 and 10
var randomInt = Math.floor(Math.random() * 10) + 1;
console.log('11)', randomInt);