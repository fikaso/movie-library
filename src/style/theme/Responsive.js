export const breakpoint = {
  smallMobile: 400,
  tablet: 900,
  laptop: 1200,
  desktop: 1440,
};

export const media = {
  smallMobile: `(max-width: ${breakpoint.smallMobile}px)`,
  mobile: `(min-width: ${breakpoint.smallMobile}px)`,
  tablet: `(max-width: ${breakpoint.tablet}px)`,
  minTablet: `(min-width: ${breakpoint.tablet}px)`,
  laptop: `(max-width: ${breakpoint.laptop}px)`,
  minLaptop: `(min-width: ${breakpoint.laptop}px)`,
  desktop: `(max-width: ${breakpoint.desktop}px)`,
  minDesktop: `(min-width: ${breakpoint.desktop}px)`,
};
