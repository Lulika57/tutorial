import { useState } from "react";
import './App.css';
import Alert from "./components/Alert";
import Button from "./components/Button";
import Button2 from "./components/Button2";
// import {Button2} from "./components/Button2";

function App() {
    const [alertVisible, setAlertVisibility] = useState(false);

    return (
        <div>
            {alertVisible && <Alert title='You are a QUEEN' onClose={() => setAlertVisibility(false)} />}
            {/* <Button  onClick={() => setAlertVisibility((prev) => !prev)}>
                Click Here
            </Button> */}
            <Button2 onClick={() => setAlertVisibility((prev) => !prev)}></Button2>
        </div>
    );
}

export default App;