/*var year = 2015;
if(year != 2017) {
    console.log('А вот..');
    console.log('..и неправильно!')
}

var years = prompt('Введите год появления стандарта','');
if (years == 2011) {
    alert('да вы знаток!');
}
else {
    alert('а вот и неправильно')
}*/

/*var shoppingDone = false;
if(shoppingDone === true) {
    var childsAllowance = 10;
}
else {
    var childsAllowance = 5;
}

console.log(childsAllowance);

var year = prompt ('В каком году появилась', '');

if (year < 2011) {
    alert('это сдишком рано');
}
else if (year > 2011) {
    alert('это поздновато');
}
else {
    alert('да точно в этом году')
}*/






//тоже самое что вверху

var access;
var age = prompt ('сколько вам лет?');
/*if (age >= 18){
    access = true;
}
else {
    access = false;
}*/
access = age > 18 ? true : false;
alert(access);

