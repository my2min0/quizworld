import styled from "styled-components";
import { tabletWidth } from "../../../App.style"; 
import { color } from "../../../common/theme/colors";

interface IButtonStyleProps {
    page: 'main' | 'kor' | 'math' | 'eng';
}

export const Button = styled.div<IButtonStyleProps>`
    button {
        padding: 10px;

        border-radius: 100px;
        
        font-size: 24px;
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
        color: ${({ page }) => color(page, 'primary')};
    }
    .able {
        background-color: ${({ page }) => color(page, 'light')};
        color: ${({ page }) => color(page, 'darkest')};
    }

    // size
    .sm {
        width: 240px;
        height: 62px;
    }
    .md {
        width: 335px;
        height: 62px;
    }
    .lg {
        width: 730px;
        height: 62px;
    }

    @media screen and (max-width: ${tabletWidth}px) {
        // size
        .sm, .lg {
            height: 58px;
            max-width: 414px;
            width: 90%;
        }

        .md {
            height: 58px;
            max-width: 190px;
            /* width: 40%; */
        }
    }
`;