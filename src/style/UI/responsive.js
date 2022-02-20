export const breakpoint = {
  smallMobile: 400,
  mobile: 600,
  tablet: 900,
  laptop: 1200,
};

export const media = {
  smallMobile: `(max-width: ${breakpoint.smallMobile}px)`,
  mobile: `(max-width: ${breakpoint.mobile}px)`,
  tablet: `(max-width: ${breakpoint.tablet}px)`,
  minTablet: `(min-width: ${breakpoint.tablet}px)`,
  laptop: `(max-width: ${breakpoint.laptop}px)`,
  minLaptop: `(min-width: ${breakpoint.laptop}px)`,
};
