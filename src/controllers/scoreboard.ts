import { Match } from "../models/match";

export class Scoreboard {
  private matches: Map<string, Match> = new Map();

  startMatch(homeTeam: string, awayTeam: string): string {
    const match = new Match(homeTeam, awayTeam, new Date());
    this.matches.set(match.id, match);
    return match.id;
  }

  updateScore(matchId: string, homeScore: number, awayScore: number): void {
    const match = this.matches.get(matchId);
    if (match) {
      match.homeScore = homeScore;
      match.awayScore = awayScore;
    } else {
      throw new Error("Match not found");
    }
  }

  finishMatch(matchId: string): void {
    if (!this.matches.delete(matchId)) {
      throw new Error("Match not found");
    }
  }

  getSummary(): Match[] {
    const sortedMatches = Array.from(this.matches.values()).sort((a, b) => {
      const totalScoreA: number = a.homeScore + a.awayScore;
      const totalScoreB: number = b.homeScore + b.awayScore;
      if (totalScoreA === totalScoreB) {
        return b.startTime.getTime() - a.startTime.getTime();
      }
      return totalScoreB - totalScoreA;
    });

    return sortedMatches;
  }
}
