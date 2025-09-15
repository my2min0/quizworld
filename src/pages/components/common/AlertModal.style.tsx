import styled from "styled-components";
import { tabletWidth } from "../../../App.style";
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
        background-color: ${({ page }) => color(page, 'lightest')};
        border-radius: 16px;
        z-index: 10;

        h1 {
            ${flexbox({justify: 'center', align: 'center'})}
            width: 100%;
            height: 168px;
            text-align: center;
            font-size: 18px;
            font-weight: 700;
            line-height: 26px;
        }

        .btn-set {
            ${flexbox({justify:'center', align: 'center'})}
            width: 100%;
            height: 48px;
            position: relative;
            bottom: -1px;
            margin: 0;
            font-size: 18px;
            font-weight: 700;

            .modal-sub-btn {
                width: 100%;
                padding: 10px;
                background-color: ${({ page }) => color(page, 'light')};
                border-radius: 0 0 0 16px;

                &:focus-visible {
                    outline: 3px solid red;
                }
            }

            .hidden {
                display: none;
            }

            .modal-btn {
                width: 100%;
                padding: 10px;
                background-color: ${({ page }) => color(page, 'primary')};
                color: ${({ page }) => color(page, 'darkest')};

                &:focus-visible {
                    outline: 3px solid red;
                }
            }
            
            .hidden-radius {
                border-radius: 0 0 16px 16px;
            }
    
            .set-radius {
                border-radius: 0 0 16px 0;
            }
        }

    }

    @media screen and (min-width: ${tabletWidth}px) {
        .modal {
            max-width: 330px;
            width: 90%;
            height: 216px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }

    @media screen and (max-width: ${tabletWidth}px) {
        .modal {
            width: 100%;
            height: 290px;
            position: absolute;
            bottom: 0;
            border-radius: 16px 16px 0 0;
            
            span {
                content: '';
                width: 60px;
                height: 5px;
                border-radius: 30px;
                background-color: #DDD;

                position: absolute;
                top: 15px;
                left: 50%;
                transform: translateX(-50%);
            }
            
            h1 {
                height: 220px;
                font-size: 24px;
                font-weight: 600;
                line-height: 130%;
            }

            .btn-set {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: 20px;
                height: 60px;
                gap: 10px;
                border-radius: 0;
                padding: 0 10px;

                font-size: 20px;
                
                .modal-sub-btn,
                .modal-btn {
                    width: 90%;
                    border-radius: 16px;
                    
                    height: 60px;
                    font-weight: 600;
                }
            }
        }
    }
`;