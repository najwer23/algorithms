import { expect, test } from "vitest";
import { frequencyLoopReduce } from "./frequencyLoopReduce";

test(`frequency [1,2,3] to equal {"1": 1, "2": 1, "3": 1}`, () => {
	expect(frequencyLoopReduce([1, 2, 3])).toStrictEqual({
		1: 1,
		2: 1,
		3: 1,
	});
});

test(`frequency [1,2,3,3] to equal {"1": 1, "2": 1, "3": 2}`, () => {
	expect(frequencyLoopReduce([1, 2, 3, 3])).toStrictEqual({
		1: 1,
		2: 1,
		3: 2,
	});
});

test(`frequency [1,2,3,3] to equal {"a": 2, "2": 1, "3": 2}`, () => {
	expect(frequencyLoopReduce(["a", "a", 2, 3, 3])).toStrictEqual({
		a: 2,
		2: 1,
		3: 2,
	});
});

test(`frequency [-1,-1,3,3] to equal {"-1": 2, "3": 2}`, () => {
	expect(frequencyLoopReduce(["-1", -1, 3, 3])).toStrictEqual({
		"-1": 2,
		3: 2,
	});
});
