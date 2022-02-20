import { calcFontSize } from './Typo';

export const calcSpacing = (multiplier, base = 8) => {
  return `${calcFontSize(multiplier * base)}`;
};

export const setSpacing = (multiplier, base = 8) => {
  return `margin-bottom: ${calcFontSize(multiplier * base)}`;
};

export const spacing = {
  _extraSmall: calcSpacing(0.25),
  _small: calcSpacing(0.5),
  _1: calcSpacing(1),
  _1_5: calcSpacing(1.5),
  _2: calcSpacing(2),
  _3: calcSpacing(3),
  _4: calcSpacing(4),
  _5: calcSpacing(5),
  _6: calcSpacing(6),
  _8: calcSpacing(8),
  _15: calcSpacing(15),
  _20: calcSpacing(20),
};
