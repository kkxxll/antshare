import "./App.scss";
import { FC } from "react";
import Input from "./components/Input/input";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";


import './components/Button/style.scss'
import './components/Menu/style.scss'
import './components/Icon/style.scss'
import './components/Transiton/style.scss'
import './components/Input/style.scss'
import './components/Upload/style.scss'

library.add(fas)
const App: FC = () => {
  return (
    <div>
      <Input icon="search" />
    </div>
  );
};

export default App;
