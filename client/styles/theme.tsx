const PRIMARY_COLOR = '#223557';
const SECONDARY_COLOR = '#887575';
const LIGHT_GREY_COLOR = '#fafbfc';

const theme = {
  colors: {
    primary: PRIMARY_COLOR,
    secondary: SECONDARY_COLOR,
    text: {
      body: PRIMARY_COLOR,
      heading: SECONDARY_COLOR,
      largeHeading: SECONDARY_COLOR,
    },
    button: {
      default: {
        bg: LIGHT_GREY_COLOR,
        text: PRIMARY_COLOR,
        border: PRIMARY_COLOR,
      },
      primary: {
        bg: PRIMARY_COLOR,
        text: LIGHT_GREY_COLOR,
        border: PRIMARY_COLOR,
      },
    },
    border: {
      light: '#E6E6E0',
    },
  },
  fontFamily:
    'Constantia, "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", Georgia, serif',
  fontSizes: {
    body: '1rem',
    heading: '1.3rem',
    largeHeading: '2.2rem',
  },
  button: {
    regular: {
      fontSize: '1rem',
      padding: '0.4rem 1rem',
    },
    large: {
      fontSize: '1.8rem',
      padding: '0.8rem 2rem',
    },
  },
};

export default theme;
