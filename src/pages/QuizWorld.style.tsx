import styled from "styled-components";
import { tabletWidth, mobileWidth } from "../App.style";
import { flexbox } from "../common/theme/flexbox";
import { color } from "../common/theme/colors";

export const QuizWorldWrapper = styled.div`
    ${flexbox({direction: 'column', align: 'center'})}
    width: 100vw;
    min-height: 100vh;
    background-color: ${color('common', 'background')};

    p {
        font-family: 'Pretendard';
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        color: ${color('main','darkest')};

        margin-top: 70px;
        padding: .5rem 1rem;
        width: fit-content;
        background-color: ${color('main', 'lightest')};
        border: 2px solid ${color('main', 'dark')};
        border-radius: 1.5rem;
    }

    @media screen and (max-width: ${tabletWidth}px) {
        p {
            font-size: 13px;
        }
    }
`;

export const QuizWorldTitle = styled.section`
    ${flexbox({direction: 'column', align: 'center'})}
    h1 {
        font-family: 'Cafe24NyangiBlack';
        font-size: 90px;
        text-align: center;
        color: ${color('main', 'dark')};
        margin-top: 50px;
        padding: 5rem;
        padding-bottom: 4rem;
    }

    img {
        width: 500px;
        margin-top: 90px;
        padding-bottom: 50px;
    }

    h2 {
        font-family: 'SchoolSafeOuting';
        text-align: center;
        font-size: 37px;
        font-weight: 700;
        letter-spacing: 2px;
        line-height: 150%;
        color: ${color('main', 'darkest')};
    }

    @media screen and (max-width: ${tabletWidth}px) {
        h1 {
            font-size: 70px;
            padding-bottom: 2rem
        }
        h2 {
            font-size: 25px;
        }
    }

    @media screen and (max-width: ${mobileWidth}px) {
        h1 {
            font-size: 50px;
            margin-top: 1rem;
        }
        h2 {
            font-size: 20px;
        }
    }
`;

export const CardList = styled.div`
    ${flexbox({justify: 'center'})}
    margin-top: 5rem;
    gap: 3rem;

    section {
        ${flexbox({direction: 'column', align: 'center', })}
        background-color: ${color('main','lightest')};
        width: 300px;
        height: 380px;
        border-radius: 15px;
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);

        figure {
            width: 250px;
            height: 250px;

            margin-top: 25px;

            img {
                width: 250px;
                height: 250px;
            }
        }
        h1 {
            margin: auto 0;
            font-family: 'SchoolSafeOuting';
            font-size: 27px;
            font-weight: 700;
            letter-spacing: 1px;
            color: ${color('main','darkest')}
        }

    }
    section:hover {
        transform: translateY(-10px) rotate(-1deg) scale(1.02);
        box-shadow: 0 12px 20px rgba(0, 0, 0, 0.25);
    }

    @media screen and (max-width: ${tabletWidth}px) {
        section {
            width: 200px;
            height: 250px;

            figure {
                width: 160px;
                height: 160px;
                img {
                    width: 160px;
                    height: 160px;
                }
            }
            h1 {
                font-size: 22px;
            }
        }
    }

    @media screen and (max-width: ${mobileWidth}px) {
        ${flexbox({direction: 'column'})}
        gap: 1rem;
        margin-top: 2rem;
        section {
            ${flexbox({direction: 'row', justify: 'center'})}
            gap: 1.5rem;
            width: 250px;
            height: 100px;
            box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15);
            figure {
                width: 50px;
                height: 50px;
                img {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                }
            }
        }
    }
`;