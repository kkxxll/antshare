import classNames from "classnames";

export interface MenuItemProps {
  index?: string;
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  onSelect?: (selectedIndex: string) => void;
  children: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({
  index,
  className,
  disabled,
  style,
  onSelect,
  children,
}) => {
  const classes = classNames("as-menu-item", className, {
    "is-disabled": disabled,
  });
  return (
    <li className={classes} style={style}>
      {children}
    </li>
  );
};

export default MenuItem;
