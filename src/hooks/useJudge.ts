import { useCallback, useState } from 'react';

type Result = Partial<{
  isDajare: boolean;
  score: number;
}>;

type UseJudgeReturnType = {
  result: Result;
  error: Error | undefined;
  isLoading: boolean;
  isSubmitted: boolean;
  judge: (dajare: string) => void;
};

const fetchIsDajare = async (dajare: string): Promise<boolean> => {
  const url = `https://api.abelab.dev/daas/judge/?dajare=${encodeURIComponent(
    dajare
  )}`;

  const result = await fetch(url);

  const resultJSON = await result.json();

  if (resultJSON.status !== 'OK') {
    throw new Error(resultJSON.message);
  }

  if (typeof resultJSON.is_dajare !== 'boolean') {
    throw new Error(
      [
        'Response Invalid: expect property `is_dajare` is boolean',
        `but actual ${resultJSON.is_dajare}`,
        `in responce of ${url}`,
      ].join(' ')
    );
  }

  return resultJSON.is_dajare;
};

const fetchScore = async (dajare: string): Promise<number> => {
  const url = `https://api.abelab.dev/daas/eval/?dajare=${encodeURIComponent(
    dajare
  )}`;

  const result = await fetch(url);

  const resultJSON = await result.json();

  if (resultJSON.status !== 'OK') {
    throw new Error(resultJSON.message);
  }

  if (typeof resultJSON.score !== 'number') {
    throw new Error(
      [
        'Response Invalid: expect property `score` is number',
        `but actual ${resultJSON.score}`,
        `in responce of ${url}`,
      ].join(' ')
    );
  }

  return resultJSON.score;
};

const useJudge = (): UseJudgeReturnType => {
  const [isDajare, setIsDajare] = useState<Result['isDajare']>();
  const [score, setScore] = useState<Result['score']>();
  const [error, setError] = useState<UseJudgeReturnType['error']>();
  const [isSubmitted, setIsSubmitted] = useState<
    UseJudgeReturnType['isSubmitted']
  >(false);

  const judge: UseJudgeReturnType['judge'] = useCallback(async (dajare) => {
    setIsDajare(undefined);
    setScore(undefined);
    setError(undefined);
    setIsSubmitted(true);

    await Promise.all([
      fetchIsDajare(dajare).then(setIsDajare),
      fetchScore(dajare).then(setScore),
    ]).catch(setError);
  }, []);

  return {
    result: { isDajare, score },
    error,
    isLoading:
      isSubmitted &&
      (isDajare === undefined || (isDajare && score === undefined)),
    isSubmitted,
    judge,
  };
};

export default useJudge;
