import classNames from "classnames";
import { FC } from "react";
import styles from "./Card.module.scss";

export interface CardProps {
  fullWidth?: boolean;
}

const Card: FC<CardProps> = ({ fullWidth = false }) => {
  return (
    <div
      className={classNames(styles.Container, {
        [styles.Container__fullWidth]: fullWidth,
      })}
    >
      <div className={styles.Container__Top}></div>
    </div>
  );
};

export default Card;
