const accountID = 144553
let accountEmail = "sona@hotmail.com"
var accountPassword = "199026"
accountcity = "Bihar" //in javascript without writing var or let in stating we can reserve the memory but it is not a good way.
let accountState; //in js if we declare the variable without assigning any value then it will undefined & we can see in output.

//accountID = 2// not allowed

accountEmail = "hotmail.com"
accountPassword = "123456"
accountcity = "Patna"

console.log(accountID);

/*
Prefer not to use ver
because of issue in block scope and functional scope
*/

console.table([accountID, accountEmail, accountPassword, accountcity, accountState]);

