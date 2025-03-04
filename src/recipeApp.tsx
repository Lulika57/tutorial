import { useState } from 'react';
import cn from 'clsx';
import './App.css';

export const listOfIngridients = ["Kefir", "Butter", "Sugar", "Eggs", "Soda", "Flour", "Vanilla"];
export const listOfMesurement = ["150 g", "100 g", "200 g", "2", "0.5 tsp", "250 g", "0.5 tsp"];
export const shownIngredientIndexes = [false, false, false, false, false, false, false];

function App() {
    const [selectedIndexes, setSelectedIndexes] = useState<boolean[]>(shownIngredientIndexes);

    function handleClick(index: number) {
        // create new variable (data/state)
        const newSelectedIndexes = [...selectedIndexes];
        const theOpposite = !newSelectedIndexes[index];

        newSelectedIndexes[index] = theOpposite;
        setSelectedIndexes(newSelectedIndexes);
    }

    function isEven(number: number) {
        return number % 2 === 0
    }

    return (
        <div className="w-full flex flex-col">

            {listOfIngridients.map((ingridient, index) => (
                <div
                    onClick={() => handleClick(index)}
                    className={cn(
                        'shadow-green-50 px-2.5 py-4 text-2xl text-white',
                        isEven(index) ? 'bg-green-900' : 'bg-orange-500'
                    )}
                >
                    <p key={index}> {ingridient} </p>
                    {selectedIndexes[index] && <p>
                        {listOfMesurement[index]}
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