"use client";

import Image from "next/image";
import styles from "../Slider/page.module.css";

// const slides = [
//   { image: "/image/wlhf.jpg", text: "watery Lilies" },
//   { image: "/image/wlhf2.jpg", text: "watery Lilies" },
//   { image: "/image/wlhf3.jpg", text: "watery Lilies" },
//   { image: "/image/wlhf4.jpg", text: "watery Lilies" },
//   { image: "/image/wlhf5.jpg", text: "watery Lilies" },
// ];

export default function ImageSlider() {
  return (
    <>
    <Image src="/image/wlhf5.JPG" width={400} height={500} alt="hy" className={styles.slideImage} />
            
    {/* <section className={styles.slider}>
      <div className={styles.slideTrack}>
        {slides.map((slide, index) => (
          <div className={styles.slide} key={index}>
            <Image src={slide.image} width={400} height={500} alt={slide.text} className={styles.slideImage} />
            <div className={styles.slideText}>{slide.text}</div>
          </div>
        ))}
      </div>
    </section> */}
    </>
  );
}
