// const { describe } = require("test");
const { FizzBuzz } = require("./main");
describe("FizzBuzz", () => {
    it("should return FizzBuzz for multiples of 3 and 5", () => {
        expect(FizzBuzz(15)).toBe("FizzBuzz");
    });
    it("should return Fizz for multiples of 3", () => {
        expect(FizzBuzz(3)).toBe("Fizz");
    });
    it("should return Buzz for multiples of 5", () => {
        expect(FizzBuzz(5)).toBe("Buzz");
    });
    it("should return the number for non-multiples", () => {
        expect(FizzBuzz(1)).toBe(1);
    });
});



