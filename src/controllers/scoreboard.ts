import { Match } from "../models/match";

export class Scoreboard {
    private matches: Match[] = [];

    startMatch(homeTeam: string, awayTeam: string): void {
        const match = new Match(homeTeam, awayTeam);
        this.matches.push(match);
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