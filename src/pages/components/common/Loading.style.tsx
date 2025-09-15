import styled from "styled-components";
import { flexbox } from "../../../common/theme/flexbox";
import { color } from "../../../common/theme/colors";
import type { PageType } from "../../../common/theme/types";

interface IPageTypeProps {
    page: PageType;
}

export const LoadingWrapper = styled.div<IPageTypeProps>`
    ${flexbox({direction: 'column', justify: 'center', align: 'center'})};
    gap: 20px;
    background: ${({ page }) => color(page, 'lightest')};
    height: 100vh;

    .lottie {
        width: 300px;
        height: 300px;
    }
`;