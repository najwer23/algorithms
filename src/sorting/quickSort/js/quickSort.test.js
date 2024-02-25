import { expect, test } from "vitest";
import { quickSort } from "./quickSort";

test(`sort [1,5,2] to equal [1,2,5]`, () => {
	expect(quickSort([1, 5, 2])).toStrictEqual([1, 2, 5]);
});

test(`sort [1,1,1] to equal [1,1,1]`, () => {
	expect(quickSort([1, 1, 1])).toStrictEqual([1, 1, 1]);
});

test(`sort [1,-1,1] to equal [-1,1,1]`, () => {
	expect(quickSort([1, -1, 1])).toStrictEqual([-1, 1, 1]);
});

test(`sort ["b","a","c"] to equal ["a","b","c"]`, () => {
	expect(quickSort(["b", "a", "c"])).toStrictEqual(["a", "b", "c"]);
});

test(`sort ["ab","ab","aa"] to equal ["aa","ab","ab"]`, () => {
	expect(quickSort(["ab", "ab", "aa"])).toStrictEqual(["aa", "ab", "ab"]);
});

test(`sort ["Az","ab","Bb"] to equal ['ab', 'Az', 'Bb']`, () => {
	expect(quickSort(["Az", "ab", "Bb"])).toStrictEqual(["ab", "Az", "Bb"]);
});

test(`sort [] to equal []`, () => {
	expect(quickSort([])).toStrictEqual([]);
});

test(`sort [5,4,3,2,1] to equal [1,2,3,4,5]`, () => {
	expect(quickSort([5, 4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4, 5]);
});

test(`sort non-ASCII characters`, () => {
	expect(
		quickSort(["réservé", "premier", "communiqué", "café", "adieu", "éclair"])
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
	expect(quickSort([-1, -2, 0, 0, Infinity, 10])).toStrictEqual([
		-2,
		-1,
		0,
		0,
		10,
		Infinity,
	]);
});

test(`sort ["a-aaaaa", "a-abbb", "a-abc"] to equal ['a-aaaaa', 'a-abbb', 'a-abc']`, () => {
	expect(quickSort(["a-aaaaa", "a-abbb", "a-abc"])).toStrictEqual([
		"a-aaaaa",
		"a-abbb",
		"a-abc",
	]);
});
