import styled from "styled-components";
import { tabletWidth } from "../App.style";
import { flexbox } from "../common/theme/flexbox";
import { color } from "../common/theme/colors";
import type { PageType } from "../common/theme/types";

interface ISubjectProps {
    page: PageType;
}

export const GameMainWrapper = styled.div<ISubjectProps>`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: ${({ page }) => color(page, 'lightest')};

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }

    .subject-logo {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 90px;
    }

    .radio {
        ${flexbox({direction: 'column', justify: 'center', align: 'flex-start'})}
        gap: 28px;
        width: 428px;
        height: 179px;
        padding: 24px;
        border-radius: 20px;
        border: 2px solid ${({ page }) => color(page, 'light')};
        background-color: #FFF;

        position: absolute;
        top: 369px;
        left: 50%;
        transform: translateX(-50%);

        fieldset {
            ${flexbox({align: 'center'})}
            gap: 20px;
        }

        input[type="radio"] {
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            background: none;
            width: 20px;
            height: 20px;
            border: 2px solid #CCCCCC;
            border-radius: 50%;
            margin-right: 8px;

            &:focus-visible {
                outline: 3px solid #663300;
            }
        }

        [type="radio"]:checked {
            background: ${({ page }) => color(page, 'primary')};
            border: 2px solid ${({ page }) => color(page, 'primary')};
            box-shadow: inset 0 0 0 3px white;
        }

        label {
            font-size: 20px;
            font-weight: 400;

            &:last-child {
                margin-right: 0;
            }
        }
    }

    .main-btn {
        position: absolute;
        top: 634px;
        left: 50%;
        transform: translateX(-50%);
    }

    @media screen and (max-width: ${tabletWidth}px) {
        .radio {
            max-width: 420px;
            width: 90%;
            top: 455px;
        }

        .main-btn {
            top: 730px;
        }
    }
`;