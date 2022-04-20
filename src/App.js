import Toggle from "./components/Toggle";
import Tab from "./components/Tab";
import Input from "./components/Input";
import Dropdown from "./components/Dropdown";

import "./App.css";

function App() {
    return (
        <div className="App">
            <h1>1. Toggle.js</h1>
            <Toggle />
            <h1>2. Tab.js</h1>
            <Tab />
            <h1>4. Input.js</h1>
            <Input />
            <h1>5. Dropdown.js</h1>
            <Dropdown />
        </div>
    );
}

export default App;
