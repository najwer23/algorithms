import { bench } from "vitest";
import { quickSort } from "../quickSort/js/quickSort";

const testArr = Array.from({ length: 1e6 }, () =>
	Math.floor(Math.random() * 1000)
);
const testArr2 = structuredClone(testArr);

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
