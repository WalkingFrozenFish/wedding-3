import styles from "./Address.module.css"

function Address() {
    return (
        <div className={styles.addressWrapper}>
            <p>
                Мекен - жайымыз<br />
                Тоқмансай ауылы<br />
                “Ауылым” мейрамханасы
            </p>
        </div>
    );
}

export default Address;