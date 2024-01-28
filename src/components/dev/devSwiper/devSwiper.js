"use client";

import styles from "./devSwiper.module.css";
import { register } from "swiper/element/bundle";
import "swiper/css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const SwiperControlPanel = ({
  nextSlide,
  previousSlide,
  currentIndex,
  images,
  slideTo,
}) => {
  return (
    <div className={styles.controlPanel}>
      <div className={styles.controlBtn}>
        <button onClick={() => previousSlide()}>
          <MdOutlineKeyboardArrowLeft />
        </button>
        <button onClick={() => nextSlide()}>
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
      <div className={styles.indexBtn}>
        {images.map((image, index) => {
          return (
            <div key={image._id} className={styles.slide}>
              <button onClick={() => slideTo(index)}>
                <span
                  className={currentIndex === index ? styles.underline : ""}
                >
                  {index + 1}
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const DevSwiper = ({ images }) => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    register();
  }, []);

  useEffect(() => {
    swiperRef.current.addEventListener("swiperslidechange", (e) => {
      const [swiper] = e.detail;
      setCurrentIndex(swiper.activeIndex);
    });
  }, []);

  const nextSlide = () => {
    swiperRef.current.swiper.slideNext();
  };

  const previousSlide = () => {
    swiperRef.current.swiper.slidePrev(1000);
  };

  const slideTo = (index) => {
    swiperRef.current.swiper.slideTo(index, 1000);
  };

  return (
    <div className={styles.slider}>
      <button
        className={styles.controlBtn}
        onClick={() => setShowControls(!showControls)}
      >
        Controls {showControls.toString()}
      </button>
      <swiper-container
        slides-per-view="1"
        keyboard="true"
        ref={swiperRef}
        rewind="true"
        speed="1000"
        scrollbar="true"
        navigation="true"
      >
        {images.map((image) => {
          return (
            <swiper-slide key={image._id} className={styles.slide}>
              <Image
                className={styles.swiperImage}
                src={image.path}
                alt={image.name}
                width={500}
                height={500}
              ></Image>
            </swiper-slide>
          );
        })}
      </swiper-container>
      {showControls ? (
        <SwiperControlPanel
          nextSlide={nextSlide}
          previousSlide={previousSlide}
          currentIndex={currentIndex}
          images={images}
          slideTo={slideTo}
        />
      ) : null}
    </div>
  );
};

export default DevSwiper;
