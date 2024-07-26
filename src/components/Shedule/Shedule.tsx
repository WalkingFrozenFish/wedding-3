import styles from "./Shedule.module.css"

function Shedule() {
    return (
        <div className={styles.sheduleContainer}>
            <div className={styles.sheduleWrapper}>
                <p>
                    Той иелері <br/>
                    Бауырлары
                </p>

                <p>
                    Той күні<br/>
                    9 тамыз
                </p>

                <p>
                    Басталу уақыты<br/>
                    Сағат 13:00
                </p>
            </div>
        </div>
    );
}

export default Shedule;