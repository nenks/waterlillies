
import styles from '../Grid/page.module.css';
import Image from 'next/image';


const slides = [
  { image: "/image/wlhf.JPG", text: "watery Lilies" },
  { image: "/image/wlhf2.JPG", text: "watery Lilies" },
  { image: "/image/wlhf3.JPG", text: "watery Lilies" },
  { image: "/image/wlhf4.JPG", text: "watery Lilies" },
  { image: "/image/wlhf5.JPG", text: "watery Lilies" },
];


const SixBoxSection = () => {
  return (
    <section className={styles.gridSection}>
    

      <div className={`${styles.box} ${styles.pastEvents}`}>
        <h3>Some of Our Past Events</h3>
        <section className={styles.slider}>
      <div className={styles.slideTrack}>
        {slides.map((slide, index) => (
          <div className={styles.slide} key={index}>
            <Image src={slide.image} width={400} height={500} alt={slide.text} className={styles.slideImage} />
            <div className={styles.slideText}>{slide.text}</div>
          </div>
        ))}
      </div>
    </section>
      </div>
  <div className={styles.box}>
        <h3>Contact Info</h3>
        <p>Email: infowhlf@gmail.com</p>
        <p>Phone: 09162270997 | 08161113412  </p>        
        <hr />
        <br />
        <h3>Office Address</h3>
        <p>Suite 34, Flat 4 Aliero Crescent Opposite Dynamic Academy/CAC, PW Kubwa, Abuja, Nigeria</p>
      </div>
    
      <div className={styles.box}>
        <h3>Partners</h3>

      <p>  At Watery Lilies, we believe in the power of collaboration. By partnering with individuals, 
corporate bodies, international NGOs, and government agencies, we can scale our efforts 
and drive measurable impact. Together, we can turn compassion into action and 
challenges into opportunities for generations to come. </p>
        {/* <ul>
          <li>UNICEF</li>
          <li>WHO</li>
          <li>Gates Foundation</li>
        </ul> */}
      </div>

      <div className={styles.box}>
        <h3>Contact Form</h3>
        <form className={styles.form}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" />
          <button type="submit">Send</button>
        </form>
      </div>

     
      <div className={styles.box}>
        <h3>Volunteer Sign-up</h3>
        <p>Join our growing list of volunteers making a difference in the community.</p>
        <button>Sign Up</button>
      </div>

      <div className={styles.box}>
        <h3>Donate Now</h3>
        <p>Your support helps us do more. Make a secure donation online.</p>
        <button>Donate</button>
      </div>
    </section>
  );
};

export default SixBoxSection;
