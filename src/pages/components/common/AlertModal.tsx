import { useRef, useEffect } from 'react';
import * as Styled from './AlertModal.style';

interface IAlertModalProps {
    page: 'main' | 'kor' | 'math' | 'eng';
    message: string;
    subHidden?: string;
    onClose?: () => void;
    onExit: () => void;
}

function AlertModal({ page, message, subHidden, onClose, onExit }: IAlertModalProps) {
    const modalRef = useRef<HTMLDivElement | null>(null);

    //포커스 관련 함수
    useEffect(() => {
        const modal = modalRef.current;
        if (!modal) return;

        // 모달 내부의 포커스 가능한 요소 선택
        const focusableSelectors = [
            'a[href]',
            'area[href]',
            'input:not([disabled]):not([type="hidden"])',
            'textarea:not([disabled])',
            'button:not([disabled])',
            '[tabindex]:not([tabindex="-1"])',
        ];
        
        const rawElements = modal.querySelectorAll(focusableSelectors.join(','));
        const focusableElements = Array.from(rawElements).filter((el): el is HTMLElement => {
            return el instanceof HTMLElement && el.offsetParent !== null && !el.hasAttribute('disabled');
        });

        const firstEl = focusableElements[0] as HTMLElement; // 첫번째 포커스 요소

        // 포커스 강제 이동
        if (firstEl) {
            setTimeout(() => {
                firstEl.focus();
            }, 0);
        } else {
            modal.tabIndex = -1;
            modal.focus();
        }

        // keydown 핸들러 정의 (Tab키 순회 감지)
        const handleKeyDown = (e: KeyboardEvent) => {
            // ESC 키 눌렀을 때 모달 닫기
            if (e.key === 'Escape') {
                if (onClose) onClose();
                return;
            }

            if (e.key === 'Tab') {
                const rawElements = modal.querySelectorAll(focusableSelectors.join(','));
                const focusableElements = Array.from(rawElements).filter((el): el is HTMLElement => {
                    return el instanceof HTMLElement && el.offsetParent !== null && !el.hasAttribute('disabled');
                });

                const firstEl = focusableElements[0] as HTMLElement;
                const lastEl = focusableElements[focusableElements.length - 1] as HTMLElement;

                if (!firstEl || !lastEl) {
                    // 포커스 가능한 요소가 없을 경우 modal에 머무름
                    e.preventDefault();
                    modal.focus();
                    return;
                }

                if (e.shiftKey) {
                    if (document.activeElement === firstEl) {
                        e.preventDefault();
                        lastEl.focus();
                    }
                } else {
                    if (document.activeElement === lastEl) {
                        e.preventDefault();
                        firstEl.focus();
                    }
                }
            }
        };

        // 이벤트 리스너 등록
        document.addEventListener('keydown', handleKeyDown);

        // 모달 unmount 시 이벤트 제거
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    return (
        <Styled.Modal page={ page }>
            <div className="backdrop">
                <div className="modal" role="dialog" aria-modal="true" ref={modalRef}>
                    <span></span>
                    <h1>{message}</h1>
                    <div className='btn-set'>
                        <button 
                            className={`modal-sub-btn ${subHidden ? 'hidden' : ''}`}
                            onClick={onClose}
                        >
                            취소
                        </button>
                        <button className={`modal-btn ${subHidden ? 'hidden-radius' : 'set-radius'}`}  onClick={onExit}>확인</button>
                    </div>
                </div>
            </div>
        </Styled.Modal>
    )
}

export default AlertModal;