import { useState } from 'react';
import './App.css';

export const listOfProvinces = ["Ontario", "Brutish Columbia", "Nova Scotia"]
export const listOfCities = ["Toronto", "Vancouver", "Halifax"]

function App() {

    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <div className="w-full flex flex-col">
            {listOfProvinces.map((province, index) => (
                <>
                    <p onClick={() => setSelectedIndex(index)} key={index}>{province}</p>
                    <hr />
                </>
            ))}
            {selectedIndex >= 0 && <p>
                the capital of province is city
            </p>}
        </div>
    );
}

export default App;