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
 * This is just a findMin() function in disguise that uses a binary search algorythms to solv for smallest number and returns its index
 * the smallest number will always have a number that is as much or greater than is value to the right and to the left of it, if its not the first or last number.
 */
function findRotationCount(arr) {
	let data = {
		left: 0,
		right: arr.length - 1,
		count: 0,
		farLeft: 0,
		farRight: arr.length - 1,
	};

	while (data.left <= data.right && data.count <= arr.length) {
		data.middleIdx = Math.floor((data.left + data.right) / 2);
		data.middleVal = arr[data.middleIdx];

		// check if we are the only element in array, or if we have either or a higher value on the data.left and on the data.right
		if (
			(data.middleIdx === data.farLeft ||
				data.middleVal < arr[data.middleIdx - 1]) &&
			(data.middleIdx === data.farRight || data.middleVal < arr[data.middleIdx + 1])
		) {
            console.log("loop data:", data);
			return data.middleIdx;
		}

		// move data.left or data.right depending
		if (data.middleVal < arr[data.right]) {
			// move more to the data.left
			data.right = data.middleIdx - 1;
		} else {
			// move more to the data.right
			data.left = data.middleIdx + 1;
		}

		data.count++;
		console.log("loop data:", data);
	}

	// If the array is not rotated
	return 0;
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
