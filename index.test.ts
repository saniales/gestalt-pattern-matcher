import { describe, it } from "mocha";
import small_test from "./testdata/small_test";
import big_test from "./testdata/big_test";
import { expect } from "chai";
import gestaltSimilarity from ".";

describe("Library Tests (Average string length = 18 characters)", () => {
    it(`Short Test (${small_test.length} elements)`, () => {
        test_from_cases(small_test);
    })
    it(`Big Test (${big_test.length} elements)`, () => {
        test_from_cases(big_test);
    })
});

type TestCase = {
    first: string;
    second: string;
    expected_result: number;
}

function test_from_cases(cases : TestCase[]) {
    for (const { first, second, expected_result } of cases) {
        const actual_result = gestaltSimilarity(first, second);
        expect(actual_result).to.be.equal(expected_result, `gestaltSimilarity("${first}", "${second}") did not pass the test`);
    }
}