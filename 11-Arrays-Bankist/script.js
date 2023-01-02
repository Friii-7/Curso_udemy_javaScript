'use strict';
////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

const account1 = {
  owner: 'Daniel Marquez',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Yisel Mosalave',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Farzin Jimenez',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Zaida briceño',
  movements: [430, -1000, 700, 50, 590, 63],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: 'Jose Vasques',
  movements: [430, 1000, -700, 50, 90, 36, -89],
  interestRate: 0.9,
  pin: 5555,
};
const account6 = {
  owner: 'David Alvares',
  movements: [480, 4000, 700, -560, 75, -10, 7],
  interestRate: 1.9,
  pin: 6666,
};
const account7 = {
  owner: 'Daniela restrepo',
  movements: [430, 1000, 700, -50, -90, 77, -25],
  interestRate: 0.7,
  pin: 7777,
};

const accounts = [
  account1,
  account2,
  account3,
  account4,
  account5,
  account6,
  account7,
];
/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
/////////////////////
//Functions

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}</div>
</div> `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent from from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Claer  input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAcc);

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e){
  e.preventDefault();

  const amount  = Number(inputLoanAmount.value);
  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
    // Add movement 
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Update
    updateUI(currentAccount);

  
  }

})

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
  }
});

//////////////////////////////////////////
/////////////////////////////////////////
// LECTURES
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const currencies = new map([
//   ['USD', 'united states dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound streling'],
// ]);

////////////////////////////////////////////
// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// // SPLICE
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// // REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['g', 's', 't', 'k'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letters.join('-'));

// const arr3 = [23, 56, 89];
// console.log(arr3[0]);
// console.log(arr3.at(0));

// // getting last array element
// console.log(arr3[arr3.length - 1]);
// console.log(arr3.slice(-1)[0]);
// console.log(arr3.at(-1));

// console.log('farzin7'.at(-1));
// console.log('farzin'.at(0));

///////////////////////////////////////
// Looping Arrays: forEach
// console.log('-----FOR--------');
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement  ${i + 1}: you disposted ${movement}`);
//   } else {
//     console.log(`Movement  ${i + 1}: you withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('-----FOREACH--------');
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement  ${i + 1}: you disposted${mov} `);
//   } else {
//     console.log(`Movement  ${i + 1}: you withdrew ${Math.abs(mov)}`);
//   }
// });
/////////////////////////////////////////
// forEach With Maps and Sets
// Map
// const currencies = new Map([
//   ['USD', 'united states dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound streling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// //set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });
/////////////////////////////////////////////////////
// Challenge #1

// const checkDoges = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs);

//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   });
// };
// checkDoges([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDoges([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

////////////////////////////////////////////////////////

// const eurToUsd = 1.1;

// // const movementsUSA = movements.map(function (mov) {
// //   return mov * eurToUsd;
// // });
// const movementsUSD = movements.map(mov => mov * eurToUsd);
// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// const movementsDescription = movements.map(
//   (mov, i) =>
//     `Movment ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDescription);
//////////////////////////////////////////////////////

// const deposits = movements.filter(function (mov, i, arr) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

///////////////////////////////////////////////////
// console.log(movements);

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// const balance7 = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance7);

// /// maximo value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);

////////////////////////////////////

// challenge #2

// const calcAverageHumanAge = function (ages) {
//   const HumanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = HumanAges.filter(age => age >= 18);
//   console.log(HumanAges);
//   console.log(adults);
//   // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   const average = HumanAges.filter(age => age >= 18);
//   return average;
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

//////////////////////////////////////
// challenge #3

// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

// //////////////////////////////////////

// const eurToUsd = 1.1;
// console.log(movements);
// //PIPELINE
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd;
//   })
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

///////////////////////////////////////

// const fristWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(fristWithdrawal);

console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Farzin Jose Polo Jimenez');
// console.log(account);
