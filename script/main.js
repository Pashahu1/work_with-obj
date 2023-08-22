'use strict'
//spred operator

// function sum(...arr, construct) {
//   console.log(arr.length); -довжинаа масиву
//   console.log(arr); - данні масиву

//   construct - допомагає дізнатися про вміст 
// елемменту масиву (старий спосіб,наразі використовється спред оператор)
// }

// sum(1, 2);
// sum(1, 2, 3, 4);
// sum(undefined);


// function

// console.log (
//   getCoin(3,2),
//   getCoin(1,2,3,4),
//   getCoin(),
// ) результат на початку

// function getCoin(a = 0, b = 0, ...args) {
//   console.log(a, b, args);

//   return a + b;
// } -звичайна фнкція вивід якої буде працювати як і в початку так і в кінці

// console.log (
//   getCoin(3,2),
//   getCoin(1,2,3,4),
//   getCoin(),
// ) результат в кінці

// Функція за умовою фунція яку можна присвоїти в змінну

// let operation;

// if (true) {
//   operation = function(a = 0, b = 0, ...args) {

//     console.log(a, b, args);

//     return a + b;
//   } - фнкція за умовою вона присвоюється до змінної
// }

// let operation2 = (a = 0, b = 0, ...args) => {

//   console.log(a, b, args);

//   return a + b;
// } - стрілкова функція вона присвоюється до змінної

// console.log (
//   operation(3,2),
// ) - результат просто змінюємо на назв змінної(для присвоєння до змінної функціонний результат можна встановлювати лише знизу)

// let operation3 = (a = 0,b = 0, ...args) => a + b; - спрощення стрілкової функції якщо фнкція повертає результат одразу то можна використовувати саме такий приклад скорочення

// console.log (
//   operation3(3,2),
// )

// let operation4 = a => a + 10; -якщо один аргумент,найкорочший запис фнкції
// console.log (
//   operation4(3),
// )



// switch case

// console.log(
//   getCount(4)
// );


// function getCount(count) {

//   switch(count) {
//     case 1: 
//       console.log('one');
//       break;

//     case 2: 
//       console.log('two');
//       break;

//     case 3: 
//       console.log('three');
//       break;
//   }
// } -фекція роботи зі світч ккейсом з виводом елементів

// function getCount(count) {
//   switch(count) {
//     case 1: {
//       return 'one';
//     }
  
//     case 2: 
//       return 'two';
  
//     case 3: 
//       return 'three';
      
//     default: 
//       return 'any'
//   }
// } -функція з поверненням елементів через switch case

// switch true 

// function getCount(count) {
//   if(count < 2) {
//     return 'one';
//   }

//   if(count <= 4) {
//     return 'A few';
//   }

//   return 'Many';
// } -приклад if else


// function getCount(count) {
//   switch (true) {
//     case (count < 2): {
//       return 'one';
//     }

//     case (count <= 4): {
//       return 'A few';
//     }

//     default:
//       return 'Many'
//   }
// } - прикллад тру свідч кейс зі значенням тр всі умови будть валідними,але данний приклад краще не використовувати через свідч кейс бо він не зрчний для читання, краще юзати іф елсе


// exlipse type 


// Значення які перетворюються на false в джс
// це: false,'',0 n0,Nan,null,undefind
// Значення які перетворюються на true
// це:[],(),=>, {}

// const value = 10;

//  if (value) { // Якщо знаачення true,то ми спрацюэ body if,якщо ні то нічого не буде
  // console.log(
  //   Boolean(value), !!value, -Boolen
  //   String(value), `${value}`, '' + value, -String
  //   Number(value), value, value, -Numbeer
  //   );
    // Щоб Перетворити значення в тр або фолз можна за допомогою boolen(),тоді результат буде тру бо фолз також є ще один метод перевести значення до булен це оператолр !!

    // Щоб перетворити рядок у строковий використовэться такий метод String(), `${}`-при конкатинації значення будуть змінюватися на ті до яких відносяться наприклад value = 10 `${value}`-10,'' + value - '10'

    // Щоб перетворити в number выкористовують унарний + або Number Приклад value = '10' log(Number(value))-10
