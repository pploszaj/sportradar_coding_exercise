import { Match } from '../src/models/match';

describe('Match', () => {
    let match: Match;

    beforeEach(() => {
        match = new Match('Home Team', 'Away Team');
    });

    test('should initialize with zero scores', () => {
        expect(match.homeScore).toBe(0);
        expect(match.awayScore).toBe(0);
    });

    test('should update the score', () => {
        match.homeScore = 3;
        match.awayScore = 2;
        expect(match.homeScore).toBe(3);
        expect(match.awayScore).toBe(2);
    })

    test('should not allow negative values for homeScore', () => {
        expect(() => {
            match.homeScore = -1;
        }).toThrow("homeScore cannot be negative");
    });

    test('should not allow negative values for awayScore', () => {
        expect(() => {
            match.awayScore = -1;
        }).toThrow("awayScore cannot be negative");
    });

})