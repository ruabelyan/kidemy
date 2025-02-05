// import { AlertClose } from "@/icons";
import classNames from "classnames";
import { FC, ReactNode, useEffect } from "react";
import styles from "./Alert.module.scss";
// import { DeleteIcon } from "@/assets";

export interface AlertProps {
  icon?: ReactNode;
  onClose?: () => void;
  alertLabel?: string;
  id?: string;
  autoCloseDelay?: number;
  autoClose?: boolean;
}

const Alert: FC<AlertProps> = ({
  icon,
  alertLabel,
  onClose,
  autoClose,
  autoCloseDelay = 5000,
}) => {
  useEffect(() => {
    if (autoClose) {
      const timeout = setTimeout(onClose, autoCloseDelay);
      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <div className={classNames(styles.AlertBase)}>
      <span className={classNames(styles["AlertSymbol"], "AlertSymbol")}>
        {icon}
      </span>
      <span className={classNames(styles["AlertText"], "AlertText")}>
        {alertLabel}
      </span>
      {/* <DeleteIcon
        onClick={() => onClose()}
        className={classNames(
          styles["AlertClose"],
          styles["AlertClose--PopUp"],
          "AlertClose",
          "AlertClose--PopUp"
        )}
      /> */}
    </div>
  );
};

export default Alert;
