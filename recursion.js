//recursion function for ex2

const obj = {
  a: 5,
  b: "xyz",
  c: "abc",
  d: "Hello",
  e: {
    Hi: "bye",
    Hello: "JS",
    key: 55,
    one: { g: 6, h: "hola", i: "pink", s:0.7 },
    j: 90,
  },
  f: 22,
};

function speed(x) {
  for (let i in x) {
    if (typeof x[i] == "number") {
      console.log("Numeric value lies in the key : " + i);
    }
    if (typeof x[i] == "object") {
      speed(x[i]);
    }
  }
}