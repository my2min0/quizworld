import styled from "styled-components";
import { tabletWidth, mobileWidth } from "../App.style";
import { flexbox } from "../common/theme/flexbox";
import { color } from "../common/theme/colors";

export const QuizWorldWrapper = styled.div`
    ${flexbox({direction: 'column', align: 'center'})}
    width: 100vw;
    min-height: 100vh;
    background-color: ${color('common', 'background')};

    .popup-alert {
        font-family: 'Pretendard';
        text-align: center;
        font-size: 1.8rem;
        font-weight: 500;
        color: ${color('main','darkest')};

        margin-top: 7rem;
        margin-bottom: 5rem;
        padding: .5rem 1rem;
        max-width: fit-content;
        background-color: ${color('main', 'lightest')};
        border: 2px solid ${color('main', 'dark')};
        border-radius: 1.5rem;
    }

    @media screen and (max-width: ${tabletWidth}px) {
        .popup-alert {
            font-size: 1.3rem;
            margin-top: 5rem;
        }
    }
`;

export const QuizWorldTitle = styled.section`
    ${flexbox({direction: 'column', align: 'center'})}
    img {
        width: 50rem;
        margin-top: 5rem;
        padding-bottom: 3rem;
    }
    h2 {
        font-family: 'SchoolSafeOuting';
        text-align: center;
        font-size: 3.7rem;
        font-weight: 700;
        letter-spacing: .2rem;
        line-height: 150%;
        color: ${color('main', 'darkest')};
    }

    @media screen and (max-width: ${tabletWidth}px) {
        img {
            width: 30rem;
        }
        h2 {
            font-size: 2.5rem;
        }
    }

    @media screen and (max-width: ${mobileWidth}px) {
        img {
            width: 30rem;
            margin-top: 6rem;
            padding-bottom: 3rem;
        }
        h2 {
            font-size: 2rem;
        }
    }
`;

export const CardList = styled.div`
    ${flexbox({justify: 'center'})}
    margin-top: 5rem;
    gap: 3rem;
    max-width: 1200px;

    section {
        ${flexbox({direction: 'column', align: 'center', })}
        width: 30rem;
        height: 34rem;
        border-radius: 1.5rem;
        box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.15);
        cursor: pointer;

        figure {
            width: 25rem;
            height: 22rem;

            margin-top: 2.5rem;

            img {
                width: 22rem;
                height: 22rem;
                position: relative;
                left: 50%;
                transform: translateX(-50%);
            }
        }
        h1 {
            margin: auto 0;
            font-family: 'SchoolSafeOuting';
            font-size: 2.7rem;
            font-weight: 700;
            letter-spacing: .1rem;
            color: ${color('main','darkest')}
        }

    }
    section:nth-child(1) {
        background-color: ${color('kor','light')};
    }
    section:nth-child(2) {
        background-color: ${color('math','light')};
    }
    section:nth-child(3) {
        background-color: ${color('eng','light')};
    }
    section:hover {
        transform: translateY(--1rem) rotate(-1deg) scale(1.02);
        box-shadow: 0 1.2rem 2rem rgba(0, 0, 0, 0.25);
    }

    @media screen and (max-width: ${tabletWidth}px) {
        margin-top: 4rem;
        gap: 2rem;
        section {
            width: 13rem;
            height: 18rem;

            figure {
                width: 10rem;
                height: 11rem;
                margin-top: 1.5rem;
                img {
                    width: 11rem;
                    height: 11rem;
                }
            }
            h1 {
                font-size: 1.8rem;
            }
        }
    }

    @media screen and (max-width: ${mobileWidth}px) {
        ${flexbox({direction: 'row'})}
        gap: 2rem;
        padding: 0 2rem;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;

        section {
            scroll-snap-align: center;
            transition: transform 0.3s;
        }

        &::-webkit-scrollbar {
            display: none;
        }
    }
`;

export const QuizWorldFooter = styled.footer`
    ${flexbox({direction: 'row', justify: 'space-between'})}
    gap: 3rem;
    margin-top: auto;

    p {
        font-size: 1.3rem;
    }

    a {
        text-decoration: underline;
    }

    @media screen and (max-width: ${mobileWidth}px) {
        font-size: 1rem;
    }
`;