//  };

// Явне преведення типів для порівняння

// const value = 2;

// console.log(
//   value > 18,
//   value > '18',
// ); -False False

// const value = '2'; -Не правильне порівняння

// console.log(
//   value > 18,
//   value > '18',
// ); -False True;

// У 2-випадку рядки будуть мати праваильне значення бо томущо value,має лише один символ '2' > '18' тому true

// const value = '2';

// console.log(
//   +value > 18, - порівнює лише Number
//   String(value) > '18', -порівнює лише String
// ); -False True; довільне порівняння

// isNaN(),Object.is()
// const value = 'fsfasfdaa';
//   console.log(isNaN(value) 
// ); резльтат true isNan() перевіряє чи значення не є числовим якщо в мові буде "10" -то результат буде false,10 -теж результат буде false

// const value = 20;
// const values = '20';
//   console.log(Object.is(value, values) 
// ); false -object.is() перевіряє чи гарантовано обидва числа рівні між собою з уурахуванням Nan






// function getWinner(maxSolved, romanSolved) {

//   const x = maxSolved < romanSolved;

//   if (Number(maxSolved) > Number(romanSolved)) {
//     return 'Max is the winner!!!';
//   } else if (x) {
//     return 'Roman is the winner!!!';
//   } else {
//     return 'Roman and Maxim are the winners!!!';
//   }
// }

// console.log(
//   // getWinner(45, '42') === 'Max is the winner!!!',
//   // getWinner('34', 35) === 'Roman is the winner!!!',
//   // getWinner(24, 28) === 'Roman is the winner!!!',
//   getWinner('14','9') === 'Roman is the winner!!!',
//   // getWinner('13', '11') === 'Max is the winner!!!',
//   // getWinner(15, '15') === 'Roman and Maxim are the winners!!!',
// );

// // getWinner(45, '42');
// // getWinner('34', 35);
// // getWinner(24, 28);
// // getWinner('13', '11');
// // getWinner(15, '15');
// getWinner('14', '9');


//oprators in ditals

// console.log(
//   3 || 10,
//   6 || 5,
//   7 || 5,
//   8 || 5,
//   9 || 5,
//   31 || 5,
// )

// function or(a, b) {
//   if (a === 3) {
//     return a;
//   } 

//   return b;
// }

// console.log(
//   or(3,5),
//   or(5,5),
//   or(3,5),
//   or(3,5),
//   or(3,5),
//   or(3,5),
// ) - в данном примере если значение а === 3 то верн'т значение б тоесть если в словии значение === 4 то в консоль вернёться доп значение б тоесть 5
// || - ПОВЕРТАЄ 1=НЕ ПОРОЖНЕ ЗНАЧЕННЯ буде повертати a;
// приклад:
// console.log(
//   0 || null || 12 || undefined
// ) -результат 12-перше не порожне значення;

// || частіше використовується в формах введення даных наприклдад const name = '' || 'no name'
// якщо значення введенно використається '',а якщо ні то повернеться 'no name'


// &&- ПОвертає перше порожне знаачення буде повертати b;
// використовують для перевірки функції та перевірки ім'я 
// наприклад:

// name && console.log(name) - якщо є і'я то викличиться функція з іменем(не кращий варіант виконання)

  // if(name) {
  //   console.log(name)
  // } -зрозуміліший варіант виконаання

// console.log(
//   3 && 10,
//   6 && 5,
//   7 && 5,
//   8 && 5,
//   9 && 5,
//   31 && 5,
// )

// function and(a, b) {
//   if (!a) {
//     return a;
//   } 

//   return b;
// }


