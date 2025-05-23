import React, {
  FC,
  useContext,
  useState,
  ReactNode,
  ReactElement,
  FunctionComponent,
  useRef,
} from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { MenuItemProps } from "./menuitem";
import Icon from "../Icon/icon";
import Transition from "../Transiton/transition";

export interface SubMenuProps {
  index?: string;
  /**下拉菜单选项的文字 */
  title: string;
  /**下拉菜单选型的扩展类名 */
  className?: string;
  children?: ReactNode;
}

export const SubMenu: FC<SubMenuProps> = ({
  index,
  title,
  children,
  className,
}) => {
  const nodeRef = useRef(null);
  const context = useContext(MenuContext);
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>;
  const isOpend =
    index && context.mode === "vertical"
      ? openedSubMenus.includes(index)
      : false;
  const [menuOpen, setOpen] = useState(isOpend);
  const classes = classNames("menu-item submenu-item", className, {
    "is-active": context.index === index,
    "is-opened": menuOpen,
    "is-vertical": context.mode === "vertical",
  });
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!menuOpen);
  };
  let timer: number | undefined;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setOpen(toggle);
    }, 300);
  };
  const clickEvents =
    context.mode === "vertical"
      ? {
          onClick: handleClick,
        }
      : {};
  const hoverEvents =
    context.mode !== "vertical"
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false);
          },
        }
      : {};
  const renderChildren = () => {
    const subMenuClasses = classNames("as-submenu", {
      "menu-opened": menuOpen,
    });
    const childrenComponent = React.Children.map(children, (child, i) => {
      // const childElement = child as FunctionComponentElement<MenuItemProps>;
      const childElement = child as ReactElement<
        MenuItemProps,
        FunctionComponent<MenuItemProps>
      >;
      if (childElement.type.displayName === "MenuItem") {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`,
        });
      } else {
        console.error(
          "Warning: SubMenu has a child which is not a MenuItem component"
        );
      }
    });
    return (
      <Transition in={menuOpen} timeout={300} animation="zoom-in-top" forRef={nodeRef}>
        <ul className={subMenuClasses} ref={nodeRef}>{childrenComponent}</ul>
      </Transition>
    );
  };
  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
        <Icon icon="angle-down" className="arrow-icon" />
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = "SubMenu";
export default SubMenu;
