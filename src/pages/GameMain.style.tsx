import styled from "styled-components";
import { mobileWidth } from "../App.style";
import { flexbox } from "../common/theme/flexbox";
import { color } from "../common/theme/colors";
import type { PageType } from "../common/theme/types";

interface ISubjectProps {
    page: PageType;
}

export const GameMainWrapper = styled.div<ISubjectProps>`
    position: relative;
    width: 100%;
    max-height: 817px;
    height: 100dvh;
    background-color: ${({ page }) => color(page, 'lightest')};

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
    
    .subject-logo {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 6rem;
    }
    
    .grade_mobile {
        display: none !important;
    }

    .radio {
        ${flexbox({direction: 'column', justify: 'center', align: 'flex-start'})}
        gap: clamp(2rem, 3vw, 2.8rem);
        max-width: 35rem;
        width: 90%;
        aspect-ratio: 10/3;
        padding: 2.4rem;
        border-radius: 2rem;
        border: 2px solid ${({ page }) => color(page, 'light')};
        background-color: #FFF;

        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 3rem;

        fieldset {
            ${flexbox({align: 'center'})}
            gap: clamp(.5rem, 4vw, 2rem);
        }

        input[type="radio"] {
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            background: none;
            width: clamp(1.3rem, 3vw, 1.5rem);
            height: clamp(1.3rem, 3vw, 1.5rem);
            border: 2px solid #CCCCCC;
            border-radius: 50%;
            margin-right: clamp(.1rem, 1vw, .7rem);

            &:focus-visible {
                outline: 3px solid #663300;
            }
        }

        [type="radio"]:checked {
            background: transparent;
            border: 7px solid ${({ page }) => color(page, 'primary')};
            box-shadow: inset 0 0 0 .3rem white;
        }

        label {
            font-size: clamp(1.2rem, 4vw, 1.5rem);
            font-weight: 400;

            &:last-child {
                margin-right: 0;
            }
        }
    }

    .main-btn {
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

        .subject-logo {
            width: 15rem;
            height: 11.5rem;
            position: relative;
            top: -2rem;
        }
        .radio {
            max-width: 42rem;
            width: 90%;
            margin-top: 1rem;
        }

        .grade_pc {
            display: none !important;
        }

        .grade_mobile {
            display: block !important;
            margin-top: 1.5rem;
            .selected {
                position: relative;
                left: 50%;
                transform: translateX(-50%);
                max-width: 42rem;
                width: 90%;
                height: 4rem;
    
                border-radius: 1.6rem;
                border: 2px solid ${({ page }) => color(page, 'light')};
                background-color: #FFF;
                
                a {
                    ${flexbox({align:'center', justify:'space-between'})}
                    max-width: 42rem;
                    width: 100%;
                    height: 4rem;
                    padding: 2rem;
                    color: #666;
                    font-size: 1.3rem;
                    font-weight: 400;
                    line-height: 122%;
                }
            }

            .backdrop {
                position: fixed;
                inset: 0;
                background-color: rgba(0, 0, 0, 0.4);
                z-index: 5;
            }
            
            .options {
                animation: slideUp 0.5s ease-out;
                position: fixed;
                bottom: 0;
                z-index: 10;

                width: 100%;
                height: 21rem;
                background-color: #FFF;
                border-radius: 2rem 2rem 0 0;

                span {
                    content: '';
                    width: 5rem;
                    height: .4rem;
                    border-radius: 3rem;
                    background-color: #DDD;

                    position: absolute;
                    top: 1.5rem;
                    left: 50%;
                    transform: translateX(-50%);
                }

                ul {
                    width: 100%;
                    position: absolute;
                    top: 4.2rem;
                    
                    li {
                        ${flexbox({direction: 'column', justify: 'center'})}
                        width: 100%;
                        height: 3.5rem;
                        padding-left: 3.5rem;

                        font-size: 1.3rem;

                        a {
                            width: 100%;
                            transition: transform 0.2s;
                            padding: 1rem 0;
                        }

                        a:hover {
                            transform: translateY(-0.6rem);
                        }
                        
                        .selected-option {
                            color: ${({ page }) => color(page, 'dark')};
                            font-weight: 700;
                        }
                    }
                }
            }

            @keyframes slideUp {
                from {
                    transform: translateY(50%);
                }
                to {
                    transform: translateY(0);
                }
            }
        }
    }
`;