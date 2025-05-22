import { useState } from "react";
import './App.css';
// import Alert from "./components/Alert";
// import Button from "./components/Button";
import { Button2 } from "./components/Button2";
import { Alert2 } from "./components/Alert2";
// import Button2 from "./components/Button2";
// import {Button2} from "./components/Button2";

function App() {
    const [alertVisible, setAlertVisibility] = useState(false);

    return (
        <div className="w-full">
            {/* {alertVisible && <Alert title='You are a QUEEN' onClose={() => setAlertVisibility(false)} />} */}
            {alertVisible && <Alert2 onClose={() => setAlertVisibility(false)}></Alert2>}
            {/* <Button  onClick={() => setAlertVisibility((prev) => !prev)}>
                Click Here
            </Button> */}
            <div className="static size-screen">
                <div className="flex flex-col justify-center">
                    <div className="w-full flex justify-center">
                        <Button2 onClick={() => setAlertVisibility(true)}></Button2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;