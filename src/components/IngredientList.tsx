import cn from 'clsx';
import { useState } from 'react';

type props = {
    listOfIngredients: { name: string, quantity: string }[]
}

export function IngredientList({ listOfIngredients }: props) {

    function isEven(number: number) {
        // modulo is opposite to division if remeinder answer will not be zero meaning it's odd 
        return number % 2 === 0
    }

    const shownIngredientIndexes = [false, false, false, false, false, false, false];
    // selected Indexes are open

    const [selectedIndexes, setSelectedIndexes] = useState<boolean[]>(shownIngredientIndexes);



    function handleClick(index: number) {
        // create new variable (data/state)
        const newSelectedIndexes = [...selectedIndexes];
        const theOpposite = !newSelectedIndexes[index];

        newSelectedIndexes[index] = theOpposite;
        setSelectedIndexes(newSelectedIndexes);

    }

    return (
        <div className="mx-4 flex flex-col justify-center font-amatic lg:w-[30%] xl:w-[30%] max-h-[80vh] overflow-auto custom-scrollbar">
            {/* <p className='font-amatic font-bold text-5xl text-green-950'>🧁 Nastya's Favourite Muffins 🧁</p> */}
            {listOfIngredients.map((ingridient, index) => (
                <div
                    onClick={() => handleClick(index)}
                    className={cn(
                        'shadow-green-50 px-2.5 py-3 text-4xl text-white rounded-2xl',
                        isEven(index) ? 'bg-green-800' : 'bg-pink-200'
                    )}
                >
                    <div className='flex gap-4'>
                        <input type="checkbox" onClick={(event) => event.stopPropagation()} />
                        {/* // stopPropagation means the elements belove it won't know that the element has been clicked */}
                        <p key={index}> {ingridient.name} </p>
                    </div>
                    {/* // key is a unique identifier} */}

                    {
                        selectedIndexes[index] &&
                        // && means IF = if it's true - show it; otherwise don't
                        <div>
                            <hr />
                            {/* // hr  is a line across the sceen */}
                            <p>
                                {ingridient.quantity}
                            </p>
                        </div>
                    }
                </div>

            ))}
        </div>
    )
}