// console.log(
//   and(3,5),
//   and(5,5),
//   and(3,5),
//   and(3,5),
//   and(3,5),
//   and(3,5),
// )


// function recommendRoom(adultsCount = 0,
//   childrenCount = 0, 
//   babiesCount = 0,
// ) {
//   const total = adultsCount + childrenCount + babiesCount;

//   if (total <= 4) {
//     return 'small room';
//   }

//   if (total === 5 && babiesCount) {
//     return 'small room + extra bed';
//   }

//   if (total <= 8) {
//     return 'big room';
//   }

//   if (total === 9 && babiesCount) {
//     return 'big room + extra bed';
//   }
// }

// console.log(
//   recommendRoom(2, 2, 1) === 'small room + extra bed',
//   recommendRoom(2, 1, 1) === 'small room',
//   recommendRoom(3, 2) === 'big room',
//   recommendRoom(3, 0, 2) === 'small room + extra bed',
//   recommendRoom(7, 0, 2) === 'big room + extra bed',
//   recommendRoom(8) === 'big room',
// );

// Object-basick

// const user1 = {
//   name: 'Pavlo',
//   surname: 'Chudin',
// }

// const user2 = {
//   name: 'Oleg',
//   surname: 'Mironenko',
// }

// object(user1);
// object(user2);

// function object(user) {
//   console.log(`User ${user.name}, ${user.surname}`);
// };

// const age = 39;

// const user = {
//   'User Name': 'Pavlo',
//   "User Name": 'Pavlos',
//   userName: 'Pasha',
//   ['a' + 'g' + 'e']: 39,
//   age: age,
//   age,
// }

// console.log(
//   user.userName,
//   user['User Name'],
//   user["User Name"],
//   user["age"],
//   user.age,
//   age,

//   user.age = 40,
//   user['age'] = 41,
// );

// delete user.age

// console.log(user)

// let olgerd = (a, b) => {
//   if (a + b === 8) {
//     console.log(a + b)

//     return a + b
//   }
// }

// console.log(olgerd(5, 3) === 8);


// let x = "How can mirrors be real if our eyes aren't real";
// // const y = x.toLocaleUpperCase([0]);
// console.log(x.charAt(0).toUpperCase() + x.slice(1));


// // for (let i = 0; i <= x; i++) {
// //   if (x === "How can mirrors be real if our eyes aren't real") {

// //     console.log("How Can Mirrors Be Real If Our Eyes Aren't Real");
// //   }
// // }

// const user = {
//   firstName: 'Misha',
//   age: 39,
//   isMaried: true,
// };

// const key = 'firstName';

// if (user[key]) {
//   console.log('Property exists');
// } - перевіряє наявність значення тру за ключем key в обєкті

// if (user[key] !== undefined) {
//   console.log('Property exists');
// } - перевіряє наявність значення фолз за ключем key в обєкті(краще не використовати якщо значенння явни типом зазначена як undefind)

// false in objct === undefined

// if ('age' in user) {
//   console.log('Property exists');
// }

// if (key in user) {
//   console.log('Property exists');
// }

// in - оператор перевіряє влаастивість в обєкті,якщо значення записанно в зінну можна використоввати її.приклад key,але і тут прогалина не все так добре в джс є наслідування і якщо допустимо и перевіряємо значення toString- якого явно немає але у обєкта наприклад нейм він є,то значення пошку цієї властивості буде true

// if (Object.hasOwn(user, key)) {
//   console.log('Property exists');
// } -быльш надійний і сучасний метод перевірки знаходження обєкту в середені.

// Object.hasOwn() - сучасний метод перевірки на наявність властивості в обєкті(перевіряє саме не успадковану властивість а власну)
// більш надійні перевірки
// 1) якщо я хочу перевіритти наявніссть властивості
// if (user.firstname) {
//   console.log('Property exists');
// } 
// 2) якщо я хочу перевіритти наявніссть властивості більш надійніше 

