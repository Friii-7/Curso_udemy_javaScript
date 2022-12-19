//Tipos de datos primitivos
//Numbers: números.
//Strings: 'cadenas de texto'.
//Booleans: booleanos, que pueden tener dos valores, true o false, en función de lo que se haya definido.
//Undefined: un tipo de valor no definido.
//Null: son datos que sí que están definidos, pero tienen un valor nulo.

/*let js = 'Amazingh';
console.log(40 + 8 + 23 - 10);
console.log('farzin');


let numbre = 'farzin';
console.log(numbre);


let person = "farzin";
let PI = 3.1415;

let myFristJob = 'electricity';
let myCurrentJob = 'coder';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFristJob);
//values and variables
let country =  'Portugal';
let continent = 'Europe';
//let population = 10;

console.log(country);
console.log(continent);
//console.log(population);

//data Types
let Island = false;
let lenguage;
console.log(typeof Island);
console.log(typeof country);
console.log(typeof lenguage);
console.log(typeof population);

lenguage = 'portegues';
const country2 = 'portugal';
const continent2= 'Europe';
const isIsland1 = false;
//isIsland1 = true;
*/

/*
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const descriptional = country2 + ' is in ' + continent2 + ',and its ' + population + ' million people speak ' + lenguage;
console.log(descriptional);*/

/*
let javascript = true; 
console.log(javascript);

console.log(typeof true);
console.log(typeof javascript);
console.log(typeof 23);
console.log(typeof 'farzin');
javascript = 'yes';
console.log( typeof javascript);//string


let year ;
console.log(year);
console.log(typeof year);

year = 1992;
//number
console.log(typeof year);
//object
console.log(typeof null);
*/

/*let age  = 30;
age = 33;

const birtyday = 1992;
// brityday = 1993;

var job = 'programdor';
job = 'electricity'

lastName = 'Farzin';
console.log(lastName);
*/
//Math operatores

/*const now = 2022
const ageFarzin = now - 1992;
const ageNana = now - 1972;

console.log(ageFarzin, ageNana);//30 50
console.log(ageFarzin * 2, ageNana / 10, 2 ** 3);//60 5 8
//  2 * 2 * 2  

const fristName = 'Farzin';
const lastName = 'Jimenez';
console.log(fristName + ' ' + lastName);//Farzin Jimenez


let x = 10 + 5; //15
x  += 10; //x  = 15(x) + 10 // 25
x *= 4; //100
x++;//101
x--;//100
console.log(x);

let a = 4 , b = 5 , answer;
answer = a++ * b++;          // after execution : answer = 4 * 5 = 20,           a = 5 , b = 6
answer = ++a * ++b;          // after execution : answer = 6 * 7 = 42,           a = 6 , b = 7
answer = a++ * --b;          // after execution : answer = 6 * 6 = 36,           a = 7 , b = 6


// comparison operators

console.log(ageFarzin > ageNana);//false 

console.log(ageFarzin >= 19);//true

const isFullAge = ageNana >= 18;

console.log(now - 1992 < now - 1972);//true


let d, y;
d = y  =25 - 10 - 5; // d = y ,d = 10, y = 10

console.log(d, y);

const averageAge = (ageFarzin + ageNana)/ 2;

console.log(ageFarzin, ageNana, averageAge);
*/

/*const massMark = 78;
const hightMarke = 1.69;

const massJons = 92;
const hightJons = 1.95;

const BMIMark = massMark / hightMarke ** 2;
const BMIJons = massJons / (hightJons * hightJons);
const markhigherBMI  = BMIMark > BMIJons;

console.log(BMIMark, BMIJons, markhigherBMI);
*/

/*const fristName = 'Farzin';
const job = 'programmer';
const brithYears = 1992;
const year = 2022;
 
const Farzin = "I'm " + fristName + ', a ' + (year - brithYears) + ' year old ' + job + '!';
console.log(Farzin);//I'm Farzin, a 30 year old programmer!

const FarzinNew = `I'm ${fristName}, a ${year - brithYears} year old ${job}!`;
console.log(FarzinNew);//I'm Farzin, a 30 year old programmer!

console.log(`just a regular string...`);

console.log('String with \n\
multiple \n\
lineas');

console.log(`string
numbre
bolean`); 
*/
/*const age =15;

if (age >= 18) {
    console.log('Farzin can start draving license')
}else {
    const yearsLeft = 18 - age;
    console.log(`Farzin is too yong, with another ${yearsLeft} years :) `);//Farzin is too yong, with another 3 years :) 
}


const brithyday = 2012;

let century;

if(brithyday <= 2000){
    century = 20;
}else {
    century = 21;
}
console.log(century);//20
*/

