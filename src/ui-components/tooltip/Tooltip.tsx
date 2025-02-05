import { useOutsideClickWithRef } from "@/helpers";
import classNames from "classnames";
import { cloneElement, ReactNode, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Portal } from "../shared";
import StyledTooltip, { UIColors } from "./StyledTooltip";
import { default as Styles, default as styles } from "./Tooltip.module.scss";
import TooltipPosition, { TooltipPlacement } from "./TooltipPosition";
import TriangleIcon from "./triangle.svg?react";
export type showEventType = "click" | "hover";
export interface TooltipProps {
  children: Parameters<typeof cloneElement>[0];
  text?: ReactNode;
  delay?: number;
  color?: UIColors;
  space?: number;
  placement?: TooltipPlacement;
  disabled?: boolean;
  showEvent?: showEventType;
  theme?: string;
}
const Tooltip = ({
  children,
  text,
  delay = 0.01,
  color,
  space = 12,
  placement = "bottom",
  theme = "dark",
  disabled = false,
  showEvent = "hover",
}: TooltipProps) => {
  const [show, setShow] = useState<0 | 1>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);
  const handleMOver = (e: Event) => {
    setShow(1);
    posRef.current = TooltipPosition(
      e.currentTarget as HTMLElement,
      tooltipRef.current,
      placement,
      space
    );
  };
  const handleMOut = () => {
    setShow(0);
  };
  const handleClick = (e: Event) => {
    e.stopPropagation();
    e.preventDefault();
    if (!show) {
      setShow(1);
      posRef.current = TooltipPosition(
        e.currentTarget as HTMLElement,
        tooltipRef.current,
        placement,
        space
      );
      setTimeout(() => {
        //I put setTimeout temporary, it must be refactored !!!
        setShow(0);
      }, 1500);
    } else setShow(0);
  };
  useOutsideClickWithRef(
    tooltipRef,
    () => {
      setShow((prevShow) => {
        return prevShow ? 0 : prevShow;
      });
    },
    showEvent === "hover",
    "click"
  );
  if (!text) return children;
  return (
    <>
      {disabled
        ? children
        : showEvent === "hover"
        ? cloneElement(children, {
            // @ts-expect-error Ignoring typescript for children dynamic usage
            onMouseOver: handleMOver,
            onMouseLeave: handleMOut,
          })
        : cloneElement(children, {
            // @ts-expect-error Ignoring typescript for children dynamic usage
            onClick: handleClick,
          })}
      {disabled || (
        <Portal>
          <CSSTransition
            in={!!show}
            timeout={300}
            classNames={{
              enterDone: styles["TooltipContainer--enterDone"],
              exitDone: styles["TooltipContainer--exitDone"],
              exit: styles["TooltipContainer--exit"],
              exitActive: styles["TooltipContainer--exit"],
            }}
          >
            <StyledTooltip
              theme={theme}
              color={color}
              delay={delay}
              ref={tooltipRef}
              posRef={posRef}
            >
              <div
                className={classNames(
                  Styles.TooltipTriangle,
                  Styles[`Tooltip-${placement}`]
                )}
              >
                <div>
                  <TriangleIcon width={30} height={30} />
                </div>
              </div>
              <h5>{text}</h5>
            </StyledTooltip>
          </CSSTransition>
        </Portal>
      )}
    </>
  );
};
export default Tooltip;
