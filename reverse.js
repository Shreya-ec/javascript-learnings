//functions~
let num = 56789;

function reverse(n) {
  let a = n;
  let str = 0;
  while (a > 0) {
    str = str * 10 + (a % 10);
    a = parseInt(a / 10); //use parseInt() or Math.floor() to convert float to int
  }
  //console.log("Your Input : " + n + "\n" + "Reversed Output : " + str);
  console.log(`Your Input : ${n} \nReversed Output : ${str}`);
}
reverse(num);
