import classNames from "classnames";
import { FC, ReactNode } from "react";
import Button, { ButtonProps } from "../button/Button";
import styles from "./Dialog.module.scss";

export interface DialogFooterProps {
  showCancelButton?: boolean;
  cancelButtonText?: ReactNode;
  showSubmitButton?: boolean;
  submitButtonText?: ReactNode;
  cancelButtonProps?: ButtonProps;
  submitButtonProps?: ButtonProps;
  className?: string;
  onClose?: () => void;
}

const DialogFooter: FC<DialogFooterProps> = ({
  showCancelButton = true,
  cancelButtonText,
  showSubmitButton = true,
  submitButtonText,
  cancelButtonProps = {},
  submitButtonProps = {},
  onClose,
  className,
}) => {
  return (
    <div className={classNames(styles.DialogBtnGroup, className)}>
      {showCancelButton && (
        <Button
          color="secondary"
          {...cancelButtonProps}
          onClick={cancelButtonProps.onClick || onClose}
        >
          {cancelButtonText}
        </Button>
      )}
      {showSubmitButton && (
        <Button color="primary" {...submitButtonProps}>
          {submitButtonText}
        </Button>
      )}
    </div>
  );
};

export default DialogFooter;
