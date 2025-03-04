import "./App.scss";
import Button from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuitem";

function App() {
  return (
    <div>
      <div>
        <Button>sfds</Button>
        <Button btnType="primary">sfds</Button>
        <Button btnType="danger" disabled>
          sfds
        </Button>
      </div>

      <div >
        <Menu defaultIndex="0">
          <MenuItem>link1</MenuItem>
          <MenuItem>link2</MenuItem>
          <MenuItem>link3</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default App;
