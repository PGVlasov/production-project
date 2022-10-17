import { useTheme } from "app/providers/ThemeProvider/ui";
import React, {
  useCallback,
  useEffect,
  ReactNode,
  useRef,
  useState,
} from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Portal } from "../Portal/Portal";
import classes from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose } = props;
  const [isClosing, setIsClosing] = useState(false);
  const timeRef = useRef<ReturnType<typeof setTimeout>>();

  const { theme } = useTheme();

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timeRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler]
  );

  const onContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => clearTimeout(timeRef.current);
    window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onKeyDown]);

  const mods: Record<string, boolean> = {
    [classes.opend]: isOpen,
    [classes.isClising]: isClosing,
    [theme]: true,
  };

  return (
    <Portal>
      <div
        className={classNames(classes.Modal, mods, [
          className,
          theme,
          "app__modal",
        ])}
      >
        <div className={classes.overlay} onClick={closeHandler}>
          <div className={classes.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
