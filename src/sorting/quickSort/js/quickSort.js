
/**
 * Sorting algorithm: Quick Sort
 * Memory: O(N)
 * Time: O(N log(N))
 */

const partition = (arr, low, high) => {
	let pivot = arr[high];
	let i = low - 1;

	for (let j = low; j <= high - 1; j++) {
		if (
			typeof arr[j] === "string"
				? arr[j].localeCompare(pivot) <= -1
				: arr[j] < pivot
		) {
			i++;
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
	}

	[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

	return i + 1;
};

export const quickSort = (arr, low = 0, high = arr.length - 1) => {
	if (low >= high) return arr;
	let pi = partition(arr, low, high);

	quickSort(arr, low, pi - 1);
	quickSort(arr, pi + 1, high);

	return arr;
};
