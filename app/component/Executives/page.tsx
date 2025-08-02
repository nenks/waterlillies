import styles from '../Executives/page.module.css';
import Image from 'next/image';

const executives = [
  { image: "/image/wlhf.JPG", text: "Anne Joy", role: "CEO" },
  { image: "/image/wlhf2.JPG", text: "Lucy Vivian", role: "CTO" },
  { image: "/image/wlhf3.JPG", text: "Mic Ben", role: "MEDIA" },
  { image: "/image/wlhf5.JPG", text: "Hamisu Sule", role: "LEGAL" },
];

const ExecutivesSlider = () => {
  return (
    <section className={styles.sliderSection}>
      <div className={styles.sliderWrapper}>
        <h4 className={styles.sli}>Our Executives</h4>
        <div className={styles.sliderTrack}>
          {[...executives, ...executives].map((exec, index) => (
            <div className={styles.slide} key={index}>
              <div className={styles.card}>
                <Image
                  src={exec.image}
                  alt={exec.text}
                  width={180}
                  height={210}
                  className={styles.avatar}
                />
                <h4>{exec.text}</h4>
                <p>{exec.role}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ExecutivesSlider;
