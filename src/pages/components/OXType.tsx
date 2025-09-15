import { useRef, useState } from 'react';
import { useParams } from "react-router-dom";
import type { PageType, ColorType } from '../../common/theme/types';
import * as Styled from './OXType.style';

import O from '@/assets/images/O.svg';
import WhiteO from '@/assets/images/WhiteO.svg';
import X from '@/assets/images/X.svg';
import WhiteX from '@/assets/images/WhiteX.svg';

interface IOXTypeProps {
    onAnswerSelect: (answer: string) => void;
    getColorType: (option: string) => ColorType;
    isButtonClickable: () => boolean;
}

function OXType({
    onAnswerSelect,
    getColorType,
    isButtonClickable
}: IOXTypeProps) {
    // 키보드 네비게이션에서 방향키로 옵션 선택
    const [_selected, setSelected] = useState<string | null>(null);
    const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const { subject } = useParams<{ subject: PageType }>();
    if (!subject) {
        return <div>잘못된 접근입니다.</div>;
    }

    const options = ['O', 'X'];

    const handleKeyDown = (e: React.KeyboardEvent, i: number) => {
        let nextIndex = i;

        // 오른쪽 화살표 또는 아래 방향키 : 다음 옵션으로 이동
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            nextIndex = (i + 1) % options.length;
            e.preventDefault();
            setSelected(options[nextIndex]);
            optionRefs.current[nextIndex]?.focus();
        }
        // 왼쪽 화살표 또는 위 방향키 : 이전 옵션으로 이동
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            nextIndex = (i - 1 + options.length) % options.length;
            e.preventDefault();
            setSelected(options[nextIndex]);
            optionRefs.current[nextIndex]?.focus();
        } else if (e.key === 'Enter' || e.key === ' ') {
            // Space, Enter : 해당 옵션 선택
            e.preventDefault();
            onAnswerSelect(options[i]); 
        } else {
            return; // 방향키 외의 키는 무시
        }

        e.preventDefault(); // 기본 동장 (스크롤 등) 방지

        // 내부 상태 변경
        setSelected(options[nextIndex]); // 내부 상태 변경
        
        // 해당 옵션 버튼에 포커스 이동
        optionRefs.current[nextIndex]?.focus();
    };

    return (
        <Styled.QuizWrapper>
            <fieldset>
                <Styled.OButton 
                    colorType={getColorType('O')}
                    page={subject}
                    ref={(el) => {optionRefs.current[0] = el}}
                    disabled={!isButtonClickable()}
                    onClick={() => onAnswerSelect('O')}
                    onKeyDown={(e) => handleKeyDown(e, 0)}
                >
                    {getColorType('O') === 'correct'
                        ? (<img src={ WhiteO } alt='O 버튼'/>)
                        : (<img src={ O } alt='O 버튼'/>)
                    }
                    {getColorType('O') === "correct" && (
                        <div className='correct'>
                            <p>정답</p>
                        </div>
                    )}
                    <span className="sr-only">O</span>
                </Styled.OButton>
                <Styled.XButton 
                    colorType={getColorType('X')}
                    page={subject}
                    ref={(el) => {optionRefs.current[1] = el}}
                    disabled={!isButtonClickable()}
                    onClick={() => onAnswerSelect('X')}
                    onKeyDown={(e) => handleKeyDown(e, 1)}
                >
                    {getColorType('X') === 'correct'
                        ? (<img src={ WhiteX } alt='X 버튼'/>)
                        : (<img src={ X } alt='X 버튼'/>)
                    }
                    {getColorType('X') === "correct" && (
                        <div className='correct'>
                            <p>정답</p>
                        </div>
                    )}
                    <span className="sr-only">X</span>
                </Styled.XButton>
            </fieldset>
        </Styled.QuizWrapper>
    )
}

export default OXType;