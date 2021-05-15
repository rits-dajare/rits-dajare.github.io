export const notDajareMessage = 'ダジャレではありません';
export const positiveStar = '★';
export const negativeStar = '☆';

export const renderStar = (score: number | undefined): string | undefined => {
  if (score === undefined) {
    return;
  }

  return `${positiveStar.repeat(score)}${negativeStar.repeat(5 - score)}`;
};

export const renderShareText = (
  dajare: string,
  isDajare: boolean | undefined,
  integerScore: number | undefined
): string | undefined => {
  if (isDajare === undefined) {
    return undefined;
  }

  if (!isDajare) {
    return `ダジャレ: ${dajare}\n${notDajareMessage}\n`;
  }

  if (integerScore === undefined) {
    return undefined;
  }

  return `ダジャレ: ${dajare}\nスコア：${renderStar(integerScore)}\n`;
};
