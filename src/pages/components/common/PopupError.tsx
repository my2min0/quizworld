import { useLocation, useNavigate, useParams } from "react-router-dom";
import Lottie from "lottie-react";
import ErrorLottie from '../../../assets/lotties/error.json';
import { errorMessage, type ErrorType } from "../../../common/constants/error";
import type { PageType } from "../../../common/theme/types";
import * as Styled from './PopupError.style';
import Button from "./Button";


function Error() {
    // const [searchParams] = useSearchParams();
    // const type = searchParams.get('type') ?? 'unknown';

    const location = useLocation();
    const state = location.state as { errorType?: ErrorType };

    const navigate = useNavigate();

    // 에러 타입이 없거나, 정의되지 않은 키라면 'unknown' 사용
    const errorType: ErrorType = state?.errorType && errorMessage[state.errorType]
        ? state.errorType
        : 'unknown';
    const { title, description } = errorMessage[errorType];

    const { subject } = useParams<{ subject: PageType }>();

    if (!subject) {
        return <div>잘못된 접근입니다.</div>;
    }

    return (
        <Styled.ErrorWrapper page={ subject }>
            <Lottie animationData={ErrorLottie} loop className="lottie"/>
            <h1>{ title }</h1>
            <p>{ description }</p>
            <div className='btn-group'>
                <Button
                    page={ subject }
                    message='시작화면으로'
                    className="refresh"
                    colorType="able"
                    size="sm"
                    onClick={() => navigate(`/${subject}`)}
                />
                <Button
                    page={ subject }
                    message='창 닫기'
                    className="close"
                    colorType="able"
                    size="sm"
                    onClick={() => window.close()}
                />
            </div>
        </Styled.ErrorWrapper>
    )
}

export default Error;