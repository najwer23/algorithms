/**
 * Counting the occurrences in array with .loopfor method
 */

type DataIn = Array<number | string>;

interface Result {
	[key: string]: number;
}

export const frequencyLoopFor = (arr: DataIn): Result => {
	let obj: Result = {};

	for (let i = 0; i < arr.length; i++) {
		obj[arr[i]] = -~obj[arr[i]];
	}

	return obj;
};
