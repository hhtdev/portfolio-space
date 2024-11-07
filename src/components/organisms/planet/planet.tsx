import styles from "./planet.module.scss";

export default function Planet() {
	return (
		<div className={styles.ring1}>
			<div className={styles.ring2}>
				<div className={styles.planet} />
			</div>
		</div>
	)
}