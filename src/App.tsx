import { useEffect, useState } from 'react';
// 리액트에서 <head> 태그 내용을 설정할 수 있게 해주는 컴포넌트
import { Helmet } from 'react-helmet-async';
import './common/theme/font.css';
import './common/theme/reset.css';
import AppRouter from './router/AppRouter';
import Loading from './pages/components/common/Loading';

function App() {
    const [ isLoading, setIsLoading ] = useState(true);
    // 모바일용 높이 설정
    // 모바일 브라우저의 100vh가 진짜 100% 높이가 아닌 경우가 있어서
    // 뷰포트 높이를 정확히 맞추기 위해 넣음
    // 모바일 브라우저 주소창은 자동으로 숨겨졌다 나타나기 때문!

    // useCallback : 함수를 기억해서 불필요한 재생성 방지
    // 의미없는 리랜더링이나 계산 줄이기 가능
    useEffect(() => {
        const setViewportHeight = () => {
            const mobileVh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${mobileVh}px`);
        };

        setViewportHeight();
        window.addEventListener('resize', setViewportHeight);

        return () => {
            window.removeEventListener('resize', setViewportHeight);
        };
    }, []);

    // 로딩 화면 띄우기 (실제 로딩 시간 동안)
    useEffect(() => {
        const handleLoad = () => {
            setIsLoading(false);
        };

        if (document.readyState === 'complete') {
            setIsLoading(false);
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    if (isLoading) {
        return <Loading page={'main'}/>;
    }

    return (
        <>
            <Helmet>
                <title>꾸비의 퀴즈 월드</title>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="초등학생을 위한 간단한 퀴즈 게임!"/>
                <meta property="og:url" content="www."/>
            </Helmet>
            <AppRouter/>
        </>
    )
}

export default App;
