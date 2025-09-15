import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Loading from "../pages/components/common/Loading";

// 페이지 라우터 스플리팅 ( 라우팅에 따른 컴포넌트 파일 분리 )
const QuizWorld = lazy(() => import("../pages/QuizWorld"));
const GameMain = lazy(() => import("../pages/GameMain"));
const GameQuiz = lazy(() => import("../pages/GameQuiz"));
const GameResult = lazy(() => import("../pages/GameResult"));
const PopupError = lazy(() => import("../pages/components/common/PopupError"));

function AppRouter() {
    return (
        // Suspense : 비동기 작업 ( 필요한 컴포넌트를 동적으로 불러올 때 )을 처리할 때 사용하는 컴포넌트
        // 어떤 컴포넌트를 동적으로 로딩하는 동안 로딩 중임을 보여주는 로딩 UI를 보여주기 위해 사용"
        <Suspense fallback={<Loading page='main'/>}>
            <Routes>
                {/* 메인 */}
                <Route path="/quiz-world" element={<QuizWorld/>}/>
                <Route path="*" element={<Navigate to='/quiz-world' replace/>}/>
                {/* 팝업 */}
                <Route path='/:subject' element={<GameMain/>}/>
                <Route path='/:subject/quiz' element={<GameQuiz/>}/>
                <Route path='/:subject/quiz/result' element={<GameResult/>}/>
                <Route path='/:subject/*' element={<PopupError />}/>
                </Routes>
        </Suspense>
    )
}

export default AppRouter;