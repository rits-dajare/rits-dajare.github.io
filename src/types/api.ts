export type JudgeResult = {
  is_dajare: boolean;
};

export type EvalResult = {
  score: number;
};

export type ReadingResult = {
  reading: string;
};

export type IntegratedResult = JudgeResult & EvalResult & ReadingResult;
