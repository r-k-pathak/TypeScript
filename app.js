"use strict";
//Types in type script
//string,
var myName = "Rakesh";
console.log(typeof (myName));
//auto detect the types , once assigned a type value, futher another type value
// can not be assigned 
//[ts] Type '12' is not assignable to type 'string'.
//myName=12;
var anyType;
console.log("What's the type");
anyType = "This is any type";
console.log(typeof (anyType));
console.log("What's the type");
//in similar way you can use number(for int ,float or double)
//boolean for bool values;
var arrayOfHobies;
arrayOfHobies = ["coding", "debuging", "writing poem"];
console.log(typeof (arrayOfHobies));
//arrayOfHobies=["coding","debuging","writing poem"];
//console.log(arrayOfHobies)
//tuples
var tupleVar = ["strVal", 56];
console.log(JSON.stringify(tupleVar));
//enum
var Color;
(function (Color) {
    Color[Color["Grey"] = 0] = "Grey";
    Color[Color["black"] = 1] = "black";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
var myColor = Color.Grey;
console.log(myColor);
