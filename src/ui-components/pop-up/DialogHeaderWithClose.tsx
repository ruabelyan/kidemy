import { CloseIcon } from "assets";
import styles from "./Dialog.module.scss";

export interface DialogHeaderWithClose {
  onClose: () => void;
  title: string;
}

export const DialogHeaderWithClose = ({
  onClose,
  title,
}: DialogHeaderWithClose) => {
  return (
    <div className={styles.DialogHeaderWithClose}>
      <div className={styles.HeaderTitle}>
        <h3>{title}</h3>
      </div>
      <button
        type="button"
        className={styles.DialogHeaderClose}
        onClick={onClose}
      >
        <CloseIcon />
      </button>
    </div>
  );
};
