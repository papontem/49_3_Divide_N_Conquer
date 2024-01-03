// findRotationCount.js
/**
 *
 * findRotationCount
 *
 * Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order.
 * The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.
 *
 * Constraints: Time Complexity: O(log N)
 *
 * Examples:
 *                 indx:   0   1   2   3   4   5
 *     findRotationCount([ 7,  9, 11, 12, 15    ]) // 0      orig: [7,9,11,12,15]   ->   not rotated counter= [7, 9, 11, 12, 15]
 *     findRotationCount([15, 18,  2,  3,  6, 12]) // 2      orig: [2,3,6,12,15,18] -> rotated twice counter= [15, 18, 2, 3, 6, 12]
 *     findRotationCount([ 7,  9, 11, 12,  5    ]) // 4      orig: [5,7,9,11,12]    -> rotated  X 4  counter= [7, 9, 11, 12, 5]
 *
 * PAM: the array's smallest number will be the clue to finding out how many times a sorted array has been rotated counter clockwise.
 * It baisically tells us how many times a number has been put in front of it.
 */
// PAM: this is just a findMin() function in disguise
function findRotationCount(arr) {
	let left = 0;
	let right = arr.length - 1;
    let count;
	while (left <= right) {
		let middleIdx = Math.floor((left + right) / 2);
		let middleVal = arr(middleIdx);
		console.log("MIddle Index:", middleIdx);
		console.log("MIddle Val:", middleVal);
		console.log(
			"L",
			leftIdx,
			"R",
			rightIdx,
			"middleIdx",
			middleIdx,
			"MidVal",
			middleVal
		);

	}
}

module.exports = findRotationCount;

// demo/binarySearch.js

// function binarySearch(arr, val) {

//   let leftIdx = 0;
//   let rightIdx = arr.length - 1;

//   while (leftIdx <= rightIdx) {
//     // find the middle value
//     let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
//     let middleVal = arr[middleIdx];

//     if (middleVal < val) {
//       // middleVal is too small, look at the right half
//       leftIdx = middleIdx + 1;
//     } else if (middleVal > val) {
//       // middleVal is too large, look at the left half
//       rightIdx = middleIdx - 1;
//     } else {
//       // we found our value!
//       return middleIdx;
//     }
//   }

//   // left and right pointers crossed, val isn't in arr
//   return -1;
// }
