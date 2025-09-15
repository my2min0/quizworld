import { useState } from 'react';
import * as Styled from './QuizWorld.style.tsx';
import AlertModal from './components/common/AlertModal.tsx';
import KorCardImg from '../assets/images/korCardImg.png';
import MathCardImg from '../assets/images/mathCardImg.png';
import EngCardImg from '../assets/images/engCardImg.png';
import mainLogo from '../assets/images/mainLogo.png';

function QuizWorld() {
    const [showAlertModal, setShowAlertModal] = useState(false);

    const openGamePopup = (path: string) => {
        const width = 800;
        const height = 800;

        // 화면 중앙 좌표 계산
        const left = window.screenX + (window.outerWidth - width) / 2;
        const top = window.screenY + (window.outerHeight - height) / 2;

        const url = `${window.location.origin}${path}`;
        const popup = window.open(
            url,
            '_blank',
            `width=${width},height=${height},left=${left},top=${top},toolbar=no,menubar=no,scrollbars=no,resizable=no`
        );

        // 팝업 차단 방지 : 새 창이 막혔는지 확인
        if (!popup) {
            setShowAlertModal(true);
            return;
        }
    }
    return (
        <Styled.QuizWorldWrapper>
            <Styled.QuizWorldTitle>
                <img src={mainLogo} alt='로고' className='logo-img'/>
                <h2>
                    꾸비와 함께 떠나는 퀴즈 모험! <br/>
                    어떤 퀴즈부터 시작할까요?
                </h2>
            </Styled.QuizWorldTitle>

            <Styled.CardList>
                <section onClick={() => openGamePopup('/kor')}>
                    <figure>
                        {/* 브라우저 기준의 경로로 해석이 되어 src에 문자열을 직접 넣으면 화면에 사진이 안나타남 */}
                        <img src={ KorCardImg } alt='국어 퀴즈'/>
                    </figure>
                    <h1>꾸비의 낱말 탐험</h1>
                </section>
                <section onClick={() => openGamePopup('/math')}>
                    <figure>
                        <img src={ MathCardImg } alt='수학 퀴즈'/>
                    </figure>
                    <h1>꾸비의 수학 미로</h1>
                </section>
                <section onClick={() => openGamePopup('/eng')}>
                    <figure>
                        <img src={ EngCardImg } alt='영어 퀴즈'/>
                    </figure>
                    <h1>꾸비의 영어 정글</h1>
                </section>
            </Styled.CardList>
            
            <p>※ 게임은 새 창으로 열리니, 팝업 차단을 해제해주세요</p>
            {showAlertModal && (
                <AlertModal
                    page='main'
                    message="팝업 차단을 해제해주세요!"
                    subHidden="hidden"
                    onExit={() => setShowAlertModal(false)}
                />
            )}
        </Styled.QuizWorldWrapper>
    )
}

export default QuizWorld;