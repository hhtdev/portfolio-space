import styles from "./page.module.scss";
import Star from "../components/atoms/star/star"
import Planet from "@/components/organisms/planet/planet";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Sky full of stars */}
      {/* TODO: Mettre ça dans son propre compnent */}
      {Array.from({ length: 100 }, (_, i) => (
        <Star key={i} topPosition={Math.random() * 100 + "vh"} leftPosition={Math.random() * 100 + "vw"} />
      ))}

      <div className={styles.intro}>
        <Planet />
      </div>
      <div className={styles.content}>
        <div className={styles.panel1}>panel 1</div>
        <div className={styles.panel2}>panel 2</div>
        <div className={styles.panel3}>panel 3</div>
        <div className={styles.panel4}>panel 4</div>
        <div className={styles.panel5}>panel 5</div>
        <div className={styles.panel6}>panel 6</div>
      </div>
    </div >
  );
}
