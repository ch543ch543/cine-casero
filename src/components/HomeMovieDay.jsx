import React, { useEffect } from 'react';
import { home1, home2, home3, home4, home5, home6, home7, home8 } from '../assets';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const HomeMovieDay = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.home-movie-day',
          start: 'top top',
          end: 'bottom+=1000px top',
          toggleActions: 'play none none none',
          scrub: true,
          pin: true
        }
      });
      tl.to('#reel-col-1', {
        y: '-50%',
        duration: 2
      });
      tl.to(
        '#reel-col-2',
        {
          y: '50%',
          duration: 2
        },
        '<'
      );
    }, document.getElementsByClassName('.main-container')[0]);
    return () => ctx.revert(); // cleanup!
  });
  return (
    <section className="home-movie-day">
      <div className="container">
        <div className="-grid">
          <div className="grid-item">
            <h2>
              Home <br></br>Movie Day
            </h2>
            <p>
              El Día de las Películas Familiares es un evento abierto y gratuito que se celebra a
              nivel internacional y que es organizado por voluntarios que buscan llamar la atención
              sobre la importancia de preservar los registros amateurs, cotidianos y domésticos por
              el valor que tienen para la memoria colectiva y el patrimonio cultural de un país.
            </p>
            <div className="-link">
              <a href="#" target="_blank">
                <span>Tips para conservar tu archivo familiar</span>
              </a>
            </div>
            <div className="-link">
              <a href="#" target="_blank">
                <span>Diseño de contenedor para tus películas</span>
              </a>
            </div>
          </div>
          <div className="grid-item">
            <div className="reel">
              <div className="reel-col" id="reel-col-1">
                <div className="reel-item">
                  <img src={home1}></img>
                </div>
                <div className="reel-item">
                  <img src={home2}></img>
                </div>
                <div className="reel-item">
                  <img src={home3}></img>
                </div>
                <div className="reel-item">
                  <img src={home4}></img>
                </div>
              </div>
              <div className="reel-col" id="reel-col-2">
                <div className="reel-item">
                  <img src={home5}></img>
                </div>
                <div className="reel-item">
                  <img src={home6}></img>
                </div>
                <div className="reel-item">
                  <img src={home7}></img>
                </div>
                <div className="reel-item">
                  <img src={home8}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMovieDay;
