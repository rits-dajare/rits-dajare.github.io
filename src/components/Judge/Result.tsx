import { FC, VFC } from 'react';

import { notDajareMessage, renderStar } from '../../lib/judge/text';

type Props = {
  integerScore: number | undefined;
  isDajare: boolean | undefined;
  forceShowScore: () => void;
  isForcedShowScore: boolean;
};

const Card: FC = ({ children }) => (
  <section className="bg-white dark:bg-black p-5 border dark:border-gray-900 rounded text-center">
    {children}
  </section>
);

export const Result: VFC<Props> = ({
  integerScore,
  isDajare,
  forceShowScore,
  isForcedShowScore,
}) => {
  const loading = (
    <Card>
      <p>読み込み中</p>
    </Card>
  );

  const heading = <h1 className="font-bold mb-2">判定結果</h1>;

  if (isDajare === undefined) {
    return loading;
  }

  if (!isDajare || isForcedShowScore) {
    <Card>
      {heading}

      <div role="img" aria-label={`星 5 つ中 ${integerScore} つ`}>
        <span aria-hidden="true">{renderStar}</span>
      </div>

      <p className="mb-5">{notDajareMessage}</p>

      <button
        type="button"
        className="px-4 py-2 bg-ritsumei text-white rounded-sm"
        onClick={forceShowScore}
      >
        ダジャレとして判定する
      </button>
    </Card>;
  }

  if (integerScore === undefined) {
    return loading;
  }

  return (
    <Card>
      <h1 className="font-bold mb-2">判定結果</h1>
      <div role="img" aria-label={`星 5 つ中 ${integerScore} つ`}>
        <span aria-hidden="true">{renderStar(integerScore)}</span>
      </div>
    </Card>
  );
};
