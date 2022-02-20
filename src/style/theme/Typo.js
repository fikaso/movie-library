export const calcFontSize = (size, base = 16) => {
  return `${size / base}rem`;
};

export const calcLineHeight = (size, base = 16) => {
  return `${size / base}`;
};

export const setFontSize = (size, base = 16, lineHeightSize = null) => `
  font-size: ${size}px; // Browser fallback
  font-size: calc(${size / base} * 1rem);
  line-height: ${
    lineHeightSize ? parseFloat(lineHeightSize / size) : parseFloat(size / base)
  };
`;

export const typo = {
  h1: calcFontSize(64),
  h2: calcFontSize(48),
  h3: calcFontSize(32),
  h4: calcFontSize(24),
  h5: calcFontSize(20),
  h6: calcFontSize(16),
  large: calcFontSize(20),
  regular: calcFontSize(16),
  small: calcFontSize(14),
  extraSmall: calcFontSize(12),
  caption: calcFontSize(14),

  weight: {
    regular: 400,
    semiBold: 600,
    bold: 700,
  },
};
