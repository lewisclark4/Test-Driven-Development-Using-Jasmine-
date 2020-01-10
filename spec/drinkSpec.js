describe("Drink", function() {

    beforeEach(function() {
    drink = new whatCanIDrink;
    });

    describe("set age", function() {

        it("should return Drink Toddy!", function() {
        var myDrink = whatCanIDrink(10)
        expect(myDrink).toBe("Drink Toddy")
        });

        it("should return Drink Coke!", function() {
        var myDrink = whatCanIDrink(15)
        expect(myDrink).toBe("Drink Coke")
        });

        it("should return Drink Beer!", function() {
        var myDrink = whatCanIDrink(20)
        expect(myDrink).toBe("Drink Beer")
        });

        it("should return Drink Whisky!", function() {
        var myDrink = whatCanIDrink(25)
        expect(myDrink).toBe("Drink Whisky")
        });

        it("should return Sorry. I can’t tell what drink because that age is incorrect!", function() {
        var myDrink = whatCanIDrink(131)
        expect(myDrink).toBe("Sorry. I can’t tell what drink because that age is incorrect!")
        });

        it("should return Sorry. I can’t tell what drink because that age is incorrect!", function() {
        var myDrink = whatCanIDrink("abc")
        expect(myDrink).toBe("Sorry. I can’t tell what drink because that age is incorrect!")
        });
        
    });
});