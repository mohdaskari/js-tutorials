const accountId = 144553
let accountEmail = "askari@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "mohdaskari@gmail.com"
accountPassword = "21212121"
accountCity = "Lucknow"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.log([accountId, accountEmail, accountPassword, accountCity, accountState])