import { useState } from 'react';
import './App.css';

export const listOfProvinces = ["Ontario", "Brutish Columbia", "Nova Scotia"]
export const listOfCities = ["Toronto", "Vancouver", "Halifax"]

function App() {

    const [selectedIndex, setSelectedIndex] = useState(-1);

    function handleClick() {
        const somethingIsAlreadyClicked = selectedIndex >= 0;
        if (somethingIsAlreadyClicked) {
            setSelectedIndex(-1)
        }
        else {

        }
    }

    return (
        <div className="w-full flex flex-col">
            {listOfProvinces.map((province, index) => (
                <>
                    <p onClick={handleClick} key={index}>{province}</p>
                    {selectedIndex === index && <p>
                        the capital of {listOfProvinces[selectedIndex]} is {listOfCities[selectedIndex]}
                    </p>}
                    <hr />
                </>
            ))}

        </div>
    );
}

export default App;

// fix duplication bug
// we want to be able to close on reclick