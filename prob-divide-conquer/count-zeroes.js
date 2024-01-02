// countZeroes.js

/**
 *
 * countZeroes
 *
 * Given an array of 1s and 0s which has all 1s first followed by all 0s,
 *  write a function called countZeroes,
 *  which returns the number of zeroes in the array.
 *
 * Constraints: Time Complexity: O(log N)
 *
 * Examples:
 *
 *     countZeroes([1,1,1,1,0,0]) // 2
 *     countZeroes([1,0,0,0,0]) // 4
 *     countZeroes([0,0,0]) // 3
 *     countZeroes([1,1,1,1]) // 0
 *
 */
function countZeroes(arr) {
	// Check if the array is empty
	if (arr.length == 0) {
		console.log("no elements in array");
		return 0;
	}

	let leftIndex = 0;
	let rightIndex = arr.length - 1;
	let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
	let count = 0;

	// Check if the array is only made of 1s
	if (arr[rightIndex] == 1) {
		console.log("array is not sorted or is only made of ones");
		return count;
	}
	// Check if the array is only made of 0s
	if (arr[leftIndex] == 0) {
		console.log("array is not sorted or is only made of zeroes");
		return arr.length;
	}

	// create a while loop
	while (leftIndex <= rightIndex) {
		// get new middle index
		middleIndex = Math.floor((leftIndex + rightIndex) / 2);
		// console.log("L", leftIndex, "R", rightIndex, "M", middleIndex);

		if (arr[middleIndex] === 1) {
			// If the middle element is 1, move right, unless on the right theres a 0
			if (arr[middleIndex + 1] == 0) {
				// console.log("THIS IS A 1 with a zero to the right of it");
				// If the middle element is 1, it means our zeroes are further to the right side, and if the next value is a 0, we can count here
				count = rightIndex - middleIndex;
				leftIndex = rightIndex + 1; // exit while loop
			} else if (arr[middleIndex + 1] === 1) {
				// If the middle element is 1, it means we can probbly have zero or a one to the right,  move left index to the right
				// console.log("THIS IS A 1 with a one to the left of it");
				leftIndex = Math.floor(leftIndex + middleIndex / 2);
			}
		} else if (arr[middleIndex] === 0) {
			// If the middle element is 0, move left, unless on the left theres a 1
			if (arr[middleIndex - 1] === 0) {
				// console.log("THIS IS A 0 with a zero to the left of it");
				// if we have a zero to the left move left index to the left
				// revalue left index to get the middle of left side
				leftIndex = Math.floor(leftIndex - middleIndex / 2);
			} else if (arr[middleIndex - 1] === 1) {
				// console.log("THIS IS A 0 with a one to the left of it");
				// if we have a one to the left,
				// meaning we landed on the starting zero to count from.
				// we count here and then exit
				count = rightIndex + 1 - middleIndex;
				leftIndex = rightIndex + 1; // exit while loop
			}
		}
	}

	// console.log("RETURNING:", count);

	return count;
}

module.exports = countZeroes;

