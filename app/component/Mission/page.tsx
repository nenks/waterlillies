"use client";

import styles from "../Mission/page.module.css";
import { FaHeart, FaEye, FaNewspaper, } from "react-icons/fa";
import { FaLocationPinLock } from "react-icons/fa6";

export default function Mission() {
  return (
    <div className={styles.features}>
      <div className={styles.featureBox}>
        <FaHeart className={styles.icon} />
        <h3>Mission</h3>
        <p>To empower underprivileged women and children by fostering health, education, and 
economic self-reliance, while advocating for their rights and well-being. 
        </p>
      </div>
      <div className={styles.featureBox}>
        <FaEye className={styles.icon} />
        <h3>Vision</h3>
        <p>A society where every woman and child thrive with dignity, access to opportunities, and 
freedom from discrimination and abuse, creating a ripple effect of hope and 
transformation across Nigeria and Africa.
        </p>
      </div>
      <div className={styles.featureBox}>
        <FaLocationPinLock className={styles.icon} />
        <h3>Motto</h3>
        <p>Empowering Women and Children | Building a Brighter Tomorrow
        </p>
      </div>
         <div className={styles.featureBox}>
        <FaNewspaper className={styles.icon} />
        <h3>News Update</h3>
        <p>
         More on News!
        </p>
      </div>
    </div>
  );
}
