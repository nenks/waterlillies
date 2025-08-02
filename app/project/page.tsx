"use client";

import Image from "next/image";
import styles from "../project/page.module.css";
import Header from "../component/Header/page";

// const slides = [
//   { image: "/image/wlhf.jpg", text: "watery Lilies" },
//   { image: "/image/wlhf2.jpg", text: "watery Lilies" },
//   { image: "/image/wlhf3.jpg", text: "watery Lilies" },
//   { image: "/image/wlhf4.jpg", text: "watery Lilies" },
//   { image: "/image/wlhf5.jpg", text: "watery Lilies" },
// ];

export default function ImageSlider() {
  return (
    <><Header />
      <div className={styles.slideImages} >        
        <div className={styles.past}><h3>Past Events and Concluded projects:</h3></div>
      <Image
        src="/image/wlhf.JPG"
        width={400}
        height={500}
        alt="hy"
        className={styles.slideImage}
      />
      <Image
        src="/image/wlhf2.JPG"
        width={400}
        height={500}
        alt="hy"
        className={styles.slideImage}
      />
      <Image
        src="/image/wlhf3.JPG"
        width={400}
        height={500}
        alt="hy"
        className={styles.slideImage}
      />
      <Image
        src="/image/wlhf4.JPG"
        width={400}
        height={500}
        alt="hy"
        className={styles.slideImage}
      />
      <Image
        src="/image/wlhf5.JPG"
        width={400}
        height={500}
        alt="hy"
        className={styles.slideImage}
      />
      </div>
      

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
