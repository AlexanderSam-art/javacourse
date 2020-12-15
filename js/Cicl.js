"use strict";

let num = 50;

while (num <= 55) {//Создание цикла
    console.log(num);
    num++;
} 

do { //Сделай что то
    console.log(num);
    /num++;
}
while (num < 55); // Проверяем условия

for (let i = 1; i < 10;i++) {    //Цикл внутри с переменной
    if (i === 6){
       break; //---- Доходит до числа 5
    continue; //Позволяет пропустить 6 и не прерывает цикл
    }
    console.log(i);
}   