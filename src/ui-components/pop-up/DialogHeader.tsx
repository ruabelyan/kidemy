import { FC, ReactNode } from "react";
import styles from "./Dialog.module.scss";

export interface DialogHeaderProps {
  title: ReactNode;
  icon: ReactNode;
  description?: ReactNode;
  className?: string;
}

const DialogHeader: FC<DialogHeaderProps> = ({ title, description, icon }) => {
  return (
    <>
      {icon && <div className={styles.DialogIconContainer}>{icon}</div>}
      {title && (
        <div className={styles.DialogLabel}>
          <h3>{title}</h3>
        </div>
      )}
      {description && <p>{description}</p>}
    </>
  );
};
export default DialogHeader;
