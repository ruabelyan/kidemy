import { FC, ReactNode } from "react";
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogProps,
} from "..";
import styles from "../Dialog.module.scss";
import DialogClose from "../DialogClose";

export interface AcceptionDialogProps {
  icon?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  cancelButtonText?: ReactNode;
  submitButtonText?: ReactNode;
  showSubmitButton?: boolean;
  showCancelButton?: boolean;
  showCloseHeaderButton?: boolean;
  askWhenLeaving?: boolean;
  onCancel?(): void;
  onSubmit?(closeFn: () => void): void;
  children?: ReactNode;
  dimensions?: { width?: number; height?: number };
  style?: object;
}

const AcceptionDialog: FC<AcceptionDialogProps & DialogProps> = ({
  title,
  icon,
  onCancel,
  onSubmit,
  cancelButtonText,
  submitButtonText,
  description,
  onClose,
  isOpened,
  size,
  mode,
  children,
  showSubmitButton,
  showCancelButton,
  showCloseHeaderButton = true,
  askWhenLeaving = true,
  style,
}) => {
  const onModalClose = () => {
    if (askWhenLeaving) {
      if (confirm("Ցանկանում ե՞ք ընդհատել") == true) {
        onCancel && onCancel();
      }
    } else {
      onCancel && onCancel();
    }
  };

  return (
    <Dialog
      onClose={onClose}
      isOpened={isOpened}
      size={size}
      mode={mode}
      style={style}
    >
      {showCloseHeaderButton ? <DialogClose onCancel={onModalClose} /> : null}
      <DialogHeader title={title} icon={icon} />
      <DialogBody>
        {/* Do Not Forget To Style p */}
        {description && (
          <p className={styles.DialogDescription}>{description}</p>
        )}
      </DialogBody>
      {children}
      <DialogFooter
        onClose={() => {
          onClose?.();
          onCancel?.();
        }}
        cancelButtonText={cancelButtonText}
        submitButtonText={submitButtonText}
        submitButtonProps={{
          onClick: () => onSubmit && onSubmit(onClose!),
        }}
        showSubmitButton={showSubmitButton}
        showCancelButton={showCancelButton}
      />
    </Dialog>
  );
};

export default AcceptionDialog;
