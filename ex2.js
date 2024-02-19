//printing keys which have numeric values

const obj = {
  a: 5,
  b: "xyz",
  c: "abc",
  d: "Hello",
  e: { Hi: "bye", Hello: "JS", key: 55 },
  f: 22,
};

console.log(obj.length);       //returns undefined
console.log(Object.keys(obj).length);

for (let i in obj) {
  //console.log (typeof obj[i]);


  if (typeof obj[i] == "number") {
    console.log("Numeric value lies in the key : " + i);
  }

  if (typeof obj[i] == "object") {
    for (let j in obj[i]) {
      if (typeof obj[i][j] == "number") {
        console.log("Numeric value lies in the key : " + j + " of " + i);
      }
    }
  }
}
