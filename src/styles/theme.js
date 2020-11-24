// styles/theme.js


// *** base styles ***
const spacing = (screenDimensions) => ({
    // xs: '4px',
    // sm: '8px',
    // md: '16px',
    // lg: '24px',
    // xl: '48px',
    xs: `${screenDimensions.width * 0.003}px`,
    sm: `${screenDimensions.width * 0.006}px`,
    md: `${screenDimensions.width * 0.012}px`,
    lg: `${screenDimensions.width * 0.024}px`,
    xl: `${screenDimensions.width * 0.048}px`
});

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
    sm: '24px',
    md: `${screenDimensions.width * 0.03}px`,
    lg: `${screenDimensions.width * 0.09}px`
});

const fontWeights = {
    light: 200,
    medium: 400,
    bold: 700
};

const cursor = (screenDimensions) => ({
    size: `${screenDimensions.width * 0.02}px`,
});


// *** split styles (light/dark) ***
const colors = {
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

    borderRadius: `${screenDimensions.width * 0.007}px`
});

export const lightTheme = (screenDimensions) => ({
    ...baseTheme(screenDimensions),

    colors: colors.light
});

export const darkTheme = (screenDimensions) => ({
    ...baseTheme(screenDimensions),

    colors: colors.dark
});