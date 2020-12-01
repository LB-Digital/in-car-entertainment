// styles/theme.js

import { css } from 'styled-components';

import { lightMapStyles, darkMapStyles } from './map-styles';


// *** base styles ***
const spacing = (screenDimensions) => {
    const spacingRaw = {
        xs: screenDimensions.width * 0.003,
        sm: screenDimensions.width * 0.006,
        md: screenDimensions.width * 0.012,
        lg: screenDimensions.width * 0.024,
        xl: screenDimensions.width * 0.048
    };

    return {
        raw: spacingRaw,

        xs: `${spacingRaw.xs}px`,
        sm: `${spacingRaw.sm}px`,
        md: `${spacingRaw.md}px`,
        lg: `${spacingRaw.lg}px`,
        xl: `${spacingRaw.xl}px`,
    }
};

const fontSizes = (screenDimensions) => ({
    // root: '16px',

    // h1: '2.5rem',
    // h2: '2rem',
    // h3: '1.75rem',
    // p: '1rem',
    // small: '0.9rem',

    h1: `${screenDimensions.width * 0.1}px`,
    h2: `${screenDimensions.width * 0.025}px`,
    h3: `${screenDimensions.width * 0.018}px`,

    p: `${screenDimensions.width * 0.01}px`,
});

const iconSizes = (screenDimensions) => ({
    sm: `${screenDimensions.width * 0.03}px`,
    md: `${screenDimensions.width * 0.06}px`,
    lg: `${screenDimensions.width * 0.09}px`
});

const fontWeights = {
    light: 200,
    medium: 400,
    bold: 700
};

const cursor = (screenDimensions) => ({
    size: `${screenDimensions.width * 0.01}px`,
});


// *** split styles (light/dark) ***
const colors = {
    default: {
        pages: {
            music: '#C004D9',
            nav: '#5A13F2',
            car: '#138AF2'
        }
    },

    light: {
        pageBackground: '#000',
        screenBackground: '#eee',

        black: '#000',
        white: '#fff',
        dark: '#111'
    },

    dark: {
        pageBackground: '#fff',
        screenBackground: '#111',

        black: '#fff',
        white: '#000',
        dark: '#eee'
    }
};





const baseTheme = (screenDimensions) => ({
    spacing: spacing(screenDimensions),
    fontSizes: fontSizes(screenDimensions),
    iconSizes: iconSizes(screenDimensions),
    fontWeights,
    cursor: cursor(screenDimensions),
    colors: colors.default,

    borderRadius: `${screenDimensions.width * 0.007}px`
});

export const lightTheme = (screenDimensions) => {
    const theme = baseTheme(screenDimensions);

    return {
        ...theme,

        colors: {
            ...theme.colors,
            ...colors.light
        },

        mapStyles: lightMapStyles
    };
};

export const darkTheme = (screenDimensions) => {
    const theme = baseTheme(screenDimensions);

    return {
        ...theme,

        colors: {
            ...theme.colors,
            ...colors.dark
        },

        mapStyles: darkMapStyles
    };
};