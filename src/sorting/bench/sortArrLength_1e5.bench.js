import { bench } from "vitest";
import { quickSort } from "../quickSort/js/quickSort";
import { bubbleSort } from "../bubbleSort/js/bubbleSort";

const testArr = Array.from({ length: 1e5 }, () =>
	Math.floor(Math.random() * 1000)
);
const testArr2 = structuredClone(testArr);
const testArr3 = structuredClone(testArr);

bench(
	"bubbleSort",
	() => {
		bubbleSort(testArr3);
	},
	{ time: 1000 }
);

bench(
	"quickSort",
	() => {
		quickSort(testArr);
	},
	{ time: 1000 }
);

bench(
	"sort()",
	() => {
		testArr2.sort();
	},
	{ time: 1000 }
);
