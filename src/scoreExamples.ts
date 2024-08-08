export interface ScoreExample {
    p1: number;
    p2: number;
    result: string;
}

export interface TrackedScoreExample extends ScoreExample {
    id: number;
    isRevealed: boolean;
}

function prepareExample(ex: ScoreExample, index: number): TrackedScoreExample {
    return { id: index + 1, ...ex, isRevealed: false };
}
export function prepareExamples(ex: ScoreExample[]): TrackedScoreExample[] {
    return ex.map(prepareExample);
}

export const examples: ScoreExample[] = [
    { p1: 0, p2: 0, result: "Love-All" },
    { p1: 1, p2: 1, result: "Fifteen-All" },
    { p1: 2, p2: 2, result: "Thirty-All" },
    { p1: 3, p2: 3, result: "Deuce" },
    { p1: 4, p2: 4, result: "Deuce" },
    { p1: 16, p2: 16, result: "Deuce" },
    { p1: 1, p2: 0, result: "Fifteen-Love" },
    { p1: 0, p2: 1, result: "Love-Fifteen" },
    { p1: 2, p2: 0, result: "Thirty-Love" },
    { p1: 0, p2: 2, result: "Love-Thirty" },
    { p1: 3, p2: 0, result: "Forty-Love" },
    { p1: 0, p2: 3, result: "Love-Forty" },
    { p1: 4, p2: 0, result: "Win for player1" },
    { p1: 0, p2: 4, result: "Win for player2" },
    { p1: 2, p2: 1, result: "Thirty-Fifteen" },
    { p1: 1, p2: 2, result: "Fifteen-Thirty" },
    { p1: 3, p2: 1, result: "Forty-Fifteen" },
    { p1: 1, p2: 3, result: "Fifteen-Forty" },
    { p1: 4, p2: 1, result: "Win for player1" },
    { p1: 1, p2: 4, result: "Win for player2" },
    { p1: 3, p2: 2, result: "Forty-Thirty" },
    { p1: 2, p2: 3, result: "Thirty-Forty" },
    { p1: 4, p2: 2, result: "Win for player1" },
    { p1: 2, p2: 4, result: "Win for player2" },
    { p1: 4, p2: 3, result: "Advantage player1" },
    { p1: 3, p2: 4, result: "Advantage player2" },
    { p1: 5, p2: 4, result: "Advantage player1" },
    { p1: 4, p2: 5, result: "Advantage player2" },
    { p1: 15, p2: 14, result: "Advantage player1" },
    { p1: 14, p2: 15, result: "Advantage player2" },
    { p1: 6, p2: 4, result: "Win for player1" },
    { p1: 4, p2: 6, result: "Win for player2" },
    { p1: 16, p2: 14, result: "Win for player1" },
    { p1: 14, p2: 16, result: "Win for player2" },
    { p1: 5, p2: 3, result: "Win for player1" },
];
