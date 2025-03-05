import "./App.scss";
import { FC } from "react";
import Button from "./components/Button/button";
import Menu, { MenuProps } from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuitem";
import SubMenu from "./components/Menu/subMenu";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";


import './components/Button/style.scss'
import './components/Menu/style.scss'
import './components/Icon/style.scss'
import './components/Transiton/style.scss'

library.add(fas)
const App: FC = () => {
  const testProps: MenuProps = {
    defaultIndex: "0",
    // onSelect: () => {
    //   console.log("selected");
    // },
    mode: "horizontal",
    // defaultOpenSubMenus: ["4"],
    // className: "test",
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
