import type { DefaultTheme } from "styled-components";

export const colors = {
    // 1단계(lightest) : 배경
    // 2단계(light) : 요소들 배경, 버튼 비활성화
    // 3단계(primary) : 기본 버튼, 
    // 4단계(dark) : 비활성화 텍스트, 버튼 호버
    // 5단계(darkest) : 기본 텍스트, border, 그림자
    main: {
        lightest: '#e5f3fd',
        light: '#93d3f9',
        primary: '#4FC3F7',
        dark: '#297a9d',
        darkest: '#02131b'
    },
    kor: {
        lightest: '#ffecee',
        light: '#ffcacf',
        primary: '#FF96A1',
        dark: '#f76f81',
        darkest: '#2c0006'
    },
    math: {
        lightest: '#f0ffe8',
        light: '#ddfac0',
        primary: '#BAE884',
        dark: '#7ea057',
        darkest: '#091102'
    },
    eng: {
        lightest: '#f2effb',
        light: '#e6def8',
        primary: '#C2ADED',
        dark: '#a079e1',
        darkest: '#18082d'
    },
    common: {
        light_correct: '#97c8ff', // 200
        correct: '#0288D1', // 500
        dark_correct: '#003e62', // 800
        text_correct: '#001222', // 950

        light_wrong: '#f9d3d3', // 200
        wrong: '#EF5350', // 400
        dark_wrong: '#bc2e2a', // 600
        text_wrong: '#290403', // 950

        background: '#F7F7F7',
        text: '#333333',
    }
} as const;

export type Subject = keyof typeof colors;
export type Shade = keyof typeof colors['kor']; // 대표적으로 kor 사용한 것! lightest, light, primary, dark, darkest 얘네들 내보냄


// 스타일 적용 시, 너무 길어지는 코드 방지용 헬퍼 함수
export const color = <
    Section extends keyof DefaultTheme['colors'],
    Shade extends keyof DefaultTheme['colors'][Section]
>(
    section: Section,
    shade: Shade
) => {
    return ({ theme }: { theme: DefaultTheme }) => theme.colors[section][shade];
};