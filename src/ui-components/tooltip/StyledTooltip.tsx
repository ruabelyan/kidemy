// import { useStyles } from "@/helpers";
import classNames from "classnames";
import { forwardRef, MutableRefObject, PropsWithChildren } from "react";
import Styles from "./Tooltip.module.scss";
import { useStyles } from "@/helpers";

//TODO fix
export type UIColors = "primary" | "danger" | "success" | "warning";

export interface StyledTooltipProps {
  delay?: number;
  color?: UIColors;
  posRef: MutableRefObject<{
    x: number;
    y: number;
  }>;
  hide?: boolean;
  theme?: string;
}

const StyledTooltip = forwardRef<
  HTMLDivElement,
  PropsWithChildren<StyledTooltipProps>
>(
  (
    { children, posRef, color = "primary", hide = false, theme = "dark" },
    tooltipRef
  ) => {
    const tooltipClassNames = useStyles(
      {
        root: {
          top: (data) => `${data.y}px`,
          left: (data) => `${data.x}px`,
        },
      },
      {
        y: posRef.current.y,
        x: posRef.current.x,
      }
    );

    return (
      <div
        ref={tooltipRef}
        className={classNames(tooltipClassNames.root, Styles.TooltipContainer, {
          [Styles.TooltipContainerHidden]: hide,
        })}
      >
        <div
          className={classNames(
            Styles.TooltipWrapper,
            Styles[`TooltipColor--${color}`],
            Styles[`TooltipWrapper--${theme}`]
          )}
        >
          {children}
        </div>
      </div>
    );
  }
);

export default StyledTooltip;
