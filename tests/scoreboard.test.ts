import { Scoreboard } from '../src/controllers/scoreboard'

describe('scoreboard', () => {
    let scoreboard: Scoreboard;

    beforeEach(() => {
        scoreboard = new Scoreboard();
    });

    test('should add a match to the scoreboard', () => {
        scoreboard.startMatch('Home Team', 'Away team');
        const match = scoreboard.getSummary()[0];
        expect(match.homeScore).toBe(0);
        expect(match.awayScore).toBe(0);
    });

    test('should update a match score in the scoreboard', () => {
        scoreboard.startMatch('Home Team', 'Away team');
        scoreboard.updateScore('Home Team', 1, 2);
        const match = scoreboard.getSummary()[0];
        expect(match.homeScore).toBe(1);
        expect(match.awayScore).toBe(2);
    });

    test('should finish and remove a match currently in progress from scoreboard', () => {
        scoreboard.startMatch('Home Team', 'Away Team');
        scoreboard.finishMatch('Home Team');
        expect(scoreboard.getSummary().toHaveLength(0))
    });

    test('should sort matches by total score and most recent', () => {
        scoreboard.startMatch('Team1,', 'Team2');
        scoreboard.updateScore('Team1', 1, 3);
        
        scoreboard.startMatch('Team3', 'Team4');
        scoreboard.updateScore('Team3', 2, 2);

        scoreboard.startMatch('Team5', 'Team6');
        scoreboard.updateScore('Team5', 5, 1)

        const summary = scoreboard.getSummary();
        expect(summary[0].homeTeam).toBe('Team5');
        expect(summary[1].homeTeam).toBe('Team1');
        expect(summary[2].homeTeam).toBe('Team3');
    });
});