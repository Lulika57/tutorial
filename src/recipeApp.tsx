import { useState } from 'react';
import cn from 'clsx';
import './App.css';
import { SlideShowMarquee } from './SlideShowMarquee';



export const listOfIngridients = ["Kefir", "Butter", "Sugar", "Eggs", "Baking soda", "Flour", "Vanilla"];
export const listOfMesurement = ["150 g", "100 g", "200 g", "2", "0.5 tsp mixed with vinegar ", "approximately 250 g", "0.5 tsp"];

// it allows to keep all the lines closed and open several lines at the same time
export const shownIngredientIndexes = [false, false, false, false, false, false, false];

function App() {
    // selected Indexes are open
    const [selectedIndexes, setSelectedIndexes] = useState<boolean[]>(shownIngredientIndexes);

    function handleClick(index: number) {
        // create new variable (data/state)
        const newSelectedIndexes = [...selectedIndexes];
        const theOpposite = !newSelectedIndexes[index];

        newSelectedIndexes[index] = theOpposite;
        setSelectedIndexes(newSelectedIndexes);
    }

    function isEven(number: number) {
        // modulo is opposite to division if remeinder answer will not be zero meaning it's odd 
        return number % 2 === 0
    }

    return (
        <div className="size-screen overflow-hidden">
            <h1 className='font-amatic font-bold text-5xl text-green-950 w-full text-center py-6'>
                <span className='text-[40px]'>🧁🧁🧁🧁🧁🧁🧁🧁🧁🧁🧁</span> Ana's Favourite Muffins <span className='text-[40px]'>🧁🧁🧁🧁🧁🧁🧁🧁🧁🧁🧁🧁</span></h1>
            <div className='flex h-[65vh]'>
                <div className="mx-4 flex flex-col justify-center font-amatic w-[30%] max-h-[80vh] overflow-auto custom-scrollbar">
                    {/* <p className='font-amatic font-bold text-5xl text-green-950'>🧁 Nastya's Favourite Muffins 🧁</p> */}
                    {listOfIngridients.map((ingridient, index) => (
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
                                <p key={index}> {ingridient} </p>
                            </div>
                            {/* // key is a unique identifier} */}

                            {
                                selectedIndexes[index] &&
                                // && means IF = if it's true - show it; otherwise don't
                                <div>
                                    <hr />
                                    {/* // hr  is a line across the sceen */}
                                    <p>
                                        {listOfMesurement[index]}
                                    </p>
                                </div>
                            }
                        </div>

                    ))}
                </div>
                <div className='w-[70%] px-4 flex flex-col justify-start gap-5  '>
                    <p className='bg-green-50 py-2 text-justify font-yellowtail text-[20px]'>1. Mix all the wet ingredients and sugar together using a mixer with dough extentions or a whisk (note: whisk helps you to build your muscsles). It would be better if you have them ready room temperature. But make sure you don't overheat them if you use a microwave to warm them up because they won't work properly this way. You can warm up butter in two ways: either melt it on a stove but don't let it boil - when you see a few pieces left just remove from the heat stirring all the time; or take butther out of the fridge and let it sit for an hour at least. From my personal experience using soft butter makes muffins fluffier (but this way a mixer is a must have).</p>
                    <p className='bg-green-50 text-justify font-yellowtail text-[20px]'>2. Add dry ingredients - flour, vanilla and baking soda. To get rid of soda taste just pour a little bit vinegar on a spoon, make use soda is covered with bubbles. It creates a simple chemical reactin so now you're not just a baker - you're a chemist as well - watch it fizzy and bubbly.</p>

                    <div className='py-2'>
                        <p className='text-3xl underline py-1 font-yellowtail'>Substitutes:</p>
                        <p><span className='font-bold'>
                            KEFIR</span> 
                            <span className='font-yellowtail text-2xl'>- Plain Yogurt, Buttermilk.</span>
                            </p>
                        <p><span className='font-bold'>
                            BUTTER</span> 
                            <span className='font-yellowtail text-2xl'>- Margarine (125 g).</span>
                            </p>
                        <p><span className='font-bold'>
                            VINEGAR</span>
                            <span className='font-yellowtail text-2xl'>- Lemon or Lime Juice.</span>
                            </p>
                        <p><span className='font-bold'>
                            VANILLA SUGAR</span> 
                            <span className='font-yellowtail text-2xl'>- Vanilla Extract.</span>
                            </p>
                        {/* // span is like a div but it doesn't create a new line */}
                    </div>
                </div>
            </div>

            <div className="fixed bottom-7 left-0 w-full h-[15vh]">
                <SlideShowMarquee />
            </div>
        </div>
    );

}

export default App;

