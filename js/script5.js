"use strict";

const str = "test";
const arr = [1,2,3];

console.log(str[2] );

const logg = "I love you"; //вырезаем нужное слово
//console.log(logg.slice(2));

//console.log(logg.substring(2, 6));

console.log(logg.substr(6, 5)); //вырезаем символы

const num = 12.2;
console.log(Math.round(num)); //  округление чисел

const test = "12.2px";
//console.log(parseInt(test));//переводит число в другую систему исчисленипя
console.log(parseFloat(test));