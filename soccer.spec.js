describe("Tests for Soccer Game", () => {

    describe("Tests for getTotalPoints function", () => {

        it("should return 10 for wwdlw string input", () => {
            const result = getTotalPoints('wwdlw');
            expect(result).toEqual(10);
        });
    });

    describe("Tests for orderTeams function", () => {

        it("should return a list of team names and result strings to verify", () => {
            const result = orderTeams(
                { name: 'Sounders', results: 'wwdl' },
                { name: 'Galaxy', results: 'wwldd' }
              );

            expect(result).toContain('Sounders: 7');
            expect(result).toContain('Galaxy: 8');
        });
    });

});