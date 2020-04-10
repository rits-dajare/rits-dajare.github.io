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
import { SEO, ShareButton } from 'src/components';

type ComponentProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onInput: (event: React.FormEvent<HTMLInputElement>) => void;
  text: string;
  className?: string;
  inputTextRef: React.Ref<HTMLInputElement>;
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
}) => {
  const scoreStar =
    result &&
    `${'★'.repeat(result.score)}${'☆'.repeat(Math.ceil(5 - result.score))}`;

  const shareText = !result?.is_joke
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
      <Heading as="h1">立命館ダジャレサークル ダジャレ判定</Heading>
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
          />
          <Button type="submit" className="submit" disabled={isSubmitting}>
            判定！
          </Button>
        </div>
      </form>
      {(result !== null || isSubmitting) && (
        <Box className="result">
          {isSubmitting && <Spinner className="loading" />}
          {result !== null && !result.is_joke && (
            <Paragraph>ダジャレではありません</Paragraph>
          )}
          {result?.is_joke && (
            <Paragraph>
              あなたのダジャレのスコアは
              {scoreStar}
              です！
            </Paragraph>
          )}
        </Box>
      )}
      {result && shareText && <ShareButton sns="twitter" text={shareText} />}
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
`;

const JudgePage: React.FC = () => {
  const [text, setText] = useState<string>('');
  const { result, isSubmitting, judge, error } = useJudgeApi();
  const inputTextRef = useRef<HTMLInputElement>(null);

  const onSubmit: ComponentProps['onSubmit'] = (event) => {
    event.preventDefault();

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
    />
  );
};

export default JudgePage;
