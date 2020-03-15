import 'ress/dist/ress.min.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import smoothScroll from 'smooth-scroll';

config.autoAddCss = false;
smoothScroll('a[href*="#"]', { speed: 600 });
