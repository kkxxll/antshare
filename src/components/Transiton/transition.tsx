import React, { ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";

type AnimationName =
  | "zoom-in-top"
  | "zoom-in-left"
  | "zoom-in-bottom"
  | "zoom-in-right";

type TransitionProps = CSSTransitionProps & {
  animation?: AnimationName;
  wrapper?: boolean;
  children?: ReactNode;
};

const Transition: React.FC<TransitionProps> = ({
  children,
  classNames,
  animation,
  wrapper,
  unmountOnExit = true,
  appear = true,
  forRef = null,
  ...restProps
}) => {
  return (
    <CSSTransition
      nodeRef={forRef}
      classNames={classNames ? classNames : animation}
      {...restProps as any}
    >
      {wrapper ? <div className="clearfix">{children}</div> : children}
    </CSSTransition>
  );
};
export default Transition;
