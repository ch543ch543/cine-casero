import React, { useEffect } from "react";
import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery1Pin,
} from "../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Garelly = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".gallery-central", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".gallery-outer",
          start: "top top",
          end: "bottom top",
          // toggleActions: 'play none none reverse',
          // markers: true
        },
      });
      gsap.to(".gallery-overlay", {
        visibility: "visible",
        scrollTrigger: {
          trigger: ".gallery-outer",
          start: "top top",
        },
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".gallery-outer",
          start: "top top",
          end: "bottom top",
          toggleActions: "play none none none",
          scrub: true,
          pin: true,
        },
      });
      tl.to(".gallery-overlay", {
        clipPath: "inset(0% -10% round 20px)",
        duration: 2,
      }).to(
        ".gallery-title",
        {
          opacity: "1",
          rotate: "0deg",
          top: "50%",
          duration: 2,
        },
        "-=1.5"
      );
    }, document.getElementsByClassName(".main-container")[0]);
    return () => ctx.revert(); // cleanup!
  }, []);

  return (
    <section className="gallery-outer">
      <div className="gallery">
        <div className="gallery-overlay">
          <img src={gallery1Pin}></img>
        </div>
        <div className="gallery-title">
          Todos tenemos un tesoro <br />
          familiar para compartir
        </div>
        <div className="gallery-inner">
          <div className="show-gallery gallery-left-outer">
            <img src={gallery3}></img>
          </div>
          <div className="show-gallery gallery-left-inner">
            <img src={gallery2}></img>
            <img src={gallery4}></img>
          </div>
          <div className="show-gallery gallery-central">
            <img src={gallery1}></img>
          </div>
          <div className="show-gallery gallery-right-inner">
            <img src={gallery5}></img>

            <img src={gallery7}></img>
          </div>
          <div className="show-gallery gallery-right-outer">
            <img src={gallery6}></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Garelly;
