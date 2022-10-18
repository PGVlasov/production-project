import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui/Modal/Modal";
import { LogInForm } from "../loginForm/LogInForm";
import classes from "./LogInModal.module.scss";

interface LogInModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}
export const LogInModal = ({ className, isOpen, onClose }: LogInModalProps) => {
  return (
    <Modal
      className={classNames(classes.LogInModalProps, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <LogInForm />
    </Modal>
  );
};
