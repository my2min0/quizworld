import Lottie, { type LottieComponentProps } from 'lottie-react';
import MainLoading from '../../../assets/lotties/MainLoading.json'
import KorLoading from '../../../assets/lotties/KorLoading.json'
import MathLoading from '../../../assets/lotties/MathLoading.json'
import EngLoading from '../../../assets/lotties/EngLoading.json'
import type { PageType } from '../../../common/theme/types.ts';
import * as Styled from './Loading.style.tsx';

interface ILoadingProps {
    page: PageType;
}

const animationMap: Record<PageType, LottieComponentProps['animationData']> = {
    main: MainLoading,
    kor: KorLoading,
    math: MathLoading,
    eng: EngLoading
}

function Loading({ page }: ILoadingProps) {
    const animationData = animationMap[page];

    return (
        <Styled.LoadingWrapper page={ page }>
            <Lottie animationData={animationData} loop className="lottie"/>
        </Styled.LoadingWrapper>
    )
}

export default Loading;