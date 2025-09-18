import styled from "styled-components";
import { mobileWidth, tabletWidth } from "../App.style";
import { flexbox } from "../common/theme/flexbox";
import { color } from "../common/theme/colors";
import type { PageType } from "../common/theme/types";

interface ISubjectProps {
    page: PageType;
}

export const GameQuizWrapper = styled.div<ISubjectProps>`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: ${({ page }) => color(page, 'lightest')};

    overflow: hidden;

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

    @media screen and (max-width: ${mobileWidth}px) {
        width: 100vw;
        height: 100dvh;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export const QuestionWrapper = styled.div<ISubjectProps>`
    .question {
        ${flexbox({justify: 'flex-start', align: 'center'})}
        gap: .7rem;

        position: relative;
        top: 2rem;
        left: 50%;
        transform: translateX(-50%);
        max-width: 45rem;
        width: 95%;

        
        h2 {
            ${flexbox({justify: 'center', align: 'center'})}
            width: 4rem;
            height: 2.5rem;
            background-color: #000;
            color: #FFF;
            border-radius: 10rem;

            font-size: 1.3rem;
            font-weight: 500;
        }

        p {
            max-width: 40rem;
            width: 87%;
            font-size: 1.4rem;
            font-weight: 500;
            line-height: 152%;
        }
    }

    .marking {
        position: absolute;
        top: -.8rem;
        left: -1rem;
    }

    @media screen and (max-width: ${mobileWidth}px) {
        .question {
            top: 1.7rem;
            max-width: 25rem;
            h2 {
                width: 4rem;
                height: 2.5rem;
                font-size: 1.2rem;
            }
            p {
                width: 21rem;
                height: 3.8rem;
                font-size: 1.2rem;
                ${flexbox({align: 'center'})}
            }
        }

        .marking {
            top: 0rem;
            left: -.5rem;

            img {
                width: 85%;
            }
        }
    }
`;

export const ContentWrapper = styled.div<ISubjectProps>`
    position: relative;
    width: 100%;
    height: 72%;
    margin-top: 3.5rem;
    overflow-x: hidden;
    overflow-y: scroll;

    .passage {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        max-width: 45rem;
        width: 90%;
        height: 8rem;
        padding: 2rem 2rem;
        border-radius: 2rem;
        background-color: #FFF;
        
        p {
            ${flexbox({justify: 'center', align: 'center'})}
            height: 4rem;
            font-size: 1.4rem;
            font-weight: 500;
            text-align: center;

            overflow-y: scroll;
        }
    }

    .options {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        max-width: 45rem;
        width: 90%;
        height: 17.2rem;
        margin-top: 1.7rem;
    }

    .explanation {
        ${flexbox({justify: 'center', align: 'center'})}
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 1.7rem;
        max-width: 45rem;
        width: 90%;

        h3 {
            ${flexbox({align: 'center', justify: 'center'})}
            min-width: 4rem;
            height: 8rem;
            border-radius: 1.5rem 0 0 1.5rem;
            background-color: ${({ page }) => color(page, 'primary')};
            color: #FFF;
            font-size: 1.3rem;
            font-weight: 500;
        }

        div {
            width: 40.8rem;
            height: 8rem;
            border-radius: 0 1.5rem 1.5rem 0;
            background-color: #FFF;
            padding: 1.5rem;
            
            p {
                height: 5rem;
                font-size: 1.3rem;
                font-weight: 400;
                line-height: 150%;

                overflow-y: scroll;
            }
        }
    }

    @media screen and (max-width: ${mobileWidth}px) {
        top: 0%;
        height: 72dvh;
        margin-top: 2.8rem;
        .passage {
            ${flexbox({justify: 'center', align: 'center'})}
            max-width: 25rem;
            width: 90%;
            height: 7rem;
            padding: 1rem 2rem;
            
            p {
                font-size: 1.2rem;
            }
        }
        .options {
            max-width: 25rem;
            width: 90%;
            margin-top: 1rem;
            height: 12.7rem;
        }

        .explanation {
            ${flexbox({direction:'column', align: 'center'})}
            margin-top: 1rem;
            h3 {
                max-width: 25rem;
                width: 100%;
                height: 3rem;
                border-radius: 1.2rem 1.2rem 0 0;
                font-size: 1.1rem;
            }

            div {
                max-width: 25rem;
                width: 100%;
                height: 6.5rem;
                padding: 1rem;
                border-radius: 0 0 1.2rem 1.2rem;
                
                p {
                    height: 4.5rem;
                    font-size: 1.1rem;
                    font-weight: 400;
                }
            }
        }
    }
`;

export const ButtonWrapper = styled.div`
    .btn-set {
        max-width: 45rem;
        width: 90%;
        bottom: 1.5rem;

        position: fixed;
        left: 50%;
        transform: translateX(-50%);

        div {
            ${flexbox({justify: 'center', align: 'center'})}
            gap: clamp(1rem, 3vw, 2rem);
        }
    }

    @media screen and (max-width: ${mobileWidth}px) {
        .btn-set {
            max-width: 25rem;
            width: 90%;

            div {
                gap: 1rem;
            }
        }

    }
`;