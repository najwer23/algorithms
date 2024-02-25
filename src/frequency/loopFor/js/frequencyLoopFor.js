/**
 * Counting the occurrences in array with .loop for method
 */
export const frequencyLoopFor = (arr) => {
	let obj = {};

	for (let i = 0; i < arr.length; i++) {
		obj[arr[i]] = -~obj[arr[i]];
	}

	return obj;
};
