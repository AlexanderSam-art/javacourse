"use strict";

if (1) {
    console.log('ok');
} else {
    console.log('error');
}



//if (num < 49) {
   // console.log('error');
//} else  if (num > 100){
    //console.log('a lot of');
//}else {
    //console.log('good');
//}

//(num === 50) ? console.log('good') : console.log('error');//Тернарный оператор

   const num = 50;

 switch (num) {  //Свич идет только на сторогое сранение т.е 49 === 49
   case 49:
        console.log('not right');
        break;
    case 100:
        console.log('not right');
        break;   
    case 50:
        console.log('good');
        break;
    default:
        console.log('its not time');
    break;
 }