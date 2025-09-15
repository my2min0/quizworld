export const normalizeAnswer = (subject: string, answer: string | null) => {
    if (!answer) return "";

    if (subject === 'math') {
        // 숫자와 소수점만 허용
        return answer.replace(/[^0-9.]/g, "");
    }

    if (subject === 'eng' || subject === 'kor') {
        // 알파벳/한글/숫자/공백만 허용, 기타 기호 제거
        const cleaned = answer.replace(/[.,!?~`"'@#$%^&*()[\]{}<>=/\\|]/g, "");
        return subject === 'eng' ? cleaned.toLowerCase() : cleaned;
    }

    return answer;
}