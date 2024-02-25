export const bubbleSort = (arr) => {
	let swapped;

	do {
		swapped = false;
		for (let i = 0; i < arr.length - 1; i++) {
			if (
				typeof arr[i] === "string"
					? arr[i].localeCompare(arr[i + 1]) >= 1
					: arr[i] > arr[i + 1]
			) {
				[arr[i], arr[i+1]] = [arr[i+1], arr[i]];
				swapped = true;
			}
		}
	} while (swapped);

	return arr;
};
