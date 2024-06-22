const account_id = 131; 
let account_email = "abhay@gmail.com";
var account_password = "12345";
account_city = "Punjab";


// account_id = 2; //not allowed

/*
We don't use var because of scope problem
*/

account_email = "ch@gmail.com";
account_password="12331";
account_city = "Jalandhar";

console.log(account_id);
console.table([account_id, account_email, account_password, account_city])