// data types 
// when we get a request from a server , the value might be in someother datatype as required , therefore we need to convert them.
let stringvalue="123";
// if the value is 123aditi and then it is converted to number then the value will be NAN i.e. not a number (conversion will be successfull) .
//  null will be converted to 0 and undefined will be converted into NAN (for string to number conversion)
console.log(stringvalue);
console.log(typeof stringvalue);
 let numberb_val=Number(stringvalue);
 console.log(numberb_val);
console.log(typeof numberb_val);

// Boolean() , String(), Number(),
// empty string  i.e. "" will return false in boolean 
//  browser generally returns value in the form of string , so wee might need to convert them into different datatypes.