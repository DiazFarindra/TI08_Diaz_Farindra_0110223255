import Splide from '@splidejs/splide';

import '@splidejs/splide/css/core'

const main_slider = new Splide('#main-slider', {
    type: 'loop',
    // autoplay: true,
    // interval: 2000,
}).mount()
