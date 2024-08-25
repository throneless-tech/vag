import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'the seasons';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('https://use.typekit.net/eab2amp.css') format('opentype');
      }
      `}
  />
);

export default Fonts;