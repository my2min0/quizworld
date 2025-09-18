import styled from "styled-components";
import { tabletWidth, desktopWidth } from "../App.style";
import { flexbox } from "../common/theme/flexbox";
import { color } from "../common/theme/colors";

export const QuizWorldWrapper = styled.div`
    ${flexbox({direction: 'column', align: 'center'})}
    width: 100vw;
    min-height: 100vh;
    padding: 0 2rem;
    background-color: ${color('common', 'background')};

    .popup-alert {
        //font-family: 'Pretendard';
        text-align: center;
        font-size: clamp(1.2rem, 1.5vw, 1.6rem);
        font-weight: 500;
        color: ${color('main','darkest')};

        margin-top: 6rem;
        margin-bottom: 5rem;
        padding: .5rem 1rem;
        max-width: fit-content;
        background-color: ${color('main', 'lightest')};
        border: 2px solid ${color('main', 'dark')};
        border-radius: 1.5rem;

        br {
            display: none;
        }
    }

    @media screen and (max-width: ${tabletWidth}px) {
        .popup-alert {
            font-size: 1.1rem;
            line-height: 130%;
            margin-top: 3rem;

            br {
                display: block;
            }
        }
    }
`;

export const QuizWorldTitle = styled.section`
    ${flexbox({direction: 'column', align: 'center'})}
    img {
        max-width: 50rem;
        width: 80%;
        margin-top: 5rem;
        padding-bottom: 3rem;
    }
    h2 {
        font-family: 'SchoolSafeOuting';
        text-align: center;
        font-size: clamp(2.5rem, 2vw, 3.7rem);
        font-weight: 700;
        letter-spacing: .2rem;
        line-height: 150%;
        color: ${color('main', 'darkest')};
    }

    @media screen and (max-width: ${desktopWidth}px) {
        h2 {
            font-size: 2.5rem;
        }
    }

    @media screen and (max-width: ${tabletWidth}px) {
        img {
            max-width: 30rem;
            width: 90%;
            margin-top: 3rem;
            padding-bottom: 2.5rem;
        }
        h2 {
            font-size: 1.7rem;
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
        max-width: 27rem;
        width: 22%;
        aspect-ratio: 3/3.8;
        border-radius: 1.5rem;
        box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.15);
        cursor: pointer;

        figure {
            max-width: 25rem;
            width: 82%;
            aspect-ratio: 1/1;
            margin-top: 10%;

            img {
                max-width: 22rem;
                width: 100%;
                aspect-ratio: 1/1;
                position: relative;
                left: 50%;
                transform: translateX(-50%);
            }
        }
        h1 {
            margin: auto 0;
            font-family: 'SchoolSafeOuting';
            font-size: clamp(1.6rem, 2.3vw, 2.1rem);
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

    // 모바일에서는 가로 드래그!
    @media screen and (max-width: ${tabletWidth}px) {
        ${flexbox({direction: 'row'})}
        overflow-x: auto;
        gap: 2rem;
        padding: 0 2rem;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
        max-width: 23rem;
        margin-top: 2.2rem;

        section {
            flex: 0 0 80%;
            scroll-snap-align: center;
            transition: transform 0.3s;
            box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.12);
            margin-bottom: 1rem;
            height: 19rem;

            figure {
                width: 13rem;
                height: 13rem;
                margin-top: 1.2rem;
                img {
                    width: 13rem;
                    height: 13rem;
                }
            }
        }

        &::-webkit-scrollbar {
            display: none;
        }

        --webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        --webkit-mask-repeat: no-repeat;
        --webkit-mask-size: 100% 100%;
        mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        mask-repeat: no-repeat;
        mask-size: 100% 100%;
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

    @media screen and (max-width: ${tabletWidth}px) {
        p {
            font-size: .9rem;
        }
    }
`;