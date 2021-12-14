import { generateMedia } from 'styled-media-query';

const customMedia = generateMedia({
  lgDesktop: '1350px',
  mdDesktop: '1150px',
  tablet: '992px',
  smTablet: '740px',
  mobile: '375px',
});

export default customMedia;