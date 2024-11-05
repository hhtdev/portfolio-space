import styles from "./page.module.scss";
import Image from 'next/image';
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
        <div className={styles.panel1}>
          <div className={`${styles.panel1_left} ${styles.panel_radius}`}>
            <div className={styles.wrapper_panel_gradient_border}>
              <div className={styles.panel1_image}>
                <Image src="/astro_photo.jpeg" alt="planet" fill object-fit="contain" />
              </div>
              <div className={styles.panel1_content}>
                <h2>Qui suis-je ?</h2>
                <p>Hello ! Voici une courte description de qui je suis et ce que je fais. Je n'ai encore rien écrit mais tkt ça va venir.</p>
              </div>
            </div>
          </div>
          <div className={`${styles.panel1_right} ${styles.panel_radius}`}>
            <div className={styles.wrapper_panel_gradient_border}>
              <div className={styles.skills}>
                <h2>Compétences</h2>
                <ul>
                  <li>J'ai</li>
                  <li>Pas</li>
                  <li>Encore</li>
                  <li>Contribué</li>
                  <li>Ça</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
