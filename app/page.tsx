// import Image from "next/image";
import styles from "./page.module.css";
import Header from "./component/Header/page";
import ImageSlider from "./component/Slider/page";
import Mission from "./component/Mission/page";
import SixBoxSection from "./component/Grid/page";
import ExecutivesSlider from "./component/Executives/page";
import Footer from "./component/Footer/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <ImageSlider />
        <Mission />
        <SixBoxSection />
        <ExecutivesSlider />
        <Footer />
      </main>
    </div>
  );
}
