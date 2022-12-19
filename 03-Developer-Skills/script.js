// Remember, we're gonna use strict mode in all scripts now!
//Recuerde, ¡vamos a usar el modo estricto en todos los scripts ahora!
'use stirct';
/*
const x = '30';

const clacAge = brithYear => 2037 - brithYear;
console.log(clacAge(1992));
*/
///////////////////////////////////////
// Using Google, StackOverflow and MDN
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?
// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const clacTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amlitudenNew = clacTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amlitudenNew);
*/
///////////////////////////////////////
// Debugging with the Console and Breakpoints
/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C)FIX
    value: Number(prompt('Degrees celsius:')),
  };

  // B)FIND
  console.table(measurement);

  const Kelvin = measurement.value + 273;
  return Kelvin;
};
console.log(measureKelvin());

// Using a debugger

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeNew);
*/
// Coding Challenge #1
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log('...' + str);
};
printForecast(data1);
