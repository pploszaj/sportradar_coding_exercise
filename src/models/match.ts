export class Match {
  private _homeScore: number = 0;
  private _awayScore: number = 0;
  constructor(
    public homeTeam: string,
    public awayTeam: string,
    public startTime: Date = new Date()
  ) {}

  get homeScore(): number {
    return this._homeScore;
  }

  set homeScore(value: number) {
    if (value < 0) {
      throw new Error("homeScore cannot be negative");
    }
    this._homeScore = value;
  }

  get awayScore(): number {
    return this._awayScore;
  }

  set awayScore(value: number) {
    if (value < 0) {
      throw new Error("awayScore cannot be negative");
    }
    this._awayScore = value;
  }
}
