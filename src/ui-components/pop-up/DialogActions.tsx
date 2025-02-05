import { FC, MouseEvent, ReactNode, useMemo } from "react";
import styles from "./Dialog.module.scss";
export interface DialogActionProps {
  actions: {
    icon: ReactNode;
    label: string;
    position?: "left" | "right";
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  }[];
}

const DialogActions: FC<DialogActionProps> = ({ actions }) => {
  const dialogActionsLeft = useMemo<DialogActionProps["actions"]>(
    () => actions.filter((item) => item.position === "left"),
    [actions]
  );

  const dialogActionsRight = useMemo<DialogActionProps["actions"]>(
    () => actions.filter((item) => !item.position || item.position === "right"),
    [actions]
  );

  return (
    <div className={styles.DialogActions}>
      <div className={styles.BtnsActions}>
        {dialogActionsLeft.map((action, index) => (
          <div key={index}>
            <p className={styles.BtnLabel}>{action.label}</p>
          </div>
        ))}
      </div>

      <div className={styles.BtnsActions}>
        {dialogActionsRight.map((action, index) => (
          <div key={index}>
            <button onClick={action.onClick}>onClick</button>
            <p className={styles.BtnLabel}>{action.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DialogActions;
