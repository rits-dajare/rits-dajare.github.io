import React, { useState, useRef } from 'react';
import {
  Heading,
  Label,
  Input,
  Button,
  Box,
  css,
  Spinner,
  Message,
} from 'theme-ui';
import Paragraph from 'src/components/paragraph';
import useJudgeApi, { ReturnValue, validate } from 'src/hooks/use-judge-api';
import styled from '@emotion/styled';
import { SEO, ShareButton, Header } from 'src/components';

type ComponentProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onInput: (event: React.FormEvent<HTMLInputElement>) => void;
  text: string;
  className?: string;
  inputTextRef: React.Ref<HTMLInputElement>;
  showScore: boolean;
  forceShowScore: () => unknown;
} & Omit<ReturnValue, 'judge'>;

const Component: React.FC<ComponentProps> = ({
  onSubmit,
  text,
  onInput,
  result,
  error,
  isSubmitting,
  className,
  inputTextRef,
  showScore,
  forceShowScore,
}) => {
  const scoreInt = Math.ceil(result?.score ?? 0);
  const scoreStar =
    result && `${'★'.repeat(scoreInt)}${'☆'.repeat(5 - scoreInt)}`;

  const shareText = !showScore
    ? `ダジャレ：${text}\nダジャレと判定できませんでした。\n\n#ダジャレ判定 by @rits_dajare\n\nhttps://rits-dajare.github.io/judge`
    : scoreStar &&
      `ダジャレ：${text}\nスコア：${scoreStar}\n\n#ダジャレ判定 by @rits_dajare\n\nhttps://rits-dajare.github.io/judge`;

  return (
    <Box as="main" id="main" className={className}>
      <SEO
        title="ダジャレ判定"
        description="あなたのダジャレを判定します！"
        pathname="/judge"
      />
      <Header />
      <Heading as="h1">ダジャレ判定</Heading>
      <Paragraph>あなたのダジャレを判定します！</Paragraph>
      <Paragraph>ダジャレを入力し、「判定！」ボタンを押してください</Paragraph>
      <form onSubmit={onSubmit}>
        <Label htmlFor="dajare" />
        <div className="input-group">
          <Input
            type="text"
            name="dajare"
            value={text}
            onChange={onInput}
            placeholder="布団がふっとんだ"
            disabled={isSubmitting}
            required
            className="input-text"
            minLength={4}
            ref={inputTextRef}
            autoFocus
          />
          <Button type="submit" className="submit" disabled={isSubmitting}>
            判定！
          </Button>
        </div>
      </form>
      {(result !== null || isSubmitting) && (
        <Box className="result">
          {isSubmitting && <Spinner className="loading" />}
          {result !== null && !showScore && (
            <Paragraph>ダジャレではありません</Paragraph>
          )}
          {showScore && (
            <Paragraph>
              あなたのダジャレのスコアは
              {scoreStar}
              です！
            </Paragraph>
          )}
        </Box>
      )}
      <div className="buttons">
        {result && shareText && <ShareButton sns="twitter" text={shareText} />}
        {result !== null && !showScore && (
          <Button type="button" onClick={forceShowScore}>
            ダジャレとして判定する
          </Button>
        )}
      </div>
      {error && (
        <Message>
          {/* eslint-disable no-nested-ternary */}
          {typeof error === 'string'
            ? error
            : typeof error.message === 'string'
            ? error.message
            : 'エラーが発生しました'}
          {/* eslint-enable */}
        </Message>
      )}
    </Box>
  );
};

const StyledComponent = styled(Component)`
  .input-group {
    display: flex;
  }

  .input-text {
    flex: 1 1;
  }

  .input-text,
  .submit {
    ${css({ margin: 3 })}
  }

  .result {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 30em;
    height: 15em;
    margin: 1em auto;
    border-radius: 1em;
    border: solid 1px;
    ${css({ borderColor: 'muted' })}
  }

  .loading {
    width: 4em;
    height: 4em;
    margin: 0 auto;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      margin: 1em;
    }
  }
`;

const JudgePage: React.FC = () => {
  const [text, setText] = useState<string>('');
  const { result, isSubmitting, judge, error } = useJudgeApi();
  const inputTextRef = useRef<HTMLInputElement>(null);
  const [forcedShowScore, setForcedShowScore] = useState<boolean>(false);

  const onSubmit: ComponentProps['onSubmit'] = (event) => {
    event.preventDefault();

    setForcedShowScore(false);

    if (validate(text)) judge(text);
  };

  const onInput: ComponentProps['onInput'] = (event) => {
    const { value } = event.currentTarget;

    setText(value);

    /* eslint-disable no-unused-expressions */
    if (validate(value)) {
      inputTextRef.current?.setCustomValidity('');
    } else {
      inputTextRef.current?.setCustomValidity(
        '空白以外の文字を入力してください'
      );
    }
    /* eslint-enable */
  };

  return (
    <StyledComponent
      text={text}
      result={result}
      error={error}
      isSubmitting={isSubmitting}
      onInput={onInput}
      onSubmit={onSubmit}
      inputTextRef={inputTextRef}
      showScore={result?.is_dajare || forcedShowScore}
      forceShowScore={(): void => setForcedShowScore(true)}
    />
  );
};

export default JudgePage;
