"use client";

import styles from "../about/page.module.css";
import Header from "../component/Header/page";

export default function about() {
  return (
    <div className={styles.features}>
        <Header />
      <header className={styles.header}>
        <h1>Watery Lilies Hope Foundation</h1>
        <p>Empowering Women and Children | Building a Brighter Tomorrow</p>
      </header>

      <div className={styles.contactInfo}>
        <p>🌍 Abuja, FCT, Nigeria</p>
        <p>✉️ Email: infowlhf@gmail.com</p>
        <p>☎️ Phone: 09162270997 | 08161113412 | 07033126784</p>
      </div>

      <section className={styles.section}>
        <h2>About Us</h2>
        <p>
          Watery Lilies Hope Foundation is a Nigerian-based, non-governmental organization (NGO) established in 2024 with a heartfelt mission to uplift underprivileged women and children across Nigeria and Africa. Our work is anchored in compassion, advocacy, and empowerment, creating safe spaces where dignity, opportunity, and hope can flourish.
        </p>
        <p>
          We address systemic issues such as poverty, abuse, gender inequality, and lack of access to healthcare and education. Through direct intervention, community-driven programs, and strategic partnerships, we are committed to transforming lives and communities from the ground up.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Our Vision</h2>
        <p>
          A society where every woman and child thrive with dignity, access to opportunities, and freedom from discrimination and abuse, creating a ripple effect of hope and transformation across Nigeria and Africa.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Our Mission</h2>
        <p>
          To empower underprivileged women and children by fostering health, education, and economic self-reliance, while advocating for their rights and well-being. We are committed to eliminating abuse, inequality, and poverty through sustainable interventions and compassionate support systems.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Our Focus Areas</h2>

        <div className={styles.focusArea}>
          <h3>Health & Wellness</h3>
          <ul>
            <li>Provision of medical care and nutritional support to vulnerable populations.</li>
            <li>Awareness campaigns on HIV/AIDS, reproductive health, and substance abuse.</li>
          </ul>
        </div>

        <div className={styles.focusArea}>
          <h3>Education & Empowerment</h3>
          <ul>
            <li>Access to quality education through scholarships, school materials, and tutoring.</li>
            <li>Adult education, vocational training, and literacy programs.</li>
          </ul>
        </div>

        <div className={styles.focusArea}>
          <h3>Legal Aid & Protection</h3>
          <ul>
            <li>Advocacy for gender justice and legal support for victims of abuse and exploitation.</li>
            <li>Campaigns against gender-based violence and child labor.</li>
          </ul>
        </div>

        <div className={styles.focusArea}>
          <h3>Economic Independence</h3>
          <ul>
            <li>Skill acquisition and entrepreneurship training for women.</li>
            <li>Micro-grants and mentorship for small businesses.</li>
          </ul>
        </div>

        <div className={styles.focusArea}>
          <h3>Humanitarian Relief</h3>
          <ul>
            <li>Emergency response for victims of natural disasters and socio-political unrest.</li>
            <li>Distribution of food, clothing, and hygiene products to displaced families.</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Our Impact Goals</h2>
        <ul>
          <li>Women and children are free from abuse, exploitation, and systemic inequality.</li>
          <li>Access to health, education, and economic opportunities becomes universal.</li>
          <li>Gender justice and social inclusion are promoted at all levels of society.</li>
          <li>Communities become resilient, self-sustaining, and empowered to grow.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Why Partner with Us?</h2>
        <p>
          At Watery Lilies, we believe in the power of collaboration. By partnering with individuals, corporate bodies, international NGOs, and government agencies, we can scale our efforts and drive measurable impact. Together, we can turn compassion into action and challenges into opportunities for generations to come.
        </p>
      </section>

      <footer className={styles.footer}>
        Empowering Women and Children | Building a Brighter Tomorrow
      </footer>
    </div>
  );
}
