/** @type {number[]} list */
const list = [2, 5, 8, 9, 13, 45, 67, 99];
/** @type {number} number */
let number =99;
/** @type {number} start */
let start =0;
/** @type {number} end */
let end = list.length-1;

/**
* @param {list} array : Sorted integer list
* @param {number} number : Element we are trying to find
* @param {number} left : start index
* @param {number} right: end index
*
* @desc binarySearch is an recursive function where we are searching for a number in the array list
*
* @return {boolean} true if we find the element else false
*/
const binarySearch = function (array ,number, left ,right) {
    if(left > right)
        return false;
    let mid = Math.floor((right+left)/2);
    if(array[mid] === number){
        return true;
    } else if (number < array[mid]){
        return binarySearch(array ,number, left , mid-1);
    } else {
        return binarySearch(array,number, mid+1, right);
    }
};

console.log("Sorted Array is : "+ list);
console.log("Number to be searched : "+number);

if(binarySearch(list, number,start,end)){
    console.log("Found element in the array");
} else {
    console.log("Element not found");
}
