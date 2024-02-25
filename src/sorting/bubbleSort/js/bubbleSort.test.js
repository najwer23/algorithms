import { expect, test } from "vitest";
import { bubbleSort } from "./bubbleSort";

test(`sort [1,5,2] to equal [1,2,5]`, () => {
	expect(bubbleSort([1, 5, 2])).toStrictEqual([1, 2, 5]);
});

test(`sort [1,1,1] to equal [1,1,1]`, () => {
	expect(bubbleSort([1, 1, 1])).toStrictEqual([1, 1, 1]);
});

test(`sort [1,-1,1] to equal [-1,1,1]`, () => {
	expect(bubbleSort([1, -1, 1])).toStrictEqual([-1, 1, 1]);
});

test(`sort ["b","a","c"] to equal ["a","b","c"]`, () => {
	expect(bubbleSort(["b", "a", "c"])).toStrictEqual(["a", "b", "c"]);
});

test(`sort ["ab","ab","aa"] to equal ["aa","ab","ab"]`, () => {
	expect(bubbleSort(["ab", "ab", "aa"])).toStrictEqual(["aa", "ab", "ab"]);
});

test(`sort ["Az","ab","Bb"] to equal ['ab', 'Az', 'Bb']`, () => {
	expect(bubbleSort(["Az", "ab", "Bb"])).toStrictEqual(["ab", "Az", "Bb"]);
});

test(`sort [] to equal []`, () => {
	expect(bubbleSort([])).toStrictEqual([]);
});

test(`sort [5,4,3,2,1] to equal [1,2,3,4,5]`, () => {
	expect(bubbleSort([5, 4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4, 5]);
});

test(`sort non-ASCII characters`, () => {
	expect(
		bubbleSort(["réservé", "premier", "communiqué", "café", "adieu", "éclair"])
	).toStrictEqual([
		"adieu",
		"café",
		"communiqué",
		"éclair",
		"premier",
		"réservé",
	]);
});

test(`sort [-1,-2,0,0,Infinity,10] to equal [-2,-1,0,0,10,Infinity]`, () => {
	expect(bubbleSort([-1, -2, 0, 0, Infinity, 10])).toStrictEqual([
		-2,
		-1,
		0,
		0,
		10,
		Infinity,
	]);
});

test(`sort ["a-aaaaa", "a-abbb", "a-abc"] to equal ['a-aaaaa', 'a-abbb', 'a-abc']`, () => {
	expect(bubbleSort(["a-aaaaa", "a-abbb", "a-abc"])).toStrictEqual([
		"a-aaaaa",
		"a-abbb",
		"a-abc",
	]);
});
