import { useRef, useState } from 'react';
import { useParams } from "react-router-dom";
import type { PageType, ColorType } from '../../common/theme/types';
import * as Styled from './MultipleType.style';

interface IMultipleTypeProps {
    options: string[];
    onAnswerSelect: (answer: string) => void;
    getColorType: (option: string) => ColorType;
    isButtonClickable: () => boolean;
};

function MultipleType({
    options,
    onAnswerSelect,
    getColorType,
    isButtonClickable
}: IMultipleTypeProps) {
    
    // 키보드 네비게이션에서 방향키로 옵션 선택 (탭 키로는 다른 옵션 선택 불가)
    const [selected, setSelected] = useState<string | null>(null);
    const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);
    
    const { subject } = useParams<{ subject: PageType }>();
    if (!subject) {
        return <div>잘못된 접근입니다.</div>;
    }

    const handleKeyDown = (e: React.KeyboardEvent, i: number) => {
        let nextIndex = i;

        // 오른쪽 화살표 또는 아래 방향키 : 다음 옵션으로 이동
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            nextIndex = (i + 1) % options.length;
            e.preventDefault();
            optionRefs.current[nextIndex]?.focus();
            return;
        }

        // 왼쪽 화살표 또는 위 방향키 : 이전 옵션으로 이동
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            nextIndex = (i - 1 + options.length) % options.length;
            e.preventDefault();
            optionRefs.current[nextIndex]?.focus();
            return;
        }
        
        // Space, Enter : 해당 옵션 선택
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setSelected(options[nextIndex]);
            onAnswerSelect(options[i]); 
            return;
        }
    };

    return (
        <Styled.QuizWrapper>
            <fieldset>
                {options.map((opt, i) => {
                    const isSelected = selected == opt;
                    // 선택된 항목이 없으면 첫 번째 항목만 tabIndex = 0
                    // 선택된 항목이 있으면 해당 항목만 tabIndex = 0
                    const tabIndex = selected === null
                        ? i === 0 ? 0 : -1
                        : isSelected ? 0 : -1;
                    return (
                        <Styled.OptWrapper 
                            colorType={getColorType(opt)}
                            page={subject}
                            key={i}
                            type="button"
                            role="radio"
                            aria-checked={isSelected}
                            tabIndex={tabIndex}
                            ref={(el) => {optionRefs.current[i] = el}}
                            disabled={!isButtonClickable}
                            onClick={() => {
                                setSelected(opt);
                                onAnswerSelect(opt);
                            }}
                            onKeyDown={(e) => handleKeyDown(e, i)}
                        >
                            {opt}
                            {getColorType(opt) === "correct" && (
                                <span className='correct'>
                                    <p>정답</p>
                                </span>
                            )}
                        </Styled.OptWrapper>
                    )
                })}
            </fieldset>
        </Styled.QuizWrapper>
    )
}

export default MultipleType;