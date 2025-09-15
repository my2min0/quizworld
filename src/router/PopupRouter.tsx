import { Route, Routes } from "react-router-dom";
import GameMain from "../pages/GameMain";
import GameQuiz from "../pages/GameQuiz";
import GameResult from "../pages/GameResult";
import PopupError from '../pages/components/common/PopupError';

export default function PopupRouter() {
    return (
        <Routes>
            <Route path='/:subject' element={<GameMain/>}/>
            <Route path='/:subject/quiz' element={<GameQuiz/>}/>
            <Route path='/:subject/quiz/result' element={<GameResult/>}/>
            <Route path='/:subject/*' element={<PopupError />}/>
        </Routes>
    )
}