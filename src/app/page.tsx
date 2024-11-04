import styles from "./page.module.scss";
import "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.parallax}>
      <div className={`${styles.parallax_layer} ${styles.layer1}`}>LAYER 1</div>
      <div className={`${styles.parallax_layer} ${styles.layer2}`}>LAYER 2</div>
      <div className={`${styles.parallax_layer} ${styles.layer3}`}>LAYER 3</div>
    </div >
  );
}
