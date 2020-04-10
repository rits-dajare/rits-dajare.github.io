import { useState, useEffect } from 'react';
import {
  IntegratedResult,
  JudgeResult,
  EvaluateResult,
  ReadingResult,
} from 'src/types/api';

export type JudgeText = string;

export type ReturnValue = {
  isSubmitting: boolean;
  judge: (text: JudgeText) => void;
  result: IntegratedResult | null;
  error: string | Error | null;
};

const baseURL =
  'https://script.google.com/macros/s/AKfycbz6gJafNJO-Q8R5fqOP5XiklkVqeJAaePpDTcHIowR4JSxkRqr_/exec?url=http://abelab.dev:8080';

export type Results = {
  judge: JudgeResult;
  evaluate: EvaluateResult;
  reading: ReadingResult;
};

const fetchApi = async <T extends keyof Results>(
  type: T,
  text: string
): Promise<Results[T]> => {
  const url = `${baseURL}/joke/${type}?joke=${encodeURIComponent(text)}`;

  const result = await fetch(url);
  return result.json();
};

export const validate = (text: string): boolean =>
  text.replace(/\s/g, '').length !== 0;

const useJudgeApi = (): ReturnValue => {
  const [isSubmitting, setIsSubmitting] = useState<ReturnValue['isSubmitting']>(
    false
  );
  const [result, setResult] = useState<ReturnValue['result']>(null);
  const [text, setText] = useState<JudgeText | null>(null);
  const [error, setError] = useState<ReturnValue['error']>(null);

  useEffect((): (() => void) => {
    if (text === null || text === '') {
      setIsSubmitting(false);
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return (): void => {};
    }

    setIsSubmitting(true);
    setResult(null);

    Promise.all([
      fetchApi('judge', text),
      fetchApi('evaluate', text),
      fetchApi('reading', text),
    ])
      .then((results) => {
        const integratedResult = results.reduce<Partial<IntegratedResult>>(
          (previous, current) => ({ ...previous, ...current }),
          {}
        );
        setIsSubmitting(false);
        setResult(integratedResult as IntegratedResult);
      })
      .catch((e) => {
        setError(e);
      });

    return (): void => {
      setIsSubmitting(false);
    };
  }, [text]);

  return { isSubmitting, judge: setText, result, error };
};

export default useJudgeApi;