// if (Object.hasOwn(user, key)) {
//   console.log('Property exists');
// } 

// const user = {
//   firstName: 'Misha',
//   age: 39,
//   isMaried: true,
// };

// for (const key in user) {
//   console.log(key, user);
// }
// Цыкл for in використовується для перевірки властивостей обєкта тобто бдть виводитися їх ключі

// for (const key in user) {
//   console.log(key, user[key]);
// } - в цьому будуть виводитися значення, та властивосты обэкта


                                                    // Object.keys();-Метод за допомоги якого можна отримати масив обєктів
// const user = {
//   firstName: 'Misha',
//   age: 39,
//   isMaried: true,
// }

// if (Object.hasOwn(user, "isMaried")) {
//   console.log('HIHO')
// }
// for (const key of Object.keys(user)) {
//   console.log(key, user)
// } -за допооги фор оф можна отримати властивості з обджект кейс.

// for (const key of Object.keys(user)) {
//   console.log(key, user[key])
// } - можна отримати значення та властивості

                                          // Object.values()- отримаємо лише значення

// for (const key of Object.values(user)) {
//   console.log(key)
// }

                                      // Object.entries() - створює масив в яком є і властивості і значення

// for (const key of Object.entries(user)) {
//   console.log(key)
// } - створює масив в яком є і властивості і значення

// for (const key of Object.entries(user)) {
//   console.log(key[0], key[1]) 
// } - виводить масив значень де key[0] - властивість key[1] - значення

// на ділі краще використовувати методи ці 3 методи а ніж цикл for in


// let users = ['Олег Монгол'];

// let user = users[0];
// let fulName = user.split(' ');

// let names = fulName[0];
// let surname = fulName[1];

// console.log('name:', names);
// console.log('surname:', surname);



// let users = ['Олег Монгол'];

// // Получаем строку из массива
// let fullName = users[0];

// // Разделяем имя и фамилию
// let nameParts = fullName.split(' ');

// // Первый элемент массива nameParts будет имя, второй - фамилия
// let firstName = nameParts[0];
// let lastName = nameParts[1];

// console.log("Имя:", firstName);
// console.log("Фамилия:", lastName);


// function restoreNames(users) {
//   for (const user of users) {
//     if (user.firstName === undefined) {
//       const fullNameParts = user.fullName.split(' ');
//       user.firstName = fullNameParts[0];
//     }
//   }
// }

// const people = [
//   { name: 'Emma', gender: 'female', age: 19 },
//   { name: 'Avram', gender: 'male', age: 41 },
// ];

// function removeFemaleAges(people) {
//   // write code here
//   console.log(people.name[0])
// }

// const robots = [
//   { coreVersion: 9 },
//   { coreVersion: 13 },
//   { coreVersion: 16 },
//   { coreVersion: 9 },
//   { coreVersion: 14 },
// ];

// function getOutdated(robots, newVersion) {
//   const outdatedIndices = [];

//   for (let i = 0; i < robots.length; i++) {
//     if (robots[i].coreVersion < newVersion) {
//       outdatedIndices.push(i);
//     }
//   }

//   return outdatedIndices;
// }


// console.log(
//   getOutdated(robots, 10) === [0, 3],
//   getOutdated(robots, 14) === [0, 1, 3],
//   getOutdated(robots, 8) === [],
//   getOutdated(robots, 18) === [0, 1, 2, 3, 4],
// )

// function sortString(words) {
//   let total = '';

//   for (let i = 1; i < words.length; i++) {
//     total += words.sort(i);
//   }

//   return total;
// }

// sortString('is2 Thi1s T4est 3a') === 'Thi1s is2 3a T4est'
// sortString('4of Fo1r pe6ople g3ood th5e the2') === 'Fo1r the2 g3ood 4of th5e pe6ople'
// sortString('') === ''

// const GAMING_LOAD_DIA = 3;

// if(GAMING_LOAD_DIA) {
//   console.log(20)
// }