import { bench } from "vitest";
import { frequencyLoopFor } from "../loopFor/js/frequencyLoopFor";
import { frequencyLoopReduce } from "../loopReduce/js/frequencyLoopReduce";

const testArr = Array.from({ length: 1e6 }, () => Math.floor(Math.random() * 40));

bench(
	"frequencyLoopFor",
	() => {
		frequencyLoopFor(testArr);
	},
	{ time: 1000 }
);

bench(
	"frequencyLoopReduce",
	() => {
		frequencyLoopReduce(testArr);
	},
	{ time: 1000 }
);