// chaleng

/*const massMark = 78;
const hightMarke = 1.69;

const massJons = 92;
const hightJons = 1.95;

const BMIMark = massMark / hightMarke ** 2;
const BMIJons = massJons / (hightJons * hightJons);
console.log(BMIMark, BMIJons);

if(BMIMark > BMIJons) {
    console.log(`Mark's BMI (${BMIMark})is higher than Jons(${BMIJons})!`)
}else{
    console.log(`Jons's BMI (${BMIJons}) is higher than Mark(${BMIMark})!`)
}
*/

/*const inputYear = '1991';

console.log(Number(inputYear), inputYear);

console.log(Number(inputYear) +18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);
*/

//type coercion

/*console.log('I am ' + 23 + 'years old');
console.log('I am ' + ' 23 ' + 'years old');


console.log('23' - '7');
console.log(23 - 7);

let n = '1' + 1;
n = n - 1;
console.log(n);
*/

// 5 falsy values : 5, ''; undefined, null, NaN

/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('farzin'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money){
    console.log('dont spend it all ;)');// no gastas todo 
}else{
    console.log('You should get a job!');//deberías conseguir un trabajo
}
// condeicion if else 

let height = 12;
if (height){
    console.log('YAY! Height is defined');//La altura se define
}else {
    console.log('Height is undefined');
}
*/

/*const age = 18;

if(age === 18){
    console.log('You just became an adult');
}

const favorite = Number (prompt('What si your age '));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 30){
    console.log('Cool! 30 is an amazing number!')
} else if (favorite === 7){
    console.log('7 is also a cool number')
} else if (favorite === 10){
    console.log('10 is also a cool number')
} else {
    console.log('number is not 23 or 7 or 10')
}  
if (favorite !== 30) console.log('whay not 30?');
*/

/*const hasDriveresLicense  = true;//A
const hasGoodVision = false;//B
const isTired = true;//C

console.log(hasDriveresLicense && hasGoodVision);//false
console.log(hasDriveresLicense || hasGoodVision);//true
console.log(!hasDriveresLicense);//false 

if (hasDriveresLicense && !hasGoodVision && isTired){
    console.log('FArzin is to drive');
}else {
    console.log('someone else should drive...');
}
*/
/*const scoreDolfine = (96 + 108 + 89)/3;
const scorekoalas = (88 + 91 + 110)/3;

console.log(scoreDolfine, scorekoalas);

if (scoreDolfine > scorekoalas){
    console.log('Dolphins win the trophy 🏆');
}else if (scorekoalas > scoreDolfine){
    console.log('Koalas win the trophy 🏆');
}else if (scoreDolfine === scorekoalas){
    console.log('Both win the trophy!');
}else{
    console.log('No one wins the trophy 😭');
}*/

/*const scoreDolphins = (97 + 112 + 100)/3;
const scorekoalas = (109 + 95 + 86)/3;

console.log(scoreDolphins, scorekoalas);

if (scoreDolphins > scorekoalas && scoreDolphins >= 100){
    console.log('Dolphins win the trophy 🏆');
}else if (scorekoalas > scoreDolphins && scorekoalas >= 100) {
    console.log('Koalas win the trophy 🏆');
  } else if (scoreDolphins === scorekoalas && scoreDolphins >= 100 && scorekoalas >= 100) {
    console.log('Both win the trophy!');
  } else {
    console.log('No one wins the trophy 😭');
  }
*/

// The switch Statement
/*const day = 'friday';
switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}
*/
/*
const day = 'monday';

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
  } else if (day === 'tuesday') {
    console.log('Prepare theory videos');
  } else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
  } else if (day === 'friday') {
    console.log('Record videos');
  } else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
  } else {
    console.log('Not a valid day!');
  }
*/
/*
3 + 4 
1991 

true && false && false ;
if (23 > 10){
    const str = '23 is bigger';
}
const me = 'farzin';
console.log(`I'm ${2020 - 1992} years old ${me}`);
*/

/*const age = 18;
age >= 18 ? console.log('i Like to dirnk wine 🍷 ') :
console.log('I like to suger water 🍉');


let drink2;
if ( age  >= 18) {
    drink2 = 'wine';
}else{
    drink2 ='water'
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine': 'water'}`);
*/

//chalenge#4
/*
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

function logger() {
  console.log("I'm Farzin !");
}
logger();

function fruitProcessor(apples, oranges) {
  const juice = ` Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleOrangeJuice = fruitProcessor(5, 4);
console.log(appleOrangeJuice);
*/
// function apache(name) {
//   console.log('Hello' + name + '🎇');
// }
// let name = prompt('Enter a name: ');

// apache(name);
