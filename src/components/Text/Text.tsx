import styles from "./Text.module.css"

function Text() {
    return (
        <div className={styles.textContainer}>
            <div className={styles.textWrapper}>
                <p>
                    Құрметті қонақтар!
                </p>
                <p style={{fontSize: "20px"}}>
                    Сіздерді аяулы қызымыз Гүлмираның ұзату тойына арналған салтанатты дастарханның қадірлі қонағы болуға шақырамыз!
                </p>
            </div>
        </div>
    );
}

export default Text;