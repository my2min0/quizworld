import styled, { css } from "styled-components";
import { mobileWidth } from "../../App.style";
import { flexbox } from "../../common/theme/flexbox";
import { color } from "../../common/theme/colors";
import type { PageType, ColorType } from "../../common/theme/types";

interface IOptWrapperProps {
    colorType: ColorType;
    page: PageType;
}

export const QuizWrapper = styled.div`
    fieldset {
        ${flexbox({direction: 'column', justify: 'center', align: 'center'})}
        gap: .7rem;
        position: relative;
    }

    button {
        position: relative;
        max-width: 45rem;
        width: 100%;
        height: 3.7rem;
        padding: .7rem 2rem;
        border-radius: 1.5rem;
        border: 2px solid #EEE3D2;
        outline: none;
        outline-offset: -1px;
        background-color: #FFF;
        color: #000;

        font-size: 1.4rem;
        font-weight: 600;
        line-height: 130%;

        &:focus-visible {
            outline: 3px solid #663300 !important;
            outline-offset: 3px;
        }
    }

    @media screen and (max-width: ${mobileWidth}px) {
        fieldset {
            max-width: 42rem;
            width: 100%;
            gap: .4rem;
        }
        
        div {
            max-width: 42rem;
            width: 100%;
        }
        button {
            max-width: 42rem;
            width: 100%;
            height: 2.85rem;
            padding: 0 3rem;
            border-radius: 2rem;
            border-width: 2.5px;

            font-size: 1.2rem;
        }
    }
`;

export const OptWrapper = styled.button<IOptWrapperProps>`
    ${({ colorType, page }) => {
        switch (colorType) {
            case 'selected' :
                return css`
                    border: 2px solid  ${color(page, 'dark')} !important;
                    outline: 2px solid  ${color(page, 'dark')} !important;
                    color: #000;
                `;
            case 'correct' : 
                return css`
                    background-color: #4390FF !important;
                    border: 2px solid #1490F5 !important;
                    color: #FFF !important;
                `;
            case 'wrong' :
                return css`
                    opacity: 0.3;
                `
            default :
                return css``;
        }
    }}

    .correct {
        ${flexbox({align: 'center'})}
        gap: .6rem;

        position: absolute;
        left: 1rem;
        top: .8rem;

        z-index: 100;

        color: #FFF;
        font-size: 1.4rem;
        font-weight: 500;
    }

    @media screen and (max-width: ${mobileWidth}px) {
        .correct {
            top: .5rem;
            left: .6rem;
            font-size: 1rem;
        }
    }
`;