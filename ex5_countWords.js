//counts the number of words

let input = `ting
toong
bell   hihi
ping    pong 
lalalala`;
function countWords(str) {
  let arr = str.split("\n");
  let words = 0;

  for (let i in arr) {
    if (arr[i].includes(" ")){
      let arr2 = arr[i].split(" ");
      for (let j in arr2)
        if(arr2[j]!= "")
        words++;
    }
    else 
    words++;
  }
 
  console.log("Number of words = ",words);
}
countWords(input);
