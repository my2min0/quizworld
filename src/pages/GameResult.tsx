import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import Lottie from "lottie-react";
import ResultModal from "./components/ResultModal";
import AlertModal from './components/common/AlertModal.tsx'; 
import Button from './components/common/Button.tsx'; 
import resultMessage from '../data/resultMessages.json';
import type { PageType } from '../common/theme/types';
import * as Styled from './GameResult.style';

import Correct from '@/assets/images/Correct.svg';
import Wrong from '@/assets/images/Wrong.svg';
import FireWork from '../assets/lotties/firework.json';
import touch from '../assets/lotties/touch.json';
import korLogo from '@/assets/images/korLogo.png';
import mathLogo from '@/assets/images/mathLogo.png';
import engLogo from '@/assets/images/engLogo.png';

interface QuizData {
    type: string;
    question: string;
    passage: string;
    options?: string[];
    answer: string;
    explanation: string;
}

interface UserResult {
    selected: string;
    isCorrect: boolean;
    isSubmitted: boolean;
}

interface LocationState {
    quizData: QuizData[];
    userResult: UserResult[];
}

function getMessage(scorePercent: number): string {
    if (scorePercent >= 70) {
        const messages = resultMessage.high;
        return messages[Math.floor(Math.random() * messages.length)];
    } else if (scorePercent >= 40) {
        const messages = resultMessage.medium;
        return messages[Math.floor(Math.random() * messages.length)];
    } else {
        const messages = resultMessage.low;
        return messages[Math.floor(Math.random() * messages.length)];
    }
}

function GameResult() {
    const [ selectedIndex, setSelectedIndex ] = useState<number | null>(null);
    const [ resultModalOpen, setResultModalOpen ] = useState(false);
    const [ showExitModal, setShowExitModal ] = useState(false);
    const { subject } = useParams<{ subject: PageType }>();

    const location = useLocation();
    const state = location.state as LocationState | undefined;
    const navigate = useNavigate();

    useEffect(() => {
        if (!state) {
            navigate(`/${subject}/error`, { state: { errorType: 'missing-state'}});
        }
    }, [state, navigate])

    if (!state) return null;

    const { quizData, userResult } = state;

    if (!subject) {
        return <div>잘못된 접근입니다.</div>;
    }

    const logoMap: Record<string, string> = {
        kor: korLogo,
        math: mathLogo,
        eng: engLogo
    }

    const correctCount = userResult.filter(r => r.isCorrect).length;
    const totalCount = userResult.length;
    const half = Math.ceil(totalCount / 2);
    const scorePercent = (correctCount / totalCount) * 100;
    const message = getMessage(scorePercent);

    const handleExit = () => {
        setShowExitModal(true);
    }

    return (
        <Styled.GameResultWrapper page={ subject }>
            <Helmet>
                <meta name="robots" content="noindex, nofollow"/>
            </Helmet>
            <Lottie animationData={FireWork} loop={false} className='lottie'/>
            <img src={logoMap[subject]} alt='로고' className='subject-logo'/>
            <section className="message-section">
                <h1>{ message }</h1>
                <h3>{ totalCount } 문제 중 { correctCount } 문제를 맞췄어요!</h3>
            </section>

            <section className="num-section">
                <div className="row">
                    {quizData.slice(0, half).map((_q, idx) => (
                        <button key={idx} onClick={() => {
                            setSelectedIndex(idx);
                            setResultModalOpen(true);
                        }}>
                            <p>{idx+1}</p>
                            { userResult[idx].isCorrect 
                                ? (<img src={ Correct } alt='정답'/>)
                                : (<img src={ Wrong } alt='오답'/>)
                            }
                        </button>
                    ))}
                </div>
                <div className="row">
                    {quizData.slice(half).map((_q, idx) => (
                        <button key={idx + half} onClick={() => {
                            setSelectedIndex(idx + half);
                            setResultModalOpen(true);
                        }}>
                            <p>{idx + half + 1}</p>
                            { userResult[idx + half].isCorrect 
                                ? (<img src={ Correct } alt='정답'/>)
                                : (<img src={ Wrong } alt='오답'/>)
                            }
                        </button>
                    ))}
                </div>
            <div className="modal-info">
                <p className="click">어떤 문제였는지 궁금하다면? <br/><strong>번호 클릭!</strong></p>
                <Lottie animationData={touch} loop className='finger'/>
            </div>
            </section>

            <section className="button-section">
                <Button
                    page={ subject }
                    message="새 퀴즈 풀기"
                    className=''
                    colorType='able'
                    size='md'
                    onClick={() => navigate(`/${subject}`)}
                />
                <Button
                    page={ subject }
                    message="종료하기"
                    className=''
                    colorType='default'
                    size='md'
                    onClick={handleExit}
                />
            </section>

            {selectedIndex !== null && (
                <ResultModal
                    isOpen={resultModalOpen}
                    onClose={() => setResultModalOpen(false)}
                    question={quizData[selectedIndex]}
                    result={userResult[selectedIndex]}
                />
            )}

            {showExitModal && (
                <AlertModal
                    page={ subject }
                    message='게임을 종료하시겠습니까?'
                    subHidden=""
                    onClose={() => setShowExitModal(false)}
                    onExit={() => window.close()}
                />
            )}
        </Styled.GameResultWrapper>
    )
}

export default GameResult;