export class Match {
    private _homeScore: number = 0;
    private _awayScore: number = 0;
    constructor(
        public homeTeam: string,
        public awayTeam: string,
        public startTime: Date = new Date()
    ){}

}
