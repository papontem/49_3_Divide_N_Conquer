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
		return 0;
	}

	let leftIndex = 0;
	let rightIndex = arr.length - 1;
	let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
	let count = 0;

	// Check if the array is only made of 1s
	if (arr[rightIndex] == 1) {
		return count;
	}
	// Check if the array is only made of 0s
	if (arr[leftIndex] == 0) {
		return arr.length;
	}

	
	while (leftIndex <= rightIndex) {
		
		middleIndex = Math.floor((leftIndex + rightIndex) / 2);

		if (arr[middleIndex] === 1) {
			if (arr[middleIndex + 1] == 0) {
				count = rightIndex - middleIndex;
				leftIndex = rightIndex + 1; // exit while loop
			} else if (arr[middleIndex + 1] === 1) {
				leftIndex = Math.floor(leftIndex + middleIndex / 2);
			}
		} else if (arr[middleIndex] === 0) {
			if (arr[middleIndex - 1] === 0) {
				leftIndex = Math.floor(leftIndex - middleIndex / 2);
			} else if (arr[middleIndex - 1] === 1) {
				count = rightIndex + 1 - middleIndex;
				leftIndex = rightIndex + 1; // exit while loop
			}
		}
	}

	// console.log("RETURNING:", count);

	return count;
}

module.exports = countZeroes;
