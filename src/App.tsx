import { useState } from 'react';
import cn from 'clsx';
import './App.css';
import { ExampleButton } from './ExampleButton';
import { ExampleAlert } from './components/ExampleAlert';



function App() {

    const [alertVisible, setAlertVisibility] = useState(false);

    return (
        <div className="w-full">
            {alertVisible && <ExampleAlert onClose={() => setAlertVisibility(false)}></ExampleAlert>}
            <div className="static size-screen">
                <div className="flex flex-col justify-center">
                    <div className="w-full flex justify-center">
                        <ExampleButton onClick={() => setAlertVisibility(true)}></ExampleButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;

