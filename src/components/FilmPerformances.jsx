import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const FilmPerformances = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      // let previousScrollY = 0;
      // window.addEventListener('scroll', (e) => {
      //   if (window.scrollY > previousScrollY) {
      //     gsap.to('.marquee-inner', {
      //       animationName: 'marquee'
      //       // duration: '3',
      //       // delay: '3'
      //     });
      //   } else if (window.scrollY < previousScrollY) {
      //     gsap.to('.marquee-inner', {
      //       animationName: 'marquee-reverse'
      //       // duration: '3'
      //     });
      //   }
      //   previousScrollY = window.scroll;
      // });

      let currentScroll = 0;
      let isScrollingDown = true;

      let marqueeFast = gsap
        .to('.marquee.fast .marquee-part', {
          xPercent: -100,
          repeat: -1,
          duration: 10,
          ease: 'linear'
        })
        .totalProgress(0.5);
      let marqueeSlow = gsap
        .to('.marquee.slow .marquee-part', {
          xPercent: -100,
          repeat: -1,
          duration: 30,
          ease: 'linear'
        })
        .totalProgress(0.5);

      gsap.set('.marquee-part', { xPercent: -50 });

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > currentScroll) {
          isScrollingDown = true;
        } else {
          isScrollingDown = false;
        }

        gsap.to(marqueeFast, {
          timeScale: isScrollingDown ? 1 : -1
        });
        gsap.to(marqueeSlow, {
          timeScale: isScrollingDown ? 1 : -1
        });

        currentScroll = window.pageYOffset;
      });
    }, document.getElementsByClassName('.film-performances')[0]);
    return () => ctx.revert(); // cleanup!
  }, []);
  return (
    <section className="film-performances">
      <div className="marquee slow">
        <div className="marquee-inner">
          <div className="marquee-part">Film Performances · Film Performances · </div>
          <div className="marquee-part">Film Performances · Film Performances · </div>
          <div className="marquee-part">Film Performances · Film Performances · </div>
        </div>
      </div>
      <div className="marquee fast">
        <div className="marquee-inner">
          <div className="marquee-part">Film Performances · Film Performances · </div>
          <div className="marquee-part">Film Performances · Film Performances · </div>
          <div className="marquee-part">Film Performances · Film Performances · </div>
        </div>
      </div>
    </section>
  );
};

export default FilmPerformances;
