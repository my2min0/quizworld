import styled, { css } from "styled-components";
import { tabletWidth } from "../../App.style";
import { flexbox } from "../../common/theme/flexbox";
import { color } from "../../common/theme/colors";
import type { PageType, ColorType } from "../../common/theme/types";

interface IOXTypeProps {
    colorType: ColorType;
    page: PageType;
}

export const QuizWrapper = styled.div`
    fieldset {
        ${flexbox({justify: 'space-between', align: 'center'})}
        position: relative;
    }

    button {
        width: 355px;
        height: 250px;
        border: 2px solid #EEE3D2;
        outline: none;
        outline-offset: -1px;
        @media screen and (max-width: ${tabletWidth}px) {
            outline-offset: -2px;
        }
        border-radius: 40px;
        background-color: #FFF;

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
            max-width: 200px;
            width: 100%;
        }
        button {
            max-width: 200px;
            width: 95%;
            height: 250px;
            border-radius: 25px;

            svg {
                width: 85px;
                height: 85px;
            }
        }
    }
`;

export const OButton = styled.button<IOXTypeProps>`
    ${({ colorType, page }) => {
        switch (colorType) {
            case 'selected' :
                return css`
                    border: 2px solid  ${color(page, 'dark')} !important;
                    outline: 2px solid  ${color(page, 'dark')} !important;

                    @media screen and (max-width: ${tabletWidth}px) {
                        border-width: 3px !important;
                        outline-width: 3px !important;
                    }
                `;
            case 'correct' : 
                return css`
                    background-color: #4390FF !important;
                    border: 2px solid #1490F5 !important;
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
        top: 20px;
        left: 20px;

        color: #FFF;
        font-size: 20px;
        font-weight: 500;

        circle, path {
            stroke: #1490F5;
        }
    }
`;

export const XButton = styled.button<IOXTypeProps>`
    ${({ colorType, page }) => {
        switch (colorType) {
            case 'selected' :
                return css`
                    border: 2px solid  ${color(page, 'dark')} !important;
                    outline: 2px solid  ${color(page, 'dark')} !important;

                    @media screen and (max-width: ${tabletWidth}px) {
                        border-width: 3px !important;
                        outline-width: 3px !important;
                    }
                `;
            case 'correct' : 
                return css`
                    background-color: #FF4C4C !important;
                    border: 2px solid #FF1D1D !important;
                    svg > path {
                        stroke: #FFF;
                    }
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
        top: 24px;
        left: 420px;

        color: #FFF;
        font-size: 20px;
        font-weight: 500;
        
        circle, path {
            stroke: #FF1D1D;
        }
    }

    @media screen and (max-width: ${tabletWidth}px) {
        top: 12px;
        left: 200px;
    }
`;