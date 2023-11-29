describe("Tests for the Blackjack Game", () => {

    describe("Test for calculating the hand score", () => {
        it("should calculate the score of a hand", () => {
            const hand = [
                {suite: 'hearts', displayVal: 'Six', val: 6},
                {suite: 'hearts', displayVal: '7', val: 7}
            ]

            const result = calcPoints(hand);
            
            expect(result.total).toEqual(13);
            expect(result.isSoft).toBeFalsy();
            //expect(result.isSoft).toEqual(false);
        });
    });

    describe("Test for No Aces", () => {
        it("should check that user hand doesn't have an Ace card", () => {
            const hand = [
                {suite: 'hearts', displayVal: 'Jack', val: 10},
                {suite: 'hearts', displayVal: '6', val: 6},
                {suite: 'hearts', displayVal: '3', val: 3}
            ]

            const result = calcPoints(hand);
            expect(result.isSoft).toBeFalsy();
        });
    });

    describe("Test for one Ace case (soft hand)", () => {
        it("should check that user hand is soft with one Ace card", () => {
            const hand = [
                {suite: 'hearts', displayVal: '4', val: 4},
                {suite: 'hearts', displayVal: '6', val: 6},
                {suite: 'hearts', displayVal: 'Ace', val: 11}
            ]

            const result = calcPoints(hand);
            expect(result.isSoft).toBeTruthy();
        });
    });

    describe("Test for one Ace case (NOT soft hand)", () => {
        it("should check that user hand is NOT soft with one Ace card", () => {
            const hand = [
                {suite: 'hearts', displayVal: '9', val: 9},
                {suite: 'hearts', displayVal: '6', val: 6},
                {suite: 'hearts', displayVal: 'Ace', val: 1}
            ]

            const result = calcPoints(hand);
            expect(result.isSoft).toBeFalsy();
        });
    });

    describe("Test for multiple Ace cases (soft hand)", () => {
        it("should check that user hand is soft with multiple Ace cards", () => {
            const hand = [
                {suite: 'hearts', displayVal: '9', val: 9},
                {suite: 'hearts', displayVal: 'Ace', val: 1},
                {suite: 'hearts', displayVal: 'Ace', val: 11}
            ]

            const result = calcPoints(hand);
            expect(result.isSoft).toBeTruthy();
        });
    });

    describe("Test for multiple Ace cases (NOT soft hand)", () => {
        it("should check that user hand is NOT soft with multiple Ace cards", () => {
            const hand = [
                {suite: 'hearts', displayVal: 'Jack', val: 10},
                {suite: 'hearts', displayVal: 'Ace', val: 1},
                {suite: 'hearts', displayVal: 'Ace', val: 1}
            ]

            const result = calcPoints(hand);
            expect(result.isSoft).toBeFalsy();
        });
    });

});
