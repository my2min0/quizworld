import styled, { css } from "styled-components";
import { tabletWidth } from "../../App.style";
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
        gap: 14px;
        position: relative;
    }

    button {
        position: relative;
        width: 750px;
        min-height: 52px;
        padding: 12px 20px;
        border-radius: 20px;
        border: 2px solid #EEE3D2;
        outline: none;
        outline-offset: -1px;
        background-color: #FFF;

        font-size: 20px;
        font-weight: 600;
        line-height: 130%;

        &:focus-visible {
            outline: 3px solid #663300 !important;
            outline-offset: 3px;
        }
    }

    @media screen and (max-width: ${tabletWidth}px) {
        fieldset {
            max-width: 420px;
            width: 100%;
        }
        
        div {
            max-width: 420px;
            width: 100%;
        }
        button {
            max-width: 420px;
            width: 100%;
            height: 50px;
            padding: 0;
            border-radius: 20px;
            border-width: 2.5px;
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

                    @media screen and (max-width: ${tabletWidth}px) {
                        border-width: 3px !important;
                        outline-width: 3px !important;
                    }
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
        gap: 6px;

        position: absolute;
        left: 15px;
        top: 10px;

        z-index: 100;

        color: #FFF;
        font-size: 20px;
        font-weight: 500;
    }

    @media screen and (max-width: ${tabletWidth}px) {
        .correct {
            top: 10px;
        }
    }
`;