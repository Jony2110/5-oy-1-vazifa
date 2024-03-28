                                             //    1
// let numbers = [1, 2, 3, 4, 5, 1, 2, 3, 6, 7, 8, 9, 9];
// function aslMasiv(arr) {
//     let yangi = new Set();

//     for (let i = 0; i < arr.length; i++) {
//         yangi.add(arr[i]);
//     }

//     return Array.from(yangi);
// }
// let yangi = aslMasiv(numbers);
// console.log(yangi);


                                            // 2
// function getUniqueChars(str) {
//     let charMap = new Map();
    
//     for (let char of str) {
//         if (!charMap.has(char)) {
//             charMap.set(char, 1);
//         } else {
//             charMap.set(char, charMap.get(char) + 1);
//         }
//     }
    
//     return charMap;
// }

// let str = "hello";
// let charMap = getUniqueChars(str);
// console.log(charMap);


                                              // 3
// function tengmi(arr) {
//     return arr.length === new Set(arr).size;
// }

// let a = tengmi([1, 2, 3, 4, 5, 2])
// console.log(a);


                                              // 4
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 7];

// function birlashtir(arr1, arr2) {
//     let massiv = new Set([...arr1, ...arr2]);
//     return Array.from(massiv);
// }

// let newMasiv = birlashtir(arr1, arr2);
// console.log(newMasiv);

                                             //5
// let arr = [1, 2, 3, 4, 5, 1, 2, 3];
// function dublikatOchirish(arr) {
//     return Array.from(new Set(arr));
// }

// let c = dublikatOchirish(arr);
// console.log(c);



                                              //6
// function sumValues(arr) {
//     let valueMap = new Map();
    
//     for (let num of arr) {
//         if (valueMap.has(num)) {
//             valueMap.set(num, valueMap.get(num) + num);
//         } else {
//             valueMap.set(num, num);
//         }
//     }
    
//     let sum = 0;
//     for (let value of valueMap.values()) {
//         sum += value;
//     }
    
//     return sum;
// }
// let arr = [1, 2, 3, 4, 5, 1, 2, 3];
// let totalSum = sumValues(arr);
// console.log(totalSum);