import React, { FC } from "react";
import { ThemeProps } from "../Icon/icon";
export interface ProgressProps {
  percent: number;
  strokeHeight?: number;
  showText?: boolean;
  styles?: React.CSSProperties;
  theme?: ThemeProps;
}

const Progress: FC<ProgressProps> = (props) => {
  const {
    percent,
    strokeHeight = 15,
    showText = true,
    styles,
    theme = "primary",
  } = props;
  return (
    <div className="as-progress-bar" style={styles}>
      <div
        className="as-progress-bar-outer"
        style={{ height: `${strokeHeight}px` }}
      >
        <div
          className={`as-progress-bar-inner color-${theme}`}
          style={{ width: `${percent}%` }}
        >
          {showText && <span className="inner-text">{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  );
};
export default Progress;
