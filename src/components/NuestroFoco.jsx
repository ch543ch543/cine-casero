import React, { useEffect } from 'react';
import { foco1, foco2, foco3, foco4, foco5 } from '../assets';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const NuestroFoco = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.about',
          start: 'top bottom',
          end: 'bottom top',
          toggleActions: 'play none reverse none',
          scrub: 1
          // duration: 1
        }
      });
      tl.to('#img-1', {
        top: '0%',
        scale: 1.2,
        ease: 'none',
        duration: 0.4
      })
        .to(
          '#img-4',
          {
            top: '10%',
            scale: 1.2,
            duration: 0.2,
            ease: 'none'
          },
          '-=0.1'
        )
        .to(
          '#img-2',
          {
            top: '20%',
            scale: 1.2,
            duration: 0.4,
            ease: 'none'
          },
          '-=0.3'
        )
        .to(
          '#img-5',
          {
            top: '30%',
            scale: 1.2,
            duration: 0.6,
            ease: 'none'
          },
          '-=0.4'
        )
        .to(
          '#img-3',
          {
            top: '40%',
            scale: 1.2,
            duration: 0.8,
            ease: 'none'
          },
          '-=0.5'
        );
    }, document.getElementsByClassName('.about')[0]);
    return () => ctx.revert(); // cleanup!
  }, []);
  return (
    <div className="about">
      <p className="about-text">
        Somos un colectivo unido, comprometido y abierto a la comunidad. Nos representan el trabajo
        en equipo, los procesos creativos y los de investigación.
      </p>
      <div className="about-images">
        <div className="left">
          <img id="img-1" src={foco1}></img>
          <img id="img-2" src={foco2}></img>
          <img id="img-3" src={foco3}></img>
        </div>
        <div className="right">
          <img id="img-4" src={foco4}></img>
          <img id="img-5" src={foco5}></img>
        </div>
      </div>
    </div>
  );
};

export default NuestroFoco;
