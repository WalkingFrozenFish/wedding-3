import styles from "./Hero.module.css"
import heroBg from "../../assets/hero-bg.jpg"

function Hero() {
    return (
        <div className={styles.heroContainer}>
            <img className={styles.heroBg} src={heroBg} alt="Background" />

            <div className={styles.content}>
                <h2 className={styles.names}>Гүлмира<br />Қыз ұзату</h2>

                <div className={styles.date}>
                    <p>09.08.2024</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;