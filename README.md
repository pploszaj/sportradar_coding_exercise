# Live Football World Cup Score Board Library

## Overview
This library provides an in-memory management system for a live football match scoreboard. It allows users to start new matches, update scores, finish matches, and retrieve summaries of matches based on the scores and start times.

## Installation
1. Clone the repository:
```bash
https://github.com/pploszaj/sportradar_coding_exercise.git
```
2. Navigate to the project directory:
```bash
cd sportradar_coding_exercise
```
3. Install the dependencies:
```bash
$ npm install
```

## Running the app

```bash
npm run start
```

## Test

```bash
$ npm run test
```

## Usage

### Importing and Initializing

Import the `Scoreboard` class and use its methods to manage the live World Cup scoreboard.

```typescript
import { Scoreboard } from "./src/controllers/scoreboard";

// Initialize the scoreboard
const scoreboard = new Scoreboard();
```

## Methods

### startMatch

**Description**: Start a new match with an initial score of 0-0.

**Parameters**:
- `homeTeam`: `string` - The name of the home team.
- `awayTeam`: `string` - The name of the away team.

**Returns**: `string` - The unique match ID.

```typescript
const matchId1 = scoreboard.startMatch('Mexico', 'Canada');
const matchId2 = scoreboard.startMatch('Spain', 'Brazil');
```

### updateScore

**Description**: Update the score of an ongoing match.

**Parameters**:
- `matchId`: `string` - The unique match ID.
- `homeScore`: `number` - The score of the home team.
- `awayScore`: `number` - The score of the away team.

**Returns**: `void`

**Throws**:
- `Error` - If the match with the given `matchId` is not found.

```typescript
scoreboard.updateScore(matchId1, 0, 5); // Mexico 0 - Canada 5
scoreboard.updateScore(matchId2, 10, 2); // Spain 10 - Brazil 2
```

### finishMatch

**Description**: Finish and remove an ongoing match.

**Parameters**:
- `matchId`: `string` - The unique match ID.

**Returns**: `void`

**Throws**:
- `Error` - If the match with the given `matchId` is not found.

```typescript
scoreboard.finishMatch(matchId1); // Remove the Mexico vs. Canada match
```

### getSummary

**Description**: Get a summary of all ongoing matches ordered by total score.
- Matches with the same total score are ordered by the most recent start time.

**Returns**: `Match[]` - a list of matches currently in progress

```typescript
const summary = scoreboard.getSummary();
summary.forEach(match => {
  console.log(`${match.homeTeam} ${match.homeScore} - ${match.awayTeam} ${match.awayScore}`);
});

```

## Assumptions & Notes

### Assumptions

1. **Match Total Score Calculation**:
   - A match's total score is calculated as the sum of the home and away scores.

2. **Sorting Matches**:
   - If two matches have the same total score, the more recent match (by start time) will appear first in the summary.

### Notes

1. **Unique Match IDs**:
   - Match IDs are generated using UUIDs for uniqueness.

2. **Test Setup**:
   - Tests use `setTimeout` to ensure matches have distinct start times.
