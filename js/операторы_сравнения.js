/*console.log('2>1', 2 > 1);
console.log('2==1', 2 == 1);
console.log('2!=1', 2 != 1); //неравно */

console.log('Б' > 'A');
console.log ('a' > 'A');
console.log ('Ваня' > 'Вася')
console.log ('Привет' > 'Прив')//е больше чем ничего
console.log ('2' > '14');
console.log (+'2' > +'14');

console.log('2' > 1);
console.log('01' == 1);
console.log(false == 0);
console.log(true == 0);
// разные типы приводятся к числу false - 0, true - 1 null - 0

console.log (0 == false);
console.log (0 === false); //сравниваются типы

//строгое значение

console.log(null === undefined);
console.log(null == undefined);
//равны только друг другу

/*не дали значение - undefined
пустое значение - null*/

console.log(null>0);//false
console.log(null == 0); // исключение null сравнивается только с undefined
console.log(null>= 0); //больше или равно true 