// video number 6
let age = 20
let score = "55"

console.log(typeof score);
console.log(typeof(age)); // can use () or skip also

//here we have value of score in string but we need number not string then we change it 
//Type 1 change string to number and alpha numaric value 
console.log(typeof score);
let valueInNumber1 = Number(score) // it is in class form we write it as capital not small and for string we can use the same
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

//Type 2 alpha numaric value
let m_score = '33abc'
console.log(typeof m_score)
let valueInNumber2 = Number(m_score)
console.log(typeof valueInNumber2); // but this will give number as output which is wrong beacuse it it not pure number.
//  but if we convert it, it will show number. and when we check it's value it will show NaN, it is also a type.
console.log(valueInNumber2); // in output it will show NaN(Not a Number)

//Type 3 - null  
let a_score = null
console.log(a_score)
let valueInnumber = Number(a_score) //it will show the value which is null as we can see in output
console.log(typeof a_score) // type of null which is object as shown in output
console.log(valueInnumber) // with help of this we can see the value of null which is zero 0.

//Type - 4 undefined
let u_score = undefined 
console.log(typeof u_score) // vlue in u_score - undefined
let valueInNumber3 = Number(u_score)
console.log(typeof valueInNumber3) // which type - number
console.log(valueInNumber3) //show NaN

//Type - 4 boolean Value
let t_score = true
console.log(typeof t_score) // type of t_score value - boolean
let valueInNumber4 = Number(t_score)
console.log(typeof valueInNumber4) // which type - number
console.log(valueInNumber4) //show 1

//Type - 5 id=f variable have string value example name or only alphabetical value which we can't change to numeric.
let alpha_score = "Tannu"
console.log(typeof alpha_score) // type of alpha_score value - string
let valueInNumber5 = Number(alpha_score)
console.log(typeof valueInNumber5) // which type - number
console.log(valueInNumber5) //show NaN cause it is not a pure number

/* NOTES :- "55" (string) => 55 (Number)
            "33abc" => NaN
            true => 1; false => 0
*/

// case 1 - convert 1 to boolean

let isLoggedIn1 = 1 // instead of 1 if we give string value any alpha value ex name "Tannu" then also it will give true value
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1); // it will give true as output which proof of when we convert 1 to boolean.
// it will give true value in boolean


// Case2 - covert "" empty string to boolean

let isLoggedIn2 = "" // instead of empty string if we put any value like name then it will give true value
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2); // will give false as output

/* 1 => true; 0 => false
 "" => false
 "Tannue" => true
 */

// Case 3 - Number to string

let someNumber = 22
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber); // will give string as output cause number is converted to string
