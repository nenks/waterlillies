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
        <p>
          Lorem ipsum dolor sit amet. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
      </div>
      <div className={styles.featureBox}>
        <FaEye className={styles.icon} />
        <h3>Vision</h3>
        <p>
         Lorem ipsum dolor sit amet. Aenean commodo ligula eget dolor. Aenean massa.
        </p>
      </div>
      <div className={styles.featureBox}>
        <FaLocationPinLock className={styles.icon} />
        <h3>Motto</h3>
        <p>
         Lorem ipsum dolor sit amet. Aenean commodo ligula eget dolor. Aenean massa.
        </p>
      </div>
         <div className={styles.featureBox}>
        <FaNewspaper className={styles.icon} />
        <h3>News Update</h3>
        <p>
         Lorem ipsum dolor sit amet. Aenean commodo ligula eget dolor. Aenean massa.
        </p>
      </div>
    </div>
  );
}
