import styled from "styled-components";
import { flexbox } from "../../../common/theme/flexbox";
import { color } from "../../../common/theme/colors";
import type { PageType } from "../../../common/theme/types";

interface IPageTypeProps {
    page: PageType;
}

export const ErrorWrapper = styled.div<IPageTypeProps>`
    ${flexbox({direction: 'column', justify: 'center', align: 'center'})};
    background: ${({ page }) => color(page, 'lightest')};
    height: 100vh;

    .lottie {
        width: 150px;
        height: 150px;
        position: relative;
        top: -40px;
    }
    h1 {
        position: relative;
        top: -20px;
        font-size: 25px;
        font-weight: 800;
    }
    p {
        font-size: 20px;
        font-weight: 500;
    }

    .btn-group {
        position: absolute;
        bottom: 40px;
        ${flexbox({justify: 'center', align: 'center'})}
        gap: 40px;
    }
`;