import { Scoreboard } from '../src/controllers/scoreboard'

describe('scoreboard', () => {
    let scoreboard: Scoreboard;

    beforeEach(() => {
        scoreboard = new Scoreboard();
    });

    test('should add a match to the scoreboard and return a valid id', () => {
        const matchId = scoreboard.startMatch('Home', 'Away');
        expect(matchId).toMatch(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[4][0-9a-fA-F]{3}-[89ABab][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/);
        expect(scoreboard.getSummary()).toHaveLength(1);
        expect(scoreboard.getSummary()[0].homeTeam).toBe('Home');
        expect(scoreboard.getSummary()[0].awayTeam).toBe('Away');
    });

    test('should update a match score in the scoreboard using its id', () => {
        const matchId = scoreboard.startMatch('Home', 'Away');
        scoreboard.updateScore(matchId, 1, 2);
        const match = scoreboard.getSummary()[0];
        expect(match.homeScore).toBe(1);
        expect(match.awayScore).toBe(2);
    });

    test('should throw an error if trying to update a non-existent match', () => {
        const fakeMatchId = 'non-existent-id';
        expect(() => {
          scoreboard.updateScore(fakeMatchId, 1, 2);
        }).toThrow('Match not found');
      });
    

    test('should finish and remove a match using its id', () => {
        const matchId = scoreboard.startMatch('Home', 'Away');
        scoreboard.finishMatch(matchId);
        expect(scoreboard.getSummary()).toHaveLength(0);
    });

    test('should sort matches by total score and most recent', () => {
        const matchId1 = scoreboard.startMatch('Team1,', 'Team2');
        const matchId2 = scoreboard.startMatch('Team3', 'Team4');
        const matchId3 = scoreboard.startMatch('Team5', 'Team6');
        
        scoreboard.updateScore(matchId1, 1, 3);
        scoreboard.updateScore(matchId2, 2, 2);
        scoreboard.updateScore(matchId3, 5, 1)

        const summary = scoreboard.getSummary();
        expect(summary[0].id).toBe(matchId1);
        expect(summary[1].id).toBe(matchId2);
        expect(summary[2].id).toBe(matchId3);
    });
});