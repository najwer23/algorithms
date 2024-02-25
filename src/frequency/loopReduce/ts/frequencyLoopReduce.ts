/**
 * Counting the occurrences in array with .reduce method
 */

type DataIn = Array<number | string>;

interface Result {
	[key: string]: number;
}

export const frequencyLoopReduce = (arr: DataIn): Result => {
	return arr.reduce(
		(acc: Result, curr) => ((acc[curr] = -~acc[curr]), acc),
		{}
	);
};
