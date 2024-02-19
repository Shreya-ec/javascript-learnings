//printing overall object

const obj = {
  a: 5,
  b: "xyz",
  c: "abc",
  d: "Hello",
  e: { Hi: "bye", Hello: "JS", key: 55 },
  f: 22,
};

console.log(Object.keys(obj).length);

console.log(JSON.stringify(obj));
for (let i in obj) {
  if (typeof obj[i] !== "object") {
    //console.log(i + " : " + obj[i]);
    console.log(`${i} : ${obj[i]}`);
  }

  if (typeof obj[i] === "object") {
    for (let j in obj[i]) {
      console.log(i + " : " + j + " : " + obj[i][j]);
    }
  }
}

