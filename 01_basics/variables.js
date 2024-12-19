/*Variables and constant*/
const accountId = 3333333
let accountEmail = "bhagyashrigore220@gmail.com"
var accountPassword = "12345"
accountCity = "pune"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])