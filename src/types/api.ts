export type JudgeResult = {
  is_joke: boolean;
};

export type EvaluateResult = {
  score: number;
};

export type ReadingResult = {
  reading: string;
};

export type IntegratedResult = JudgeResult & EvaluateResult & ReadingResult;
