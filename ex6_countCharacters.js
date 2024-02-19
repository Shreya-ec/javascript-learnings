//counts the number of characters - excluding spaces
let input = "Hello, I work here. ";
console.log(`Number of total characters including spaces: ${input.length}`);  //characters count including spaces
function countChars(sent) {
  //~1
  let str = 0;
  for( let i in sent){
      if(sent[i]!=" ")
          str++;
  }
  console.log(`1st approach: The number of characters in your input is ${str}`);

  //~2
  let arr = sent.split(" ");
  let sum = 0;
  let k = 0;
  for (let i in arr) for (let j in arr[i]) k++;
  sum = sum + k;
  console.log(`2nd approach: The number of characters in your input is ${sum}`);
}
countChars(input);
