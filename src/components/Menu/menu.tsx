import classNames from "classnames";
import React, { createContext, CSSProperties, ReactElement, ReactNode, useState } from "react";
import { MenuItemProps } from "./menuitem";
import './style.scss'

type MenuMode = "horizontal" | "vertical";
export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  /**菜单类型 横向或者纵向 */
  mode?: MenuMode;
  style?: CSSProperties;
  onSelect?: (selectedIndex: string) => void;
  /**设置子菜单的默认打开 只在纵向模式下生效 */
  defaultOpenSubMenus?: string[];
  children?: ReactNode;
}

interface IMenuContext {
  index: string;
  onSelect?: (selectedIndex: string) => void;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}

export const MenuContext = createContext<IMenuContext>({ index: "0" });

const Menu: React.FC<MenuProps> = ({
  defaultIndex = "0",
  className,
  mode = "horizontal",
  style,
  onSelect,
  defaultOpenSubMenus = [],
  children,
}) => {
  const [currentActive, setActive] = useState(defaultIndex);

  const classes = classNames("as-menu", className, {
    "menu-vertical": mode === "vertical",
  });

  const handleClick = (index: string) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : "0",
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  };
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      // const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const childElement = child as ReactElement<
        MenuItemProps,
        React.FunctionComponent<MenuItemProps>
      >;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return React.cloneElement(childElement, {
          index: index.toString(),
        });
      } else {
        console.error(
          "Warning: Menu has a child which is not a MenuItem component"
        );
      }
    });
  };
  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

export default Menu;
