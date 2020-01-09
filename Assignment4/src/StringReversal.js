/** @type {String} stringToReverse */
let stringToReverse = "WE WANT TO REVERSE THIS STRING";
/** @type {String} reversedString */
let reversedString="";

/**
* @desc the for loop runs from the end of the loop to the start
* appending each char from stringToReverse to reversedString
*
* @example
* string: WE WANT TO REVERSE THIS STRING
* reversed: GNIRTS SIHT ESREVER OT TNAW EW
*/
if(stringToReverse.length>0){
    for(let i = stringToReverse.length-1 ; i>= 0; i--){
        reversedString += stringToReverse.charAt(i);
    }
}
else {
    console.log("Empty String can't be reversed.")
}
console.log(reversedString);