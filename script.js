'use strict';
let value = prompt("Введите необходимое значение");
const argument = function (value1) {
    if (typeof value1 !== "string") {
       return 'Необходимо ввести строчное значение';
    } else {
       value1 = value1.trim();
       if (value1.length>30) {
           return value1.slice(0,29) + '...' ;
       }
       else {
       return value1;
       }
    }
 };
 alert(argument(value));