import classNames from "classnames";

type MenuMode = "horizontal" | "vertical";
export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: (selectedIndex: string) => void;
  children: React.ReactNode;
}

const Menu: React.FC<MenuProps> = ({
  defaultIndex,
  className,
  mode,
  style,
  onSelect,
  children,
}) => {
  const classes = classNames("as-menu", className, {
    "menu-vertical": mode === "vertical",
  });
  return (
    <ul className={classes} style={style}>
      {children}
    </ul>
  );
};

export default Menu;
