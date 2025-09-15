import * as Styled from './ShortType.style'
import { normalizeAnswer } from '../../common/utils/normalizeAnswer';
import type React from 'react';

interface IShortTypeProps {
    userAnswer: string | null;
    isSubmitted: boolean;
    onAnswerSelect: (answer: string) => void;
    isButtonClickable: () => boolean;
    isCorrect: boolean;
    answer: string;
    subject: string;
    onEnterSubmit: () => void;
};

function ShortType({
    userAnswer,
    isSubmitted,
    onAnswerSelect,
    isButtonClickable,
    isCorrect,
    answer,
    subject,
    onEnterSubmit,
}: IShortTypeProps) {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isButtonClickable()) return; //제출 후 입력 불가
        const normalized = normalizeAnswer(subject, e.target.value);
        onAnswerSelect(normalized); // 부모에게 바로 전달
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && isButtonClickable()) {
            e.preventDefault();
            onEnterSubmit(); // enter 입력 시 부모에 제출 요청
        }
    }

    return (
        <Styled.QuizWrapper>
            <Styled.InputWrapper 
                $isSubmitted={isSubmitted}
                $isCorrect={isCorrect}
            >
                {isSubmitted 
                    ? <p>제출한 답</p>
                    : <p>정답 입력</p>
                }
                <input
                    type="text"
                    value={userAnswer || ''}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder='주관식 정답을 입력해주세요'
                    disabled={isSubmitted}
                />
            </Styled.InputWrapper>

            {isSubmitted && (
                <Styled.AnswerWrapper>
                    <div>{normalizeAnswer(subject, answer)}</div>
                    <div className='correct'>
                        <p>정답</p>
                    </div>
                </Styled.AnswerWrapper>
            )}
        </Styled.QuizWrapper>
    )
}

export default ShortType;