import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Button from "./common/Button";
import type { PageType } from "../../common/theme/types";
import * as Styled from './ResultModal.style';

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

interface IResultModalProps {
    isOpen: boolean;
    onClose: () => void;
    question: QuizData;
    result: UserResult;
}

function ResultModal({
    isOpen,
    onClose,
    question,
    result
}: IResultModalProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        
        if (isOpen) document.addEventListener('keydown', handleKeyDown);
        
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);
    
    const { subject } = useParams<{ subject: PageType }>();
    if (!subject) {
        return <div>잘못된 접근입니다.</div>;
    }

    if (!isOpen) return null;

    return (
        <Styled.ResultModalWrapper page={ subject }>
            <div className='backdrop'>
                <div className='modal'>
                    <div className='content'>
                        <section className="q-section">
                            <div>
                                <h1>문제</h1>
                                <h2 className="question">{question.question}</h2>
                            </div>
                            <h2 className="passage">{question.passage}</h2>
                        </section>

                        <section className="a-section">
                            <div className="selected">
                                <h3 className='submit-a'>제출한 답</h3>
                                <p className='answer-p'>{result.selected}</p>
                            </div>
                            <div className="answer">
                                <h3 className='correct-a'>정답</h3>
                                <p className="answer-p">{question.answer}</p>
                            </div>
                            <span className="explanation">
                                <p>{question.explanation}</p>
                            </span>
                        </section>
                    </div>

                    <Button
                        page={ subject }
                        message='닫기'
                        className='btn'
                        colorType="default"
                        size='sm'
                        onClick={onClose}
                    />
                </div>
            </div>
        </Styled.ResultModalWrapper>
    )
}

export default ResultModal;