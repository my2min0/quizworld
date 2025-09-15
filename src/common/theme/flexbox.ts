import { css } from 'styled-components';

interface IFlexboxProps {
    display?: 'flex' | 'inline-flex',
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse',
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly',
    align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch',
}

export const flexbox = (flex: IFlexboxProps) => css`
    display: ${flex?.display ?? 'flex'};
    flex-direction: ${flex?.direction ?? 'row'};
    justify-content: ${flex?.justify ?? 'flex-start'};
    align-items: ${flex?.align ?? 'flex-start'};
`;