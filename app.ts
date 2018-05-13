//Types in type script
//string,
let myName="Rakesh";
console.log(typeof(myName));
//auto detect the types , once assigned a type value, futher another type value
// can not be assigned 
//[ts] Type '12' is not assignable to type 'string'.
//myName=12;
let anyType:any;
console.log("What's the type");
anyType="This is any type";

console.log(typeof(anyType));
console.log("What's the type");
//in similar way you can use number(for int ,float or double)
//boolean for bool values;
let arrayOfHobies:any[];
arrayOfHobies=["coding","debuging","writing poem"];
console.log( typeof(arrayOfHobies))
//arrayOfHobies=["coding","debuging","writing poem"];
//console.log(arrayOfHobies)

//tuples
let tupleVar:[string,number]=["strVal",56];
console.log(JSON.stringify(tupleVar));
//enum
enum Color
{
    Grey,//default start from 0
    black,
    Green
}

let myColor:Color=Color.Grey;
console.log(myColor);
//any should be used in exception case only