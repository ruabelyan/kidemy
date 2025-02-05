import { uniqueIdMaker } from "@/helpers";
import { FC, useCallback, useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Portal } from "ui-components";
import Alert, { AlertProps } from "./Alert";
import styles from "./Alert.module.scss";
import { alert } from "./AlertService";

export interface AlertContainerProps {
  autoClose?: boolean;
  autoCloseDelay?: number;
}

const AlertContainer: FC<AlertContainerProps> = ({
  autoClose,
  autoCloseDelay = 5000,
}) => {
  const [alerts, setAlerts] = useState<AlertProps[]>([]);

  const removeAlert = useCallback(
    (id: string) => {
      setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id));
    },
    [alerts]
  );

  useEffect(() => {
    alert.subscribe((alert) => {
      setAlerts((prevAlerts) => [
        ...prevAlerts,
        { ...alert, id: uniqueIdMaker() },
      ]);
    });
  }, []);

  return (
    <Portal>
      <div className={styles.AlertContainer}>
        <TransitionGroup>
          {alerts.map((alert) => {
            return (
              <CSSTransition
                timeout={1500}
                unmountOnExit
                key={alert.id}
                classNames={{
                  enter: styles.AlertEnter,
                  enterActive: styles.AlertEnterActive,
                  exit: styles.AlertExit,
                  exitActive: styles.AlertExitActive,
                }}
              >
                <Alert
                  autoClose={alert.autoClose || autoClose}
                  autoCloseDelay={alert.autoCloseDelay || autoCloseDelay}
                  onClose={() => {
                    removeAlert(alert.id);
                  }}
                  icon={alert.icon}
                  alertLabel={alert.alertLabel}
                />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
    </Portal>
  );
};

export default AlertContainer;
