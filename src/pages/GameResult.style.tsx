import styled from 'styled-components';
import { tabletWidth } from '../App.style';
import { flexbox } from '../common/theme/flexbox';
import { color } from '../common/theme/colors';
import type { PageType } from '../common/theme/types';

interface ISubjectProps {
    page: PageType;
}

export const GameResultWrapper = styled.div<ISubjectProps>`
    background-color: ${({ page }) => color(page, 'lightest')};
    height: 100vh;
    .lottie {
        position: absolute;
        top: 0;
        left: 0;

        @media screen and (max-width: ${tabletWidth}px) {
            top: 50%;
            transform: translateY(-50%);
        }
    }

    .subject-logo {
        width: 300px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 50px;
    }

    .message-section {
        ${flexbox({direction: 'column', justify: 'center', align: 'center'})}

        h1 {
            margin-top: 40px;
            font-size: 25px;
            font-weight: 500;
        }

        h3 {
            margin-top: 20px;
            font-size: 20px;
            font-weight: 500;
        }
    }

    .num-section {
        ${flexbox({direction: 'column', justify: 'center', align: 'center'})}
        margin-top: 60px;
        z-index: 2;
        .row {
            ${flexbox({justify: 'center', align: 'center'})}
            gap: 40px;
        }
        button {
            p {
                font-family: 'SchoolSafeOuting';
                font-size: 40px;
            }
            img {
                position: relative;
                top: -55px;
            }
        }

        @media screen and (max-width: ${tabletWidth}px) {
            gap: 0;
            margin-top: 90px;
            .row {
                gap: 0;
            }
            button {
                p {
                    font-size: 30px;
                }
                img {
                    width: 70%;
                    top: -37px;
                }
            }
        }
    }

    .modal-info {
        ${flexbox({direction: 'row', justify: 'center', align: 'center'})}
        width: 300px;
        gap: 10px;
        position: relative;
        top: -70px;
        left: 150px;
        z-index: 1;
        .click {
            font-family: 'SchoolSafeOuting';
            font-size: 22px;
            text-align: right;

            strong {
                font-size: 24px;
            }
        }
        .finger {
            width: 50px;
            position: relative;
            top: -10px;
        }

        @media screen and (max-width: ${tabletWidth}px) {
            width: 220px;
            top: -30px;
            left: 90px;
            .click {
                font-size: 18px;
                strong {
                    font-size: 20px;
                }
            }
            .finger {
                width: 35px;
                top: -20px;
            }
        }
    }

    .button-section {
        ${flexbox({justify: 'center', align: 'center'})}
        gap: 40px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 30px;

        @media screen and (max-width: ${tabletWidth}px) {
            gap: 10px;
            max-width: 420px;
            width: 90%;
            height: 58px;
        }
    }
`;