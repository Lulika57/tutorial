import { useState } from 'react';
import './App.css';

export const listOfProvinces = ["Ontario", "Brutish Columbia", "Nova Scotia"]
export const listOfCities = ["Toronto", "Vancouver", "Halifax"]

function App() {

    const [selectedIndex, setSelectedIndex] = useState(-1);

    function handleClick(index: number) {
        const somethingIsAlreadyClicked = selectedIndex >= 0;
        const isClickedAlreadyOpened = index == selectedIndex;

        if (somethingIsAlreadyClicked && isClickedAlreadyOpened) {
            // everything should be closed
            setSelectedIndex(-1)
        } else {
            // open 
            setSelectedIndex(index)
        }
    }

    return (
        <div className="w-full flex flex-col">
            {listOfProvinces.map((province, index) => (
                <div onClick={(event) => handleClick(index)}>
                    <p key={index}>{province}</p>
                    {selectedIndex == index && <p>
                        the capital of {listOfProvinces[selectedIndex]} is {listOfCities[selectedIndex]}
                    </p>}
                    <hr />
                </div>
            ))}

        </div>
    );
}

export default App;

