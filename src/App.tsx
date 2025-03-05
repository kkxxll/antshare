import "./App.scss";
import { FC } from "react";
import Button from "./components/Button/button";
import Menu, { MenuProps } from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuitem";
import SubMenu from "./components/Menu/subMenu";

const App: FC = () => {
  const testProps: MenuProps = {
    defaultIndex: "0",
    onSelect: () => {
      console.log("selected");
    },
    mode: "vertical",
    defaultOpenSubMenus: ["4"],
    className: "test",
  };
  return (
    <div>
      <Button btnType="primary"> primary button </Button>
      <Button btnType="danger"> danger button </Button>
      <Button btnType="link" href="https://google.com">
        link button
      </Button>
      <Menu {...testProps} defaultIndex="0">
        <MenuItem>active</MenuItem>
        <MenuItem disabled>disabled</MenuItem>
        <MenuItem>xyz</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>drop1</MenuItem>
        </SubMenu>
        <SubMenu title="opened">
          <MenuItem>opened1</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default App;
