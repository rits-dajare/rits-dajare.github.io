import { FC, FormEvent, useCallback, useState } from 'react';
import { TwitterShareButton } from 'react-share';

import { Heading, Layout, SEO } from '../components';
import { useJudge } from '../Hooks';

const JudgePage: FC = () => {
  const { result, error, judge, isLoading, isSubmitted } = useJudge();
  const [dajare, setDajare] = useState<string>('');
  const [forceShowScore, setForceShowScore] = useState<boolean>(false);

  const intScore = result.score && Math.ceil(result.score);

  const judgeText =
    intScore !== undefined && result.isDajare
      ? `スコア: ${'★'.repeat(intScore)}${'☆'.repeat(5 - intScore)}`
      : '\nダジャレではありません';

  const shareText = [`ダジャレ: ${dajare}`, judgeText, ''].join('\n');

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setForceShowScore(false);
      judge(dajare);
    },
    [dajare, judge]
  );

  const handleChangeDajare = useCallback(
    (event: FormEvent<HTMLInputElement>) =>
      setDajare(event.currentTarget.value),
    []
  );

  return (
    <Layout>
      <SEO
        title="ダジャレ判定"
        description="ダジャレスコアを判定します"
        path="/judge"
      />
      <Heading>ダジャレ判定</Heading>
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="dajare"
          id="input-dajare"
          className="flex-grow px-4 py-2 rounded-sm"
          onChange={handleChangeDajare}
          value={dajare}
          placeholder="布団がふっとんだ"
          disabled={isLoading}
          required
          minLength={4}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
        />
        <button
          type="submit"
          className="px-4 py-2 bg-ritsumei text-white rounded-sm"
        >
          判定
        </button>
      </form>

      {isSubmitted && (
        <section className="bg-white m-6 p-5 border rounded text-center">
          {isLoading && '読み込み中'}
          {!isLoading && error && (
            <>
              <h1 className="font-bold mb-2">エラーが発生しました</h1>
              <p>
                メッセージ: <pre className="font-mono">{error.message}</pre>
              </p>
            </>
          )}
          {!isLoading && !error && (
            <>
              <h1 className="font-bold mb-2">判定結果</h1>
              {result.isDajare !== undefined &&
                !result.isDajare &&
                !forceShowScore && (
                  <>
                    <p className="mb-5">ダジャレではありません。</p>

                    <button
                      type="button"
                      className="px-4 py-2 bg-ritsumei text-white rounded-sm"
                      onClick={() => setForceShowScore(true)}
                    >
                      ダジャレとして判定する
                    </button>
                  </>
                )}
              {(result.isDajare || forceShowScore) && intScore !== undefined && (
                <div role="img" aria-label={`星 5 つ中 ${intScore} つ`}>
                  <span aria-hidden="true">
                    {'★'.repeat(intScore)}
                    {'☆'.repeat(5 - intScore)}
                  </span>
                </div>
              )}
            </>
          )}
        </section>
      )}
      {isSubmitted && !isLoading && !error && shareText && (
        <div className="text-center">
          <TwitterShareButton
            title={shareText}
            url="https://rits-dajare.github.io/judge"
            via="rits_dajare"
            hashtags={['ダジャレ判定']}
            className="px-4 py-2 bg-twitter text-white rounded-sm"
            resetButtonStyle={false}
          >
            結果をツイート
          </TwitterShareButton>
        </div>
      )}
    </Layout>
  );
};

export default JudgePage;
