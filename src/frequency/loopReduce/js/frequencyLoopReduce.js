/**
 * Counting the occurrences in array with .reduce method
 */
export const frequencyLoopReduce = (arr) =>
	arr.reduce((acc, curr) => ((acc[curr] = -~acc[curr]), acc), {});
