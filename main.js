function FizzBuzz(i) {

    if (i % 3 === 0 && i % 5 === 0) {
        return "FizzBuzz";
    }
    else if (i % 3 === 0) {
        return "Fizz";
    }
    else if (i % 5 === 0) {
        return "Buzz";
    }
    else {
        return i;
    }
}

module.exports = { FizzBuzz };


