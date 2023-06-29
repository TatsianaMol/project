/*или*/

/*let ageUser = 18;
let countMsgs =100;
if((ageUser >= 21) || (countMsgs > 500)) {
    alert('+');
} else {
    alert ('-');
}*/


/* и */
/*let ageUser = 18;
let countMsgs = 600;
if ((ageUser >= 21) && (countMsgs > 500)) {
    alert('+');
} else {
    alert('-');
}*/

/*строковое преобразование */


/*let value = true;
console.log(typeof value);
value = String(value);
console.log(typeof value);*/

/*числовое преобразование*/

/*let str = '123';
console.log(typeof str);
let num = Number(str);
console.log (typeof num);

console.log (typeof("6" * "2"));*/

/* switch */

/*let a = 2 + 2;
switch (a) {
    case 3: console.log ('Маловато');
    break;
    case 4: console.log(' в точку');
    break;
    case 5: console.log ('Перебор');
    break;
    default: alert("нет никаких значений");
}*/

/*let arg = +prompt ("Введите число?");
switch (arg) {
    case '0':
    case '1': alert('Один или ноль');
    break;
    case '2':alert('Два');
    break;
    case 3:alert('Никогда не выполнится!');
    break;
    default:alert('Неизвестное значение');
}*/

/*+promt преобразует в тип number*/

const number = +prompt ('Введите число между 0 и 3', ''); 
    switch (number) {
        case 0: console.log('вы ввели число 0');
        break;
        case 1:console.log('вы ввели число 1');
        break;
        case 2:
        case 3:console.log('вы ввели число 2, а может 3');
        break;
}
