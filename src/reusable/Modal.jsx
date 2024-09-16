import { useTranslation } from "react-i18next";
import { useModal } from "../contexts/ModalContext";
import styles from "./modal.module.scss"

export const Modal = () => {
    const { modalOpen, setModalOpen } = useModal();
    const { t, i18n } = useTranslation();

    const toggleModal = () => {
      setModalOpen(prevState => !prevState);
    };

    return (
        <>
            <div onClick={toggleModal} className={`${styles.back} ${modalOpen ? styles.open : null}`} />
            <div className={`${styles.modal} ${modalOpen ? styles.open : null}`}>
                <svg onClick={toggleModal} viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46.6667 46.6667L25.3333 25.3333M25.3333 25.3333L4 4M25.3333 25.3333L46.6667 4M25.3333 25.3333L4 46.6667" stroke="black" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div className={styles.form}>
                    <input type="text" placeholder={t("contact_name")} />
                    <input type="text" placeholder={t("contact_number")} />
                    <button>{t("contact_send")}</button>
                </div>
            </div>
        </>
    );
}

export default Modal;
