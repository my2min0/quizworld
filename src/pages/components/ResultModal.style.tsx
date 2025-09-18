import styled from "styled-components";
import { mobileWidth } from "../../App.style";
import { flexbox } from "../../common/theme/flexbox";
import { color } from "../../common/theme/colors";
import type { PageType } from "../../common/theme/types";

interface ISubjectProps {
    page: PageType;
}

export const ResultModalWrapper = styled.div<ISubjectProps>`
    .backdrop {
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.5);
        width: 100%;
        height: 100vh;
        z-index: 1;
    }

    .modal {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        height: 34rem;
        padding: 2rem;
        padding-bottom: 2rem;
        z-index: 10;

        background-color: #FFF;
        border-radius: 2.5rem;

        section > div {
            ${flexbox({align: 'center'})}
            gap: .5rem;
        }

        .q-section {
            h1 {
                font-size: 1.2rem;
                width: 4.2rem;
                font-weight: 600;
                background-color: #000;
                color: #FFF;
                padding: .7rem 1rem;
                border-radius: 2rem;
            }
            .question {
                font-size: 1.3rem;
                font-weight: 600;
                line-height: 120%;
                width: 27.5rem;
            }
            .passage {
                ${flexbox({justify: 'center', align: 'center'})}
                width: 100%;
                height: 7rem;
                margin-top: 1rem;
                font-size: 1.3rem;
                font-weight: 600;
                line-height: 120%;
                padding: 2rem;
                background-color: ${({ page }) => color(page, 'light')};
                border-radius: 1.5rem;
            }
        }

        .a-section {
            div {
                margin-top: 2rem;
                margin-left: 1rem;
            }
            h3 {
                font-size: 1.4rem;
                font-weight: 600;
            }
            p{
                font-size: 1.3rem;
                font-weight: 500;
                // 형광펜 효과
                box-shadow: inset 0 -0.5em 0 ${({ page }) => color(page, 'light')};
                margin-left: .8rem;
            }

            .explanation {
                position: absolute;
                top: 21.5rem;
                left: 4.5rem;
                max-width: 80%;
                padding: .8rem 1.3rem;
                background-color: ${({ page }) => color(page, 'dark')};
                color: ${({ page }) => color(page, 'lightest')};
                border-radius: 3rem;
                font-size: 1.1rem;
                font-weight: 600;
            }
            .explanation::after {
                content: '';
                position: absolute;
                top: -1.8rem;
                left: 1.8rem;
                border: 1rem solid ${({ page }) => color(page, 'dark')};
                border-color: transparent transparent ${({ page }) => color(page, 'dark')} transparent;
            }
        }

        .btn {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 1.6rem;
        }
    }

    @media screen and (max-width: ${mobileWidth}px) {
        width: 100vw;
        height: 100dvh;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;

        .modal {
            padding: 1.3rem;
            height: 28rem;
        }

        .q-section {
            h1 {
                font-size: 1rem !important;
                width: 3.3rem !important;
                padding: .5rem .7rem !important;
            }
            .question {
                font-size: 1.1rem !important;
                width: 16rem !important;
            }
            .passage {
                height: 5rem !important;
                font-size: 1.1rem !important;
            }
        }

        .a-section {
            div {
                margin-top: 1.5rem !important;
            }
            h3 {
                font-size: 1.2rem !important;
            }
            p {
                font-size: 1.2rem !important;
                margin-left: .5rem !important;
            }
            .explanation {
                top: 17rem !important;
                left: 2rem !important;
                max-width: 90% !important;
                padding: .5rem 1rem !important;
                font-size: 1rem !important;
            }
            .explanation::after {
                top: -1.5rem !important;
                left: 2.8rem !important;
            }
        }
    }
`;