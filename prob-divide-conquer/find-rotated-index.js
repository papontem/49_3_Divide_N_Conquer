// findRotatedIndex.js
/**
 *
 * findRotatedIndex
 *
 * Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer.
 * The function should return the index of num in the array. If the value is not found, return -1.
 *
 * Constraints: Time Complexity: O(log N)
 *
 * Examples:
 *
 *     findRotatedIndex([3,4,1,2],4) // 1
 *     findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
 *     findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
 *     findRotatedIndex([37,44,66,102,10,22],14) // -1
 *     findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
 *
 */
//       v
// [ 3 , 4 , 1 , 2 ] > 4 <
//       v
// [ 3 , 4 , 1 , 2 ] <4>

//  |        v           |
// [6, 7, 8, 9, 1, 2, 3, 4]  > 8 <
//  |  v  |
// [6, 7, 8, 9, 1, 2, 3, 4]
//       |v|
// [6, 7, 8, 9, 1, 2, 3, 4]  <8>

//           v
// [6, 7, 8, 9, 1, 2, 3, 4]  > 3 <
//              |  v     |
// [6, 7, 8, 9, 1, 2, 3, 4]
//                   |v  |
// [6, 7, 8, 9, 1, 2, 3, 4] <3>

//            v
// [ 37, 44, 66, 102, 10, 22]  > 14 <
//                 |   v   |
// [ 37, 44, 66, 102, 10, 22]
//                        |v|
// [ 37, 44, 66, 102, 10, 22]

function findRotatedIndex(arr, n) {
	let leftIdx = 0;
	let rightIdx = arr.length - 1;
	// our infinity loop stopper
	count = 0;

	while (leftIdx <= rightIdx) {
		let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
		let middleVal = arr[middleIdx];
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
			middleVal,
			"target:",
			n
		);

		if (middleVal == n) {
			console.log("RETURNING :", middleVal);
			return middleIdx;
		}

		let rightVal = arr[rightIdx];
		let leftVal = arr[leftIdx];

		// is middle value greater than or equal to the left value, true means were on the left side
		if (middleVal >= leftVal) {
			// if we check then if n is between these two values, we can see if we should move left or right
			if (middleVal > n && n >= leftVal) {
				// n is towards our left
				rightIdx = middleIdx - 1;
			} else {
				// n is towards our right
				leftIdx = middleIdx + 1;
			}
		} else {
			// false means were on the right side, ergo if we check
			if (middleVal < n && n <= rightVal) {
				// true means n is towards our right
				leftIdx = middleIdx + 1;
			} else {
				// n is towards our left
				rightIdx = middleIdx - 1;
			}
		}
	}
	// value was never found
	console.log("NOT FOUND RETURNING -1");
	return -1;
}

module.exports = findRotatedIndex;

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
