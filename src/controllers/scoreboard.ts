import { Match } from "../models/match";

export class Scoreboard {
    private matches: Map<string, Match> = new Map();

    startMatch(homeTeam: string, awayTeam: string): string {
        const match = new Match(homeTeam, awayTeam);
        this.matches.set(match.id, match);
        return match.id;
    }

    updateScore(homeTeam: string, homeScore: number, awayScore: number){}

    finishMatch(homeTeam: string){}

    getSummary(): Match[] {
        return this.matches.sort((a, b) => {
            const totalScoreHome = a.homeScore + a.awayScore;
            const totalScoreAway = b.homeScore + b.awayScore;
            if(totalScoreHome === totalScoreAway){
                return b.startTime.getTime() - a.startTime.getTime();
            }
            return totalScoreAway - totalScoreHome;
        })
    }

}