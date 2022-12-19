import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const galleryAnimation = () => {
  // gsap.to('.gallery-central', {
  //   opacity: '0',
  //   scrollTrigger: {
  //     trigger: '.gallery',
  //     start: 'top+=350px top',
  //     end: 'bottom+=350px top',
  //     toggleActions: 'play none reverse none'
  //     // scrub: true
  //     // markers: true
  //   }
  // });
  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '.gallery-outer',
  //     pin: '.gallery-outer',
  //     scrub: 1,
  //     start: 'top top',
  //     end: 'bottom top',
  //     toggleActions: 'play pause play reset',
  //     markers: true
  //   }
  // });
  // tl.from('.gallery-overlay', {
  //   opacity: 0,
  //   duration: 1
  // }).to('.gallery-overlay', {
  //   opacity: '1'
  // });
};
