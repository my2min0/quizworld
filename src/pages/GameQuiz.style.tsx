import styled from "styled-components";
import { tabletWidth } from "../App.style";
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
`;

export const QuestionWrapper = styled.div<ISubjectProps>`
    .question {
        ${flexbox({justify: 'flex-start'})}
        gap: 10px;

        position: relative;
        top: 40px;
        left: 50%;
        transform: translateX(-50%);
        width: 740px;

        
        h2 {
            ${flexbox({justify: 'center', align: 'center'})}
            width: 70px;
            height: 36px;
            background-color: #000;
            color: #FFF;
            border-radius: 100px;

            font-size: 20px;
            font-weight: 500;
        }

        p {
            width: 670px;
            font-size: 22px;
            font-weight: 500;
            line-height: 152%;
        }
    }

    .marking {
        position: absolute;
        top: -15px;
        left: -13px;
    }

    @media screen and (max-width: ${tabletWidth}px) {
        .question {
            top: 27px;
            max-width: 420px;
            width: 90%;
            
            h2 {
                width: 75px;
                height: 42px;
                font-size: 21px;
            }

            p {
                width: 320px;
                font-size: 22px;
            }
        }

        .marking {
            top: -12px;
            left: -10px
        }
    }
`;

export const ContentWrapper = styled.div<ISubjectProps>`
    position: absolute;
    width: 100%;
    height: 72%;
    top: 110px;
    overflow-x: hidden;
    overflow-y: scroll;

    .passage {
        position: relative;
        top: 0px;
        left: 50%;
        transform: translateX(-50%);
        width: 750px;
        height: 135px;
        padding: 10px 20px;
        border-radius: 20px;
        background-color: #FFF;
        
        p {
            ${flexbox({justify: 'center', align: 'center'})}
            height: 110px;
            font-size: 20px;
            font-weight: 400;
            text-align: center;

            overflow-y: scroll;
        }
    }

    .options {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        width: 750px;
        padding: 20px 0;
    }

    .explanation {
        ${flexbox({justify: 'center', align: 'center'})}
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        padding-top: 10px;

        h3 {
            ${flexbox({align: 'center', justify: 'center'})}
            width: 71px;
            height: 110px;
            border-radius: 20px 0 0 20px;
            background-color: ${({ page }) => color(page, 'primary')};
            color: #FFF;
            font-size: 18px;
            font-weight: 500;
        }

        div {
            width: 679px;
            height: 110px;
            border-radius: 0 20px 20px 0;
            background-color: #FFF;
            padding: 20px;
            
            p {
                height: 70px;
                font-size: 16px;
                font-weight: 400;
                line-height: 150%;

                overflow-y: scroll;
            }
        }
    }

    @media screen and (max-width: ${tabletWidth}px) {
        top: 115px;

        .passage {
            ${flexbox({justify: 'center', align: 'center'})}
            max-width: 420px;
            width: 90%;
            height: 130px;
            padding: 10px 30px;
            
            p {
                font-size: 21px;
            }
        }

        .options {
            max-width: 420px;
            width: 90%;
        }

        .explanation {
            ${flexbox({direction:'column', align: 'center'})}

            h3 {
                max-width: 420px;
                width: 90%;
                height: 50px;
                border-radius: 20px 20px 0 0;
                font-size: 20px;
            }

            div {
                max-width: 420px;
                width: 90%;
                height: 100px;
                border-radius: 0 0 20px 20px;
                
                p {
                    height: 60px;
                    font-size: 18px;
                    font-weight: 400;
                }
            }
        }

        .btn-set {
            div {
                gap: 10px;
            }
            max-width: 420px;
            width: 90%;
            bottom: -27px;
        }

    }
`;

export const ButtonWrapper = styled.div`
    .btn-set {
        width: 100%;
        height: 62px;

        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 30px;

        div {
            ${flexbox({justify: 'center', align: 'center'})}
            gap: 40px;
        }
    }

    @media screen and (max-width: ${tabletWidth}px) {
        .btn-set {
            max-width: 420px;
            width: 90%;
            height: 58px;
            bottom: 30px;

            div {
                gap: 10px;
            }
        }

    }
`;