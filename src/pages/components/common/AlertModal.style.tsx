import styled from "styled-components";
import { mobileWidth } from "../../../App.style";
import { flexbox } from "../../../common/theme/flexbox";
import { color } from "../../../common/theme/colors";

interface IAlertModalProps {
    page: 'main' | 'kor' | 'math' | 'eng';
}

export const Modal = styled.div<IAlertModalProps>`
    .backdrop {
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 5;
    }

    .modal {
        width: 90%;
        max-width: 25rem;
        height: 17rem;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        background-color: ${({ page }) => color(page, 'lightest')};
        border-radius: 1.6rem;
        z-index: 10;

        h1 {
            ${flexbox({justify: 'center', align: 'center'})}
            width: 100%;
            height: 13.8rem;
            text-align: center;
            font-size: 1.4rem;
            font-weight: 700;
            line-height: 2.6rem;
        }

        .btn-set {
            ${flexbox({justify:'center', align: 'center'})}
            width: 100%;
            height: 2.8rem;
            position: relative;
            bottom: -1px;
            margin: 0;
            font-size: 1.4rem;
            font-weight: 700;

            .modal-sub-btn {
                width: 100%;
                padding: 1rem;
                background-color: ${({ page }) => color(page, 'light')};
                border-radius: 0 0 0 1.6rem;

                &:focus-visible {
                    outline: 3px solid red;
                }
            }

            .hidden {
                display: none;
            }

            .modal-btn {
                width: 100%;
                padding: 1rem;
                background-color: ${({ page }) => color(page, 'primary')};
                color: ${({ page }) => color(page, 'darkest')};

                &:focus-visible {
                    outline: 3px solid red;
                }
            }
            
            .hidden-radius {
                border-radius: 0 0 1.6rem 1.6rem;
            }
    
            .set-radius {
                border-radius: 0 0 1.6rem 0;
            }
        }

    }

    @media screen and (max-width: ${mobileWidth}px) {
        .modal {
            max-width: 30rem;
            width: 100%;
            height: 18rem;
            top: 0;
            transform: translate(-50%, 100%);
            border-radius: 1.6rem 1.6rem 0 0;
            
            span {
                content: '';
                width: 6rem;
                height: .5rem;
                border-radius: 3rem;
                background-color: #DDD;

                position: absolute;
                top: 1.5rem;
                left: 50%;
                transform: translateX(-50%);
            }
            
            h1 {
                height: 15rem;
                font-size: 1.4rem;
                font-weight: 600;
                line-height: 130%;
            }

            .btn-set {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: 0;
                height: 6rem;
                gap: 1rem;
                border-radius: 0;
                padding: 0 1rem;

                font-size: 1.2rem;
                
                .modal-sub-btn,
                .modal-btn {
                    width: 90%;
                    border-radius: 1.6rem;
                    
                    height: 3rem;
                    font-weight: 600;
                }
            }
        }
    }
`;