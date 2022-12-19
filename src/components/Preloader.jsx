import React, { useRef, useEffect, useCallback, useState } from 'react';
import gsap from 'gsap';

const Preloader = () => {
  let cursor = useRef(null);
  // const [originPos, setOriginPos] = useState({
  //   x: window.innerWidth / 2,
  //   y: window.innerHeight / 2
  // });
  // const [mouse, setMouse] = useState({ x: originPos.x, y: originPos.y });
  const intiateMouseCursor = () => {
    const originPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: originPos.x, y: originPos.y };
    let rotateDeg = 0;
    const speed = 0.2;
    const xSet = gsap.quickSetter(cursor, 'x', 'px');
    const ySet = gsap.quickSetter(cursor, 'y', 'px');
    const rotateSet = gsap.quickSetter(cursor, 'rotate', 'deg');
    gsap.ticker.add(() => {
      // adjust speed for higher refresh monitors
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      rotateDeg = (originPos.x - window.innerWidth / 2) / (window.innerWidth / 2);
      // setOriginPos({
      //   x: (originPos.x += (mouse.x - originPos.x) * dt),
      //   y: (originPos.y += (mouse.y - originPos.y) * dt)
      // });
      originPos.x += (mouse.x - originPos.x) * dt;
      originPos.y += (mouse.y - originPos.y) * dt;
      xSet(originPos.x);
      ySet(originPos.y);
      rotateSet(rotateDeg * 90 * dt);
    });
    return (e) => {
      // setMouse({ x: e.clientX, y: e.clientY }, console.log(originPos, mouse));
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      // console.log(originPos);
    };
  };

  // const moveCursor = useCallback(intiateMouseCursor(), []);
  const click = useCallback(() => {
    let tl = gsap.timeline();
    tl.to('h1.preloader-title span', {
      x: '5',
      opacity: '0',
      stagger: {
        each: 0.05,
        ease: 'none',
        from: 'end'
      }
    })
      .to('.preloader', {
        y: '-100%',
        duration: 1,
        ease: 'power4.in'
      })
      .to('.show-gallery', {
        scale: '1',
        // duration: 0.5,
        stagger: {
          each: 0.1,
          ease: 'power1.out',
          from: 'center'
        }
      })
      .to('.show-gallery', {
        y: '50px',
        // duration: 0.5,
        stagger: {
          each: 0.1,
          ease: 'power1.out',
          from: 'center'
        }
      })
      .to(
        '.gallery',
        {
          y: '0px',
          // duration: 0.5,
          stagger: {
            each: 0.1,
            ease: 'power1.out',
            from: 'center'
          }
        },
        '-=0.5'
      )
      .to(
        '.hero',
        {
          y: '0',
          duration: 0.5,
          opacity: 1,
          stagger: {
            each: 0.1,
            ease: 'power1.out',
            from: 'center'
          }
        },
        '-=0.5'
      );
    // window.removeEventListener('mousemove', moveCursor);
    cursor.style.display = 'none';
  });
  useEffect(() => {
    const moveCursor = intiateMouseCursor();

    if (window) {
      window.addEventListener('mousemove', (e) => {
        moveCursor(e);
      });
      window.addEventListener('click', click);
    }
    return window.removeEventListener('mousemove', moveCursor);
  }, []);
  return (
    <>
      <div className="preloader">
        <h1 className="preloader-title">
          <span>C</span>
          <span>i</span>
          <span>n</span>
          <span>e </span>
          <span>C</span>
          <span>a</span>
          <span>s</span>
          <span>e</span>
          <span>r</span>
          <span>o</span>
        </h1>
      </div>
      <div className="cursor" ref={(el) => (cursor = el)}>
        <span>ENTER</span>
      </div>
    </>
  );
};

export default Preloader;
