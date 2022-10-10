import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface Portal {
  children: ReactNode;
  element?: HTMLElement;
}
export const Portal = (props: Portal) => {
  const { children, element = document.body } = props;
  return createPortal(children, element);
};
