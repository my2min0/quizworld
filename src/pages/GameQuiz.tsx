import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import AlertModal from './components/common/AlertModal.tsx'; 
import Button from './components/common/Button.tsx'; 
import Loading from './components/common/Loading.tsx';
import MultipleType from './components/MultipleType.tsx';
import OXType from './components/OXType.tsx';
import ShortType from './components/ShortType.tsx';
import { quizDataMap } from '../data/index.ts';
import { normalizeAnswer } from '../common/utils/normalizeAnswer.ts';
import type { JsonType } from '../common/theme/types.ts';
import * as Styled from './GameQuiz.style';

import Correct from '@/assets/images/Correct.svg';
import Wrong from '@/assets/images/Wrong.svg';

function GameQuiz() {
    // subject === 'kor' | 'math' | 'eng'
    const { subject } = useParams<{ subject: JsonType }>();
    // 에러 방지를 위해, undefined인 경우 정의해줌
    const quizData = subject ? quizDataMap[subject] : [];

    const [ isLoading, setIsLoading ] = useState(true);
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ showExitModal, setShowExitModal ] = useState(false);
    const [ showAlertModal, setShowAlertModal ] = useState(false);
    const [ userAnswer, setUserAnswer ] = useState<string | null>(null);
    const [ userResult, setUserResult ] = useState(
        Array(quizData.length).fill(null)
    ); // 사용자가 문제 푼 이력 저장
    const [ isSubmitted, setIsSubmitted ] = useState(false);
    const currentQuestion = quizData[currentIndex];
    const currentUserAnswer = userResult[currentIndex];
    const lastIndex = quizData.length - 1;
    const navigate = useNavigate();

    // 로딩
    useEffect(() => {
        if (!subject) {
            navigate('/');
            return;
        }

        // 백엔드 api 호출
        const timer = setTimeout(() => {
            setIsLoading(false); // 데이터 준비 끝
        }, 2500); // 2.5초짜리 가짜 로딩

        return () => clearTimeout(timer); // clean up
    }, [subject, navigate]);

    useEffect(() => {
        if (!subject) {
            navigate(`/${subject}/error`, { state: { errorType: 'missing-state'}});
        }
    }, [subject, navigate]);

    if (!subject) return null;

    if (isLoading) {
        return <Loading page={ subject }/>
    }
    

    // 답변 선택 핸들러
    const handleAnswerSelect = (a: string) => {
        if (isSubmitted) return; // 제출 후에는 재선택 불가
        setUserAnswer(a);
    };

    // 제출 버튼 핸들러
    const handleClickSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        handleSubmit();
    }

    const handleSubmit = () => {
        // 정답 입력 안했다면 경고 모달 오픈
        if (!userAnswer) {
            setShowAlertModal(true);
            return;
        }

        setIsSubmitted(true);

        // 사용자의 답, 정답/오답, 제출여부 저장
        const isCorrect = currentQuestion.answer === userAnswer;
        const updateResult = [...userResult];
        updateResult[currentIndex] = {
            selected: userAnswer,
            isCorrect,
            isSubmitted: true,
        };
        setUserResult(updateResult);
    };

    // 컬러 타입 결정 함수
    const getColorType = (opt: string) => {
        // 제출 전
        // 선택 -> selected, 선택전/미선택 -> default
        if (!isSubmitted) {
            return userAnswer === opt ? 'selected' : 'default';
        }

        // 제출 후
        // 정답은 사용자 선택 여부와 상관없이 correct
        if (opt === currentQuestion.answer) {
            return 'correct';
        }
        // 사용자의 선택이 오답일 때는 selected로 남겨둠
        if (opt === currentUserAnswer.selected && opt !== currentQuestion.answer) {
            return 'selected';
        }
        // 나머지는 오답 wrong
        return 'wrong';
    };

    // 제출 전, 문제 옵션들 클릭 가능
    const isButtonClickable = () => {
        return !isSubmitted;
    };

    // 이전, 다음, 종료 버튼 핸들러
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < lastIndex) {
            setCurrentIndex(next => next + 1);

            // 제출여부, 사용자의 답 초기화
            // 다음 문제에 정보가 없으면 (사용자가 풀기 전이면)
            if (userResult[currentIndex + 1] === null) {
                setIsSubmitted(false);
                setUserAnswer(null);
            }
        }
    };

    const handleResult = () => {
        navigate(`/${subject}/quiz/result`, { state: { quizData, userResult }});
    };


    // 문제 타입에 따른 객관식, 주관식, OX 옵션으로 변경
    const renderQuestionComponent = () => {
        switch (currentQuestion.type) {
            case 'MC':
                return (
                    <MultipleType
                        options={currentQuestion.options ?? []}
                        // undefined 방지를 위해 ?? [] 추가 
                        onAnswerSelect={handleAnswerSelect}
                        getColorType={getColorType}
                        isButtonClickable={isButtonClickable}
                    />
                )
            case 'OX':
                return (
                    <OXType
                        onAnswerSelect={handleAnswerSelect}
                        getColorType={getColorType}
                        isButtonClickable={isButtonClickable}
                    />
                )
            case 'SB':
                return (
                    <ShortType
                        userAnswer={userAnswer}
                        isSubmitted={isSubmitted}
                        onAnswerSelect={handleAnswerSelect}
                        isButtonClickable={isButtonClickable}
                        isCorrect={normalizeAnswer(subject, userAnswer) === normalizeAnswer(subject, currentQuestion.answer)}
                        answer={currentQuestion.answer}
                        subject={subject}
                        onEnterSubmit={handleSubmit}
                    />
                )
            default:
                navigate(`/${subject}/error`, {state: { errorType: 'missing-state'}});
                return null;
        }
    }

    

    return (
        <Styled.GameQuizWrapper page={ subject }>
            <Helmet>
                <meta name="robots" content="noindex, nofollow"/>
            </Helmet>
            <section>
                <Styled.QuestionWrapper page={ subject }>
                    <div className='question'>
                        {isSubmitted && (
                            <div className="marking">
                                <span className="sr-only">{currentUserAnswer.isCorrect ? "정답" : "오답"}</span>
                                {currentUserAnswer.isCorrect 
                                    ? <img src={ Correct }/> 
                                    : <img src={ Wrong }/>}
                            </div>
                        )}
                        <h2>문{currentIndex + 1}</h2>
                        <p>{currentQuestion.question}</p>
                    </div>
                </Styled.QuestionWrapper>
                <Styled.ContentWrapper page={ subject }>
                    <div className='passage'>
                        <span className="sr-only">문제 지문</span>
                        <p>{currentQuestion.passage}</p>
                    </div>
                    <div className="options">{renderQuestionComponent()}</div>
                    {isSubmitted && (
                        <div className='explanation'>
                            <h3>해설</h3>
                            <div>
                                <p>{currentQuestion.explanation}</p>
                            </div>
                        </div>
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
    
                    {showAlertModal && (
                        <AlertModal
                            page={ subject }
                            message="정답을 입력해주세요"
                            subHidden="hidden"
                            onExit={() => setShowAlertModal(false)}
                        />
                    )}
                </Styled.ContentWrapper>
            </section>
            <Styled.ButtonWrapper>
                <div className='btn-set'>
                    {!isSubmitted ? (
                        <Button
                            page={ subject }
                            message="제출하기"
                            className=""
                            colorType="default"
                            size="lg"
                            onClick={handleClickSubmit}
                        />
                    ) : (
                        <div>
                            <Button
                                page={ subject }
                                message="이전"
                                className=""
                                colorType={currentIndex === 0 ? 'disable' : 'able'}
                                size="md"
                                onClick={handlePrev}
                            />
                            <Button
                                page={ subject }
                                message={currentIndex === lastIndex ? '결과 확인' : '다음'}
                                className=""
                                colorType="default"
                                size="md"
                                onClick={currentIndex === lastIndex ? handleResult : handleNext}
                            />
                        </div>
                    )}
                </div>
            </Styled.ButtonWrapper>
        </Styled.GameQuizWrapper>
    )
}

export default GameQuiz;