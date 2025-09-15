import styled from "styled-components";
import { tabletWidth } from "../../App.style";
import { flexbox } from "../../common/theme/flexbox";

export const QuizWrapper = styled.div`
    ${flexbox({direction: 'column'})}
    gap: 14px;
`;

export const InputWrapper = styled.div<{$isSubmitted?: boolean, $isCorrect?: boolean}>`
    // 제출하기 버튼 이후, 사용자의 답 = 정답이면 input 박스 숨기기
    display: ${props => (props.$isCorrect&&props.$isSubmitted) ? 'none' : 'block'};
    p {
        position: absolute;
        left: 20px;
        top: 65px;
        margin-bottom: 5px;
        font-size: 20px;
        font-weight: 500;
        color: #ccc;
    }

    input {
        width: 750px;
        height: 118px;
        padding: 0 120px;
        
        border-radius: 20px;
        border: 2px solid #EEE3D2;
        background-color: #FFF;
        outline: none;

        text-align: center;
        font-size: 24px;
        font-weight: 600;
    }

    input::placeholder {
        color: #CCC;
        font-weight: 400;
    }

    @media screen and (max-width: ${tabletWidth}px) {
        input {
            max-width: 420px;
            width: 100%;
            height: 118px;
            padding: 0 65px;

            font-size: 20px;
        }

        input::placeholder {
            font-weight: 500;
        }

    }
`;

export const AnswerWrapper = styled.div`
    ${flexbox({justify: 'center', align: 'center'})}
    position: relative;
    width: 750px;
    height: 118px;
    padding: 0 20px;

    border-radius: 20px;
    background: #4390FF;
    color: #FFF;

    font-size: 24px;
    font-weight: 600;
    line-height: 32px;

    .correct {
        ${flexbox({align: 'center'})}
        gap: 6px;

        position: absolute;
        left: 20px;
        color: #FFF;
        font-size: 20px;
        font-weight: 500;
    }

    @media screen and (max-width: ${tabletWidth}px) {
        max-width: 420px;
        width: 100%;
        height: 118px;
        padding: 0 65px;

        font-size: 20px;

        .correct {
            left: 20px;
        }
    }
`;