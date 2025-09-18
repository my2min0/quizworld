import styled, { css } from "styled-components";
import { mobileWidth } from "../../App.style";
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
        max-width: 45rem;
        width: 100%;
    }

    button {
        max-width: 21.5rem;
        width: 48%;
        height: 17rem;
        border: 2px solid #EEE3D2;
        outline: none;
        outline-offset: -1px;
        @media screen and (max-width: ${mobileWidth}px) {
            outline-offset: -2px;
        }
        border-radius: 2.5rem;
        background-color: #FFF;

        &:focus-visible {
            outline: 3px solid #663300 !important;
            outline-offset: 3px;
        }
    }

    @media screen and (max-width: ${mobileWidth}px) {
        fieldset {
            max-width: 42rem;
            width: 100%;
        }
        
        div {
            max-width: 20rem;
            width: 100%;
        }
        button {
            max-width: 12rem;
            width: 48%;
            height: 12.7rem;
            border-radius: 2.5rem;

            img {
                width: 5rem;
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

                    @media screen and (max-width: ${mobileWidth}px) {
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
        position: relative;
        top: -10rem;
        left: 1.5rem;
        width: 3rem;
        color: #FFF;
        font-size: 1.4rem;
        font-weight: 500;
        z-index: 10;
    }

    .white-o {
        position: relative;
        top: 1rem;
    }
`;

export const XButton = styled.button<IOXTypeProps>`
    ${({ colorType, page }) => {
        switch (colorType) {
            case 'selected' :
                return css`
                    border: 2px solid  ${color(page, 'dark')} !important;
                    outline: 2px solid  ${color(page, 'dark')} !important;

                    @media screen and (max-width: ${mobileWidth}px) {
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
        position: relative;
        top: -10rem;
        left: 1.5rem;
        width: 3rem;
        color: #FFF;
        font-size: 1.4rem;
        font-weight: 500;
        z-index: 10;
    }

    .white-x {
        position: relative;
        top: 1rem;
    }

    @media screen and (max-width: ${mobileWidth}px) {
        top: 1.2rem;
        left: 20rem;
    }
`;