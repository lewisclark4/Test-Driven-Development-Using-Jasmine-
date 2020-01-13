describe("FizzBuzzFunction", function() {
    
    beforeEach(function() {
        myFBN = new FizzBuzzNumber();
    });
    
    describe("FizzBuzzGame", function() {
        it("should exist", function() {
            expect(myFBN).toBeDefined();
        });
        
        it("should return Fizz when called as fizzBuzz(3)", function() {
            var result = FizzBuzzNumber(3)
            expect(result).toBe("Fizz");
        });
                
        it("should return Buzz when called as fizzBuzz(5)", function() {
            var result = FizzBuzzNumber(5)
            expect(result).toBe("Buzz");
        });
        
        it("should return FizzBuzz when called as fizzBuzz(15)", function() {
            var result = FizzBuzzNumber(15)
            expect(result).toBe("FizzBuzz");
        });

        it("should return 1 when called as fizzBuzz(1)", function() {
            var result = FizzBuzzNumber(1)
            expect(result).toBe(1);
        });

        it("should return 'You must enter a number' when called as fizzBuzz(abc)", function() {
            if(typeof(result) == "number")
            expect(result).toBe("You must enter a number");
        });
    });
});

