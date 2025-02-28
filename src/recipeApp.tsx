import { useState } from 'react';
import cn from 'clsx';
import './App.css';

export const listOfIngridients = ["Kefir", "Butter", "Sugar", "Eggs", "Soda", "Flour", "Vanilla"];
export const listOfMesurement = ["150 g", "100 g", "200 g", "2", "0.5 tsp", "250 g", "0.5 tsp"];

function App() {

    const [selectedIndex, setSelectedIndex] = useState(-1);
    function onClick() {

    }

    function isEven(number: number) {
        return number % 2 === 0
    }

    return (
        <div className="w-full flex flex-col">

            {listOfIngridients.map((ingridient, index) => (
                <div
                    onClick={onClick}
                    className={cn(
                        'shadow-green-50 px-2.5 py-4 text-2xl text-white',
                        isEven(index) ? 'bg-green-900' : 'bg-orange-500'
                    )}
                >
                    <p key={index}> {ingridient} </p>
                    {selectedIndex === index && <p>
                        {listOfIngridients[selectedIndex]} {listOfMesurement[selectedIndex]}
                    </p>}
                    <hr />

                </div>
            ))}

        </div>

    );

}

export default App;

// Correct width of colors
// Make a title
// Inset Pictures
// Create check boxes