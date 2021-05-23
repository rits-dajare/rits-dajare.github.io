import { VFC, FormEvent, useCallback, useState } from 'react';

import { Heading } from '../components/Heading';
import { Result } from '../components/Judge/Result';
import { Share } from '../components/Judge/Share';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { useDajare } from '../hooks/useDajare';

const JudgePage: VFC = () => {
  const [dajare, setDajare] = useState<string>('');

  const [isForcedShowScore, setIsForcedShowScore] = useState<boolean>(false);
  const forceShowScore = useCallback(() => setIsForcedShowScore(true), []);

  const submitted = dajare !== '';

  const judgeInfo = useDajare('/judge', { dajare }, { enabled: submitted });
  const evalInfo = useDajare('/eval', { dajare }, { enabled: submitted });

  const integerScore = evalInfo.data?.score && Math.round(evalInfo.data?.score);

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsForcedShowScore(false);
    setDajare(event.currentTarget.dajare.value);
  }, []);

  return (
    <Layout>
      <SEO
        title="ダジャレ判定"
        description="ダジャレスコアを判定します"
        path="/judge"
      />
      <Heading headingLevel={1}>ダジャレ判定</Heading>

      <div className="flex flex-col gap-6">
        <form className="flex gap-4" onSubmit={handleSubmit}>
          <label htmlFor="input-dajare" className="sr-only">
            ダジャレ入力欄
          </label>
          <input
            type="text"
            name="dajare"
            id="input-dajare"
            className="flex-grow px-4 py-2 rounded-sm bg-white dark:bg-black"
            placeholder="布団がふっとんだ"
            disabled={judgeInfo.isLoading || evalInfo.isLoading}
            required
            minLength={4}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-ritsumei text-white rounded-sm"
          >
            判定
          </button>
        </form>

        {(judgeInfo.error || evalInfo.error) && (
          <section className="bg-white dark:bg-black p-5 border dark:border-gray-900 text-red-800 rounded">
            <h2 className="text-center font-bold">エラーが発生しました</h2>
            {judgeInfo.error && <pre>{`${judgeInfo.error}`}</pre>}
            {evalInfo.error && <pre>{`${evalInfo.error}`}</pre>}
          </section>
        )}

        {submitted && (
          <Result
            integerScore={integerScore}
            isDajare={judgeInfo.data?.is_dajare}
            forceShowScore={forceShowScore}
            isForcedShowScore={isForcedShowScore}
          />
        )}
        <Share
          integerScore={integerScore}
          isDajare={judgeInfo.data?.is_dajare}
          dajare={dajare}
        />
      </div>
    </Layout>
  );
};

export default JudgePage;
