import {
  ReactElement,
  InputHTMLAttributes,
  ChangeEvent,
  forwardRef,
} from "react";
import classNames from "classnames";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Icon from "../Icon/icon";
import React from 'react'


type InputSize = "lg" | "sm";
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  /**是否禁用 Input */
  disabled?: boolean;
  /**设置 input 大小，支持 lg 或者是 sm */
  size?: InputSize;
  /**添加图标，在右侧悬浮添加一个图标，用于提示 */
  icon?: IconProp;
  /**添加前缀 用于配置一些固定组合 */
  prepend?: string | ReactElement;
  /**添加后缀 用于配置一些固定组合 */
  append?: string | ReactElement;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { disabled, size, icon, prepend, append, style, ...restProps } = props;
  const cnames = classNames("as-input-wrapper", {
    [`input-size-${size}`]: size,
    "is-disabled": disabled,
    "input-group": prepend || append,
    "input-group-append": !!append,
    "input-group-prepend": !!prepend,
  });
  const fixControlledValue = (value: any) => {
    if (typeof value === "undefined" || value === null) {
      return "";
    }
    return value;
  };
  if ("value" in props) {
    delete restProps.defaultValue;
    restProps.value = fixControlledValue(props.value);
  }
  return (
    <div className={cnames} style={style}>
      {prepend && <div className="as-input-group-prepend">{prepend}</div>}
      {icon && (
        <div className="icon-wrapper">
          <Icon icon={icon} title={`title-${icon}`} />
        </div>
      )}
      <input
        ref={ref}
        className="as-input-inner"
        disabled={disabled}
        {...restProps}
      />
      {append && <div className="as-input-group-append">{append}</div>}
    </div>
  );
});

export default Input;
