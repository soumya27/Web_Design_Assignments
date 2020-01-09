/**
* @param {number[]} array : list of numbers
* @param {number} left : start index
* @param {number} right: end index
*
* @desc method swaps two numbers at the index left and right in the list array
*
*/
function swap(array, left, right){
    /** @type {number} temp */
    let temp = array[left];
    array[left]= array[right];
    array[right] = temp;
}

/**
* @param {number[]} array : list of numbers
* @param {number} left : start index
* @param {number} right: end index
*
* @desc method picks a pivot, traverses the array and swaps elements such that
* everything left to the pivot is smaller than pivot and
* everything right to the pivot is larger than pivot
*
* @return {start} index
*/
function parition(array,left,right){
    /* @type {number} pivot */
    let pivot = array[Math.floor((right+left)/2)];
    while(left<=right){
        while(array[left] < pivot){
            left++;
        }
        while(array[right]>pivot){
            right--;
        }
        if(left<=right){
            swap(array, left,end);
            left++;
            right--;
        }
    }
    return left;
}

/**
* @param {number[]} array : list of numbers
* @param {number} left : start index
* @param {number} right: end index
*
* @desc this is a recursive quicksort call, which divides and sorts each parition of
* the array
*
* @return {number[]} array
*/
function quickSort(array ,left, right){
    if(array.length > 1 ){
        /** @type {number} index */
        let index = parition(array,left,right);
        console.log("index: "+index);
        if(left < index-1)
            quickSort(array,left,index-1);
        if(index < right)
            quickSort(array,index,right);
    }
    return array;
}

/** @type {number[]} array */
let array = [9,2,19,1,4,0,23,12,5,3];
/** @type {number[]} result */
let result = quickSort(array, 0,array.length-1);
console.log(result);