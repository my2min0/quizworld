import styled from "styled-components";
import { tabletWidth } from "../../App.style";
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
        height: 500px;
        padding: 40px;
        padding-bottom: 20px;
        z-index: 10;

        background-color: #FFF;
        border-radius: 30px;

        @media screen and (max-width: ${tabletWidth}px) {
            padding: 20px;
        }

        section > div {
            ${flexbox({align: 'center'})}
            gap: 10px;
        }

        .q-section {
            h1 {
                font-size: 20px;
                font-weight: 600;
                background-color: #000;
                color: #FFF;
                padding: 10px 15px;
                border-radius: 20px;
            }
            h2 {
                font-size: 22px;
                font-weight: 600;
            }
            .passage {
                ${flexbox({justify: 'center', align: 'center'})}
                width: 100%;
                height: 100px;
                margin-top: 20px;
                padding: 20px;
                background-color: ${({ page }) => color(page, 'light')};
                border-radius: 15px;
            }

            @media screen and (max-width: ${tabletWidth}px) {
                h1 {
                    min-width: 48px;
                    font-size: 15px;
                    padding: 10px;
                }
                h2 {
                    font-size: 18px;
                }
            }
        }

        .a-section {
            div {
                margin-top: 20px;
                margin-left: 10px;
            }
            h3 {
                font-size: 22px;
                font-weight: 600;
            }
            p{
                font-size: 22px;
                font-weight: 500;
            }

            .explanation {
                position: absolute;
                top: 315px;
                left: 60px;
                padding: 20px 25px;
                background-color: ${({ page }) => color(page, 'dark')};
                color: ${({ page }) => color(page, 'lightest')};
                border-radius: 30px;
                font-size: 18px;
                font-weight: 600;
            }
            .explanation::after {
                content: '';
                position: absolute;
                top: -28px;
                left: 30px;
                border: 16px solid ${({ page }) => color(page, 'dark')};
                border-color: transparent transparent ${({ page }) => color(page, 'dark')} transparent;
            }

            @media screen and (max-width: ${tabletWidth}px) {
                h3 {
                    font-size: 18px;
                }
                p {
                    font-size: 18px;
                }
                .explanation {
                    top: 280px;
                    left: 50px;
                    max-width: 83%;
                    padding: 10px 15px;
                    font-size: 15px;
                }
                .explanation::after {
                    top: -25px;
                    left: 20px;
                }
            }
        }

        .btn {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 20px;
            
        }
    }
`;