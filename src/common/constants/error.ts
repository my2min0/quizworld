export const errorMessage = {
    'invalid-subject': {
        title: '잘못된 접근입니다',
        description: '선택한 과목 정보가 올바르지 않습니다'
    },
    'missing-state': {
        title: '게임 정보를 불러올 수 없어요',
        description: '게임 시작에 필요한 정보가 누락되었습니다'
    },
    'unknown': {
        title: '문제가 발생했어요!',
        description: '예상치 못한 오류가 발생했습니다'
    }
} as const;

export type ErrorType = keyof typeof errorMessage;