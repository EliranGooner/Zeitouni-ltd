import "bootstrap";
import { initUpdateNavbarOnScroll } from '../components/navbar';
import { menuToggler , menuSelector } from '../components/menu';
import { carousel } from '../components/carousel';
import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'

new Glide('.glide').mount({ Controls, Breakpoints })

initUpdateNavbarOnScroll();
menuToggler();
menuSelector();
carousel();
