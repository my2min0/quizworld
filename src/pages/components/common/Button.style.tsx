import styled from "styled-components";
import { mobileWidth } from "../../../App.style"; 
import { color } from "../../../common/theme/colors";

interface IButtonStyleProps {
    page: 'main' | 'kor' | 'math' | 'eng';
}

export const Button = styled.div<IButtonStyleProps>`
    button {
        border-radius: 10rem;
        
        font-size: 1.7rem;
        font-weight: 500;
        
        /* &:focus-visible {
            outline: 3px solid #663300;
        } */
    }

    // colorType
    .default {
        background: ${({ page }) => color(page, 'primary')};
        color: ${({ page }) => color(page, 'darkest')};
    }
    .disable {
        background-color: #eee;
        color: #ccc;
    }
    .able {
        background-color: ${({ page }) => color(page, 'light')};
        color: ${({ page }) => color(page, 'darkest')};
    }

    // size
    .sm {
        width: 15rem;
        height: 3.8rem;
    }
    .md {
        width: clamp(12.5rem, 44vw, 21.5rem);
        height: 3.8rem;
    }
    .lg {
        max-width: 45rem;
        width: 95%;
        height: 3.8rem;
    }
    .modal-btn {
        font-size: 1.4rem;
        width: 10rem;
        height: 3rem;
    }

    @media screen and (max-width: ${mobileWidth}px) {
        // size
        .sm, .lg {
            max-width: 41.4rem;
            height: 3.3rem;
            font-size: 1.4rem;
            width: 90%;
        }

        .md {
            max-width: 19rem;
            width: 90%;
            height: 3.3rem;
            font-size: 1.4rem;
        }
    }
`;