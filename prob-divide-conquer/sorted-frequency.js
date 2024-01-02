// sortedFrequency.js
/**
 *
 * sortedFrequency
 *
 * Given a sorted array and a number,
 * write a function called sortedFrequency that counts the occurrences of the number in the array
 *
 * Constraints: Time Complexity: O(log N)
 *
 * Examples:
 *
 *     sortedFrequency([1,1,2,2,2,2,3],2) // 4
 *     sortedFrequency([1,1,2,2,2,2,3],3) // 1
 *     sortedFrequency([1,1,2,2,2,2,3],1) // 2
 *     sortedFrequency([1,1,2,2,2,2,3],4) // -1
 *
 */
function sortedFrequency(arr, n) {
	let leftStart = 0;
	let leftEnd = arr.length - 1;
	let leftFinalIndex = -1;

	// Find the leftmost occurrence using binary search
	while (leftStart <= leftEnd) {
		let middle = Math.floor((leftStart + leftEnd) / 2);

		if (arr[middle] === n) {
			// if we found our number set it as new middle,
			leftFinalIndex = middle;
			// Move to the left to find other possible instances of it
			leftEnd = middle - 1;
		} else if (arr[middle] < n) {
            // if the new number is smaller , move to the right
			leftStart = middle + 1;
		} else {
            // if the number in the middle is greater than our number move to the left 
			leftEnd = middle - 1;
		}
	}

	// if the number is not found, return -1
	if (leftFinalIndex === -1) {
		return -1;
	}

	// count occurrences to the right of the leftmost occurrence
	let count = 0;
	for (let i = leftFinalIndex; i < arr.length && arr[i] === n; i++) {
		count++;
	}

	return count;
}

module.exports = sortedFrequency;

