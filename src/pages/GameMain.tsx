import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import AlertModal from './components/common/AlertModal.tsx'; 
import Button from './components/common/Button.tsx'; 
import PopupError from './components/common/PopupError.tsx';
import type { PageType } from '../common/theme/types.ts';
import * as Styled from './GameMain.style';

import korLogo from '../assets/images/korLogo.png';
import mathLogo from '../assets/images/mathLogo.png';
import engLogo from '../assets/images/engLogo.png';

function GameMain() {
    // subject === 'kor' | 'math' | 'eng'
    const { subject } = useParams<{ subject: PageType }>();

    const metaData: Record<PageType, { title: string; description: string; }> = {
        kor: {
            title: '꾸비의 국어 탐험',
            description: '한글 낱말퀴즈로 어휘력을 키워보자!'
        },
        math: {
            title: '꾸비의 수학 미로',
            description: '수학퀴즈로 수학 실력 키우기~'
        },
        eng: {
            title: '꾸비의 영어 정글',
            description: '영어퀴즈로 영어 실력 향상!'
        },
        main : {
            title: '퀴즈 월드',
            description: '꾸비의 퀴즈 월드에 오신 것을 환영합니다!'
        }
    }

    const logoMap: Record<string, string> = {
        kor: korLogo,
        math: mathLogo,
        eng: engLogo
    }

    const [ showAlert, setShowAlert ] = useState(false);
    const [isGradeOpen, setIsGradeOpen] = useState(false);
    const [ selectedGrade, setSelectedGrade ] = useState('');
    const [ selectedSemester, setSelectedSemester ] = useState('');
    const [ selectedQuestions, setSelectedQuestions ] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    // 외부 클릭시 학년 선택 창 사라지는 이벤트
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                dropdownRef.current &&
                e.target instanceof Node &&
                !dropdownRef.current.contains(e.target)
            ) {
                setIsGradeOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    if (!subject) {
        return <PopupError/>;
    }

    const { title, description } = metaData[subject] || {
        title: '퀴즈 월드',
        description: '꾸비의 퀴즈 월드에 오신 것을 환영합니다!'
    }

    const handleStart = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!selectedGrade || !selectedSemester || !selectedQuestions) {
            setShowAlert(true);
            return;
        }
        navigate('./quiz');
    }

    const handleGradeToggle = () => {
        setIsGradeOpen(!isGradeOpen);
    };

    const handleSelect = (grade: string) => {
        setSelectedGrade(grade);
        setIsGradeOpen(false);
    };

    return (
        <Styled.GameMainWrapper page={ subject }>
            <Helmet>
                <title>{ title }</title>
                <meta name="description" content={ description }/>
                <meta property='og:title' content={ title }/>
                <meta property='og:description' content={ description }/>
                <meta property="og:image" content={`../assets/images/${subject}CardImg.png`}/>
                <meta property="og:url" content={`/${subject}`}/>
            </Helmet>
            <img src={logoMap[subject]} alt={`${ title } 로고`} className='subject-logo' width={300} height={223.59}/>
            <form onSubmit={handleStart}>
                {/* 모바일에서 학년 선택 - 드롭다운 메뉴 */}
                    <div className="grade_mobile" ref={dropdownRef}>
                        <span id="grade-label" className="sr-only">학년 선택</span>
                        <div className="selected" onClick={handleGradeToggle} role="button" aria-haspopup="listbox" aria-controls="grade-list" aria-labelledby="grade-label">
                            <a href="#">
                                <span>{selectedGrade || '학년 선택'}</span>
                                <svg width="19" height="19" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 10L14 22L26 10" stroke="#666666" stroke-width="2.8" stroke-linecap="round"/>
                                </svg>
                            </a>
                        </div>
                        {isGradeOpen && (
                            <div>
                                <div className="backdrop" onClick={() => setIsGradeOpen(false)}></div>
                                <div className="options">
                                    <span></span>
                                    <ul id="grade-list" role="listbox">
                                        {['3학년', '4학년', '5학년', '6학년'].map((grade) => (
                                            <li key={grade} role="option">
                                                <a href="#" 
                                                    className={selectedGrade === grade? 'selected-option' : ''}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleSelect(grade);
                                                        setSelectedGrade(grade);
                                                    }}
                                                >
                                                    {grade}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="radio">
                        {/* 데스크탑에서 학년 선택 - 라디오 박스 안에 */}
                        <fieldset className="grade_pc">
                            <legend className="sr-only">학년 선택</legend>
                            {['3학년', '4학년', '5학년', '6학년'].map((grade) => (
                                <label key={grade}>
                                    <input type="radio" name="grade" value={grade}
                                        // 드롭다운에서 선택한 내용이 있다면 체크되어있도록
                                        checked={selectedGrade === grade}
                                        onChange={(e) => setSelectedGrade(e.target.value)}/>
                                    {grade}
                                </label>
                            ))}
                        </fieldset>
                        <fieldset>
                            <legend className="sr-only">학기 선택</legend>
                            {['1학기', '2학기'].map((semester) => (
                                <label>
                                    <input type="radio" name="semester" value={semester}
                                        onChange={(e) => setSelectedSemester(e.target.value)}/>
                                    {semester}
                                </label>
                            ))}
                        </fieldset>
                        <fieldset>
                            <legend className="sr-only">문항 개수 선택</legend>
                            {['5문항', '10문항'].map((questions) => (
                                <label>
                                    <input type="radio" name="questions" value={questions}
                                        onChange={(e) => setSelectedQuestions(e.target.value)}/>
                                    {questions}
                                </label>
                            ))}
                        </fieldset>
                    </div>
                <Button
                    page={ subject }
                    message='시작하기'
                    className='main-btn'
                    colorType='default'
                    size='sm'
                />
                {showAlert && (
                    <AlertModal
                        page={ subject }
                        message="모든 항목을 선택하세요"
                        subHidden=''
                        onExit={() => setShowAlert(false)}
                    />
                )}
            </form>
        </Styled.GameMainWrapper>
    )
}

export default GameMain;