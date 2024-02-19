//only capitalizes the first letter of each word
var me = "shreya sarasawat";
var input = "hello I work here.";

function capit(txt){
//~1
    let str = "";
    str = str + txt[0].toUpperCase();
    for( let i=1; i<txt.length; i++){
        if((txt[i]!=" ")&&(txt[i-1]==" "))
            str = str + txt[i].toUpperCase();
        else
            str = str + txt[i];
    }
    console.log(str);


//~3  
    let arr = txt.split(" ");                       //splitted whenever a blank space is encountered
    for (let i=0; i<arr.length; i++){
        // console.log(arr[i].charAt[0]);
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);      //slice=adds back each array elements' chars from index 1
    }
    const str2 = arr.join(" ");                       //joins back each array element into new string
    console.log(str2);

//~2: updates only first letter of whole string: Sentence Case
    console.log(txt = txt[0].toUpperCase() + txt.slice(1));

}
capit(me);
capit(input);