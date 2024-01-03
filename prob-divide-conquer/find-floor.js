// findFloor.js
/**
 *
 * findFloor
 *
 * Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array.
 * The floor of x in an array is the largest element in the array which is smaller than or equal to x.
 * If the floor does not exist, return -1.
 *
 * Constraints: Time Complexity: O(log N)
 *
 * Examples:
 *
 *     findFloor([1,2,8,10,10,12,19], 9) // 8
 *     findFloor([1,2,8,10,10,12,19], 20) // 19
 *     findFloor([1,2,8,10,10,12,19], 0) // -1
 */
function findFloor(arr, n) {
	let left = 0;
	let right = arr.length - 1;
	let floor = -1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		let midVal = arr[mid]
		if (midVal === n) {
			// If the mid value is equal to n, then it is the floor
			return midVal;
		} else if (midVal < n) {
			// If mid value is less than n, update the floor and search in the right half
			floor = midVal;
			left = mid + 1;
		} else {
			// If mid value is greater than n, search in the left half
			right = mid - 1;
		}
	}

	return floor;
}

module.exports = findFloor;
