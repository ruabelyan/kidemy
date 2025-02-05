import classNames from "classnames";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  ReactNode,
} from "react";
import styles from "./Button.module.scss";

export type ButtonSizes = "xs" | "sm" | "md" | "lg" | "xl";

export type ButtonColors = "primary" | "secondary";

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, null> {
  color?: ButtonColors;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  fullWidth?: boolean;
  size?: ButtonSizes;
  iconButton?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  color = "primary",
  size = "md",
  startIcon,
  endIcon,
  fullWidth,
  iconButton,
  ...props
}) => {
  return (
    <button
      className={classNames(styles.Button, {
        [styles[`Button--${color}`]]: color,
        [styles[`Button--${size}`]]: size,
        [styles[`Button--fullWidth`]]: fullWidth,
        [styles[`Button--iconButton`]]: iconButton,
      })}
      {...props}
    >
      {startIcon && !endIcon ? (
        <div className={styles["Button--startIcon"]}>{startIcon}</div>
      ) : null}

      {children}

      {endIcon ? (
        <div className={styles["Button--endIcon"]}>{endIcon}</div>
      ) : null}
    </button>
  );
};

export default Button;
