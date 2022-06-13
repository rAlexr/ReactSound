const size = {
  mobileExtraSmall: "320px",
  mobileSmall: "375px",
  mobile: "425px",
  tabletSmall: "768px",
  tablet: "1024px",
  laptop: "1440px",
  desktop: "1920px",
  desktopLarge: "2180px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileExtraSmall})`,
  mobileM: `(min-width: ${size.mobileSmall})`,
  mobileL: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tabletSmall})`,
  laptop: `(min-width: ${size.tablet})`,
  laptopL: `(min-width: ${size.laptop})`,
  desktopL: `(min-width: ${size.desktop})`,
  desktop: `(min-width: ${size.desktopLarge})`,
};

export const colors = {
    primaryOrange: '#d87d4a',
    secondaryOrange: '#fbaf85',  
    black : '#000000',
    white: '#FFFFFF',
    primaryGray: '#f1f1f1',
    secondaryGray: ' #afafaf'
};

export const padding = {
  paddingMobile: '0 30px',
  paddingTablet: '0 40px',
  paddingLaptopSmall: '0 100px',
  paddingLaptopLarge: '0 180px',
  paddingDesktop: '0 200px'
}