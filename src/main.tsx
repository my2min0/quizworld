// 경로를 나누기 위해 사용하는 라우터 컨테이너
// 경로를 SPA (Single Page Application) 안에서 처리할 수 있게 해 줌
// 주소창이 바뀔 때 새로고침 없이 컴포넌트를 보여줌
import { BrowserRouter } from "react-router-dom";

// 페이지마다 <Helmet> 태그를 붙일 수 있도록 도와주는 provider
import { HelmetProvider } from "react-helmet-async";

// 리액트 앱에서 서버 데이터 (ex. api)를 쉽게 관리하고 캐싱까지 자동으로 해주는 도구
// 서버 데이터 요청, 로딩 상태 관리, 에러 처리, 캐싱, 리페칭 등을 한 방에 자동으로 처리
// useEffect + fetch 조합 없이 비동기 api 처리 가능
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// 모든 컴포넌트에서 props.theme 접근할 수 있도록!
// /src/common/theme/colors.ts에 정의해 둔 색상들 사용하기 위함
import { ThemeProvider } from "styled-components";
import { theme } from "./common/theme/theme.ts";

import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <HelmetProvider>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={ theme }>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </ThemeProvider>
        </QueryClientProvider>
    </HelmetProvider>
);