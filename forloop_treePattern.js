//for loop - pattern

let pattern = "";   //empty string

let k=1;            //count

for (let i = 0; i < 3; i++) {             //rows

   for (let j = 0; j <= i; j++) {         //columns

      pattern += k++;                     //values added to string

   }

   pattern += "\n";                       //for new line in string

}

console.log(pattern);                     //print