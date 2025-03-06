import { useState } from 'react';
import cn from 'clsx';
import './App.css';

import muffinPic from './assets/1.jpg'
import muffinPic2 from './assets/2.jpg'
import muffinPic3 from './assets/3.jpg'
import muffinPic4 from './assets/4.jpg'
import muffinPic5 from './assets/5.jpg'
import muffinPic6 from './assets/6.jpg'
import muffinPic7 from './assets/7.jpg'
import muffinPic8 from './assets/8.jpg'


export const listOfIngridients = ["Kefir", "Butter", "Sugar", "Eggs", "Baking soda", "Flour", "Vanilla"];
export const listOfMesurement = ["150 g", "100 g", "200 g", "2", "0.5 tsp mixed with vinegar", "approximately 250 g", "0.5 tsp"];
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
        <div className="size-screen flex">
            <div className="w-[50vw] flex-col">
                <p className='text-5xl text-green-950 shadow-green-100 text-center py-2.5'>Nastya's Favourite Muffins</p>
                {listOfIngridients.map((ingridient, index) => (
                    <div
                        onClick={() => handleClick(index)}
                        className={cn(
                            'shadow-green-50 px-2.5 py-4 text-2xl text-white',
                            isEven(index) ? 'bg-green-950' : 'bg-orange-300'
                        )}
                    >
                        <div className='flex gap-4'>
                            <input type="checkbox" onClick={(event) => event.stopPropagation()} />
                            <p key={index}> {ingridient} </p>
                        </div>
                        {selectedIndexes[index] &&
                            <div>
                                <hr />
                                <p>
                                    {listOfMesurement[index]}
                                </p>
                            </div>}
                    </div>

                ))}
            </div>

            <div className='w-[50vw] bg-amber-200'>
                <img src={muffinPic} />
                <img src={muffinPic2} />
                <img src={muffinPic3} />
                <img src={muffinPic4} />
                <img src={muffinPic5} />
                <img src={muffinPic6} />
                <img src={muffinPic7} />
                <img src={muffinPic8} />
            </div>
        </div>
    );

}

export default App;

// Correct width of colors
// Make a title
// Inset Pictures
// Create check boxes