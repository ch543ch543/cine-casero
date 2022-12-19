import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import {
  testimonials1,
  testimonials2,
  testimonials3,
  testimonials4,
  testimonials5,
  testimonials6
} from '../assets';

const Testimonial = () => {
  const translate3d = [
    'translate3d(-1.9516px, -29.9365px, 0px) rotate(-3.72973deg)',
    'translate3d(2.5819px, -49.9333px, 0px) rotate(2.96006deg)',
    'translate3d(-2.3513px, -39.9308px, 0px) rotate(-3.36979deg)',
    'translate3d(1.6264px, -24.947px, 0px) rotate(3.72973deg)',
    'translate3d(3.789px, 44.8402px, 0px) rotate(-4.83002deg)',
    'translate3d(2.2681px, -49.9485px, 0px) rotate(2.59983deg)'
  ];
  const imgMoveFnc = (movedEle, moveContainer, e) => {
    var moveBorder = moveContainer.getBoundingClientRect();
    const mouse = { x: e.clientX, y: e.clientY, mouse: false };
    const speed = 0.8;
    const xSet = gsap.quickSetter(movedEle, 'x', 'px');
    const ySet = gsap.quickSetter(movedEle, 'y', 'px');
    gsap.ticker.add(() => {
      // adjust speed for higher refresh monitors
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      if (mouse.move) {
        xSet(((mouse.x - moveBorder.width / 2) / moveBorder.width) * 100 * dt);
        ySet(((mouse.y - moveBorder.width / 2) / moveBorder.width) * 100 * dt);
      }
      mouse.move = false;
    });
    return (e) => {
      mouse.move = true;
      mouse.x = e.clientX - moveBorder.left;
      mouse.y = e.clientY - moveBorder.top;
    };
  };
  const imgBackFnc = (moveEle, oriPos) => {
    if (moveEle) {
      const backToOri = gsap.timeline();
      backToOri.to(moveEle, {
        transform: oriPos,
        duration: 2
      });
      return backToOri;
    }
  };

  useEffect(() => {
    const moveContainers = document.getElementsByClassName('testimonials-item');
    const moveCards = document.getElementsByClassName('testimonials-card');
    for (let i = 0; i < moveContainers.length; i++) {
      const moveContainer = moveContainers[i];
      const moveCard = moveCards[i];
      moveContainer.addEventListener('mouseover', (e) => {
        moveContainer.addEventListener('mousemove', imgMoveFnc(moveCard, moveContainer, e));
      });
      moveContainer.addEventListener('mouseleave', (e) => {
        imgBackFnc(moveCard, translate3d[i]).play();
        // moveContainer.removeEventListener('mousemove', imgMoveFnc(moveContainer, moveContainer, e));
      });
    }
  }, []);
  const img = [
    testimonials1,
    testimonials2,
    testimonials3,
    testimonials4,
    testimonials5,
    testimonials6
  ];
  return (
    <section className="testimonials">
      <div className="testimonials-inner">
        <h2 className="testimonials-title">Historias reales que transmiten nuestra esencia</h2>
        <div className="container-fluid">
          <div className="testimonials-grid">
            {translate3d.map((element, index) => {
              return (
                <div className="testimonials-item" id={`testimonials-item-${index}`} key={index}>
                  <div
                    className="testimonials-card"
                    id={`testimonials-card-${index}`}
                    style={{ transform: element }}>
                    <div className="testimonials-image">
                      <img src={img[index]}></img>
                    </div>
                    <div className="testimonials-quote"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
