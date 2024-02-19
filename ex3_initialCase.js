//capitalises first letter & lowers others : Initial Case
let input = "shreya sARASWAT deVeLoPer";

function capit(txt){
    let str = "";
    str = str + txt[0].toUpperCase();
    for( let i=1; i<txt.length; i++){
        if((txt[i]!=" ")&&(txt[i-1]==" "))
            str = str + txt[i].toUpperCase();
        else
            str = str + txt[i].toLowerCase();
    }
    console.log(str);
}

capit(input);