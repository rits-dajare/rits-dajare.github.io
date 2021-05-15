import { TwitterShareButton } from 'react-share';
import { VFC } from 'react';

import { renderShareText } from '../../lib/judge/text';

type Props = {
  integerScore: number | undefined;
  isDajare: boolean | undefined;
  dajare: string;
};

export const Share: VFC<Props> = ({ dajare, isDajare, integerScore }) => {
  const shareText = renderShareText(dajare, isDajare, integerScore);

  if (shareText === undefined) {
    return null;
  }

  return (
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
  );
};
