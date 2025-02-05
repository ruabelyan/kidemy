import { FC, PropsWithChildren } from "react";
import ReactDom from "react-dom";

export interface PortalProps extends PropsWithChildren {
  x?: number;
}

const Portal: FC<PortalProps> = (props) => {
  return ReactDom.createPortal(props.children, document.body);
};

export default Portal;
