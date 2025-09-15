import * as Styled from './Button.style.tsx';

interface IButtonProps {
    page: 'main' | 'kor' | 'math' | 'eng';
    message: string;
    className?: string;
    colorType: string;
    size: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function Button(
    { page, message, className='', colorType, size, onClick }: IButtonProps
) {
    const isDisabled = colorType === 'disable';
    
    return (
        <Styled.Button page={ page }>
            <button
                type='submit'
                className={`${className} ${colorType} ${size}`}
                disabled={isDisabled}
                onClick={onClick}
            >
                {message}
            </button>
        </Styled.Button>
    )
}

export default Button;