/*for*/
for (let i = 0; i < 5; i++) {
  console.log("The number is " + i);
}

/*for.,.in*/
let string = {a:1,b:2,c:3,d:4,e:5};//json//object
for ( let i in string){
  console.log(i + " : " + string[i] + "\n");
}

/*for...of*/
// const string2 = {f:1,g:2,h:6,i:4,j:5};           //json//object
// for ( let x of string2){                         //wont work for objects
//     console.log(x)                      
// }
const string3= [2,4,5,6,7,8];
for ( let x of string3){             // work for arrays
  console.log(x)                      
}
const str4 = "hello there!";
for (let x of str4 ){
  // works for string
    // prints in next line due to console.
  
    console.log(x);
}