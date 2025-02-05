import { CloseIcon } from "@/assets";
import { FC } from "react";
import styles from "./Dialog.module.scss";

export interface DialogCloseProps {
  onCancel?(): void;
}

const DialogClose: FC<DialogCloseProps> = ({ onCancel }) => {
  return (
    <div className={styles.DialogHeaderCloseBtn} onClick={onCancel}>
      <CloseIcon width={20} />
    </div>
  );
};

export default DialogClose;
