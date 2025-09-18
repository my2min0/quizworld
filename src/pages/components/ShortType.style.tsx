import styled from "styled-components";
import { mobileWidth } from "../../App.style";
import { flexbox } from "../../common/theme/flexbox";

export const QuizWrapper = styled.div`
    ${flexbox({direction: 'column'})}
    gap: .9rem;

    @media screen and (max-width: ${mobileWidth}px) {
        gap: .4rem;
    }
`;

export const InputWrapper = styled.div<{$isSubmitted?: boolean, $isCorrect?: boolean}>`
    // 제출하기 버튼 이후, 사용자의 답 = 정답이면 input 박스 숨기기
    display: ${props => (props.$isCorrect&&props.$isSubmitted) ? 'none' : 'block'};
    max-width: 45rem;
    width: 100%;
    p {
        position: absolute;
        left: 1rem;
        top: 1rem;
        font-size: 1.2rem;
        font-weight: 400;
        color: #ccc;
    }

    input {
        max-width: 45rem;
        width: 100%;
        height: 8rem;
        padding: 0 7rem;
        padding: 0 clamp(3rem, 10vw, 7rem);
        
        border-radius: 2rem;
        border: 2px solid #EEE3D2;
        background-color: #FFF;
        outline: none;

        text-align: center;
        font-size: 1.4rem;
        font-weight: 600;
    }

    input::placeholder {
        color: #CCC;
        font-weight: 500;
    }

    @media screen and (max-width: ${mobileWidth}px) {
        p {
            font-size: 1rem;
            top: .6rem;
        }
        input {
            max-width: 42rem;
            width: 100%;
            height: 6.1rem;
            padding: 0 2rem;
            border-radius: 1.5rem;
            font-size: 1.4rem;
        }

        input::placeholder {
            font-weight: 500;
        }

    }
`;

export const AnswerWrapper = styled.div`
    ${flexbox({justify: 'center', align: 'center'})}
    position: relative;
    max-width: 45rem;
    width: 100%;
    height: 8rem;
    padding: 0 7rem;

    border-radius: 2rem;
    background: #4390FF;
    color: #FFF;

    font-size: 1.4rem;
    font-weight: 600;
    line-height: 3.2rem;

    .correct {
        ${flexbox({align: 'center'})}
        gap: .6rem;

        position: absolute;
        left: 1.5rem;
        color: #FFF;
        font-size: 1.4rem;
        font-weight: 500;
    }

    @media screen and (max-width: ${mobileWidth}px) {
        max-width: 42rem;
        width: 100%;
        height: 6.1rem;
        padding: 0 6.5rem;
        border-radius: 1.5rem;

        font-size: 1.4rem;

        .correct {
            left: 1rem;
            font-size: 1.2rem;
        }
    }
`;