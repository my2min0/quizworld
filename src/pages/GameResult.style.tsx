import styled from 'styled-components';
import { mobileWidth } from '../App.style';
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
    }

    .subject-logo {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 3rem;
        width: 300px;
        height: 223.59px;
    }

    .message-section {
        ${flexbox({direction: 'column', justify: 'center', align: 'center'})}

        h1 {
            margin-top: 3rem;
            font-size: 1.5rem;
            font-weight: 600;
        }

        h3 {
            margin-top: 2rem;
            font-size: 1.2rem;
            font-weight: 500;
        }
    }

    .num-section {
        ${flexbox({direction: 'column', justify: 'center', align: 'center'})}
        margin-top: 4rem;
        z-index: 2;
        .row {
            ${flexbox({justify: 'center', align: 'center'})}
            gap: 2rem;
        }
        button {
            p {
                font-family: 'SchoolSafeOuting';
                font-size: 2.2rem;
            }
            img {
                position: relative;
                top: -2.8rem;
                width: 80%;
            }
        }
    }

    .modal-info {
        ${flexbox({direction: 'row', justify: 'center', align: 'center'})}
        width: 16rem;
        gap: 1rem;
        position: relative;
        top: -3rem;
        right: clamp(-8rem, -16vw, 0rem);
        z-index: 1;
        .click {
            font-family: 'SchoolSafeOuting';
            font-size: 1.4rem;
            text-align: right;

            strong {
                font-size: 1.4rem;
            }
        }
        .finger {
            width: 2.8rem;
            position: relative;
            top: -1rem;
        }
    }

    .button-section {
        ${flexbox({justify: 'center', align: 'center'})}
        gap: 2rem;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 2rem;
    }

    @media screen and (max-width: ${mobileWidth}px) {
        width: 100vw;
        height: 100dvh;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .lottie {
            top: 50%;
            transform: translateY(-50%);
        }
        .subject-logo {
            width: 15rem;
            height: 11.5rem;
        }
        .message-section {
            h1 {
                margin-top: 2rem;
                font-size: 1.3rem;
            }
            h2 {
                font-size: 1rem;
            }
        }
        .num-section {
            gap: 0;
            margin-top: 3rem;
            .row {
                gap: 0;
            }
            button {
                p {
                    font-size: 1.4rem;
                }
                img {
                    width: 50%;
                    top: -1.8rem;
                }
            }
        }
        .modal-info {
            width: 14rem;
            top: -1rem;
            gap: .6rem;
            .click {
                font-size: 1.2rem;
                strong {
                    font-size: 1.3rem;
                }
            }
            .finger {
                width: 1.8rem;
            }
        }
        .button-section {
            gap: 1rem;
            max-width: 42rem;
            width: 90%;
            height: 3.8rem;
            bottom: 1.5rem;
        }
    }
`;