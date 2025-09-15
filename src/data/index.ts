import kor from './kor.json'
import math from './math.json'
import eng from './eng.json'
import type { PageType } from '../common/theme/types'

// kor을 기준으로 구조를 가져옴 ( typeof kor )
export const quizDataMap:  Record<PageType, typeof kor> = {
    kor,
    math,
    eng
}