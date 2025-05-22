import './App.css';
import { IngredientList } from './components/IngredientList';
import { Recipe } from './components/Recipe';
import { SlideShowMarquee } from './components/SlideShowMarquee';


function App() {
    const listOfIngredients = [
        { name: "Kefir", quantity: "150 g (2/3 cup)" },
        { name: "Butter", quantity: "100 g (1/2 cup)" },
        { name: "Sugar", quantity: "200 g (1 cup)" },
        { name: "Eggs", quantity: "2" },
        { name: "Baking soda", quantity: "0.5 tsp mixed with vinegar " },
        { name: "Flour", quantity: "approximately 250 g (2 cups)" },
        { name: "Vanilla", quantity: "0.5 tsp" },
    ]

    const substitutes = [
        { toSubstitute: "KEFIR", substitution: "- Plain Yogurt, Buttermilk." },
        { toSubstitute: "BUTTER", substitution: "- Margarine (125 g (2/3 cup))." },
        { toSubstitute: "VINEGAR", substitution: "- Lemon or Lime Juice." },
        { toSubstitute: "VANILLA SUGAR", substitution: "- Vanilla Extract." },
    ]

    const instructions = [
        "1. Mix all the wet ingredients and sugar together using a mixer with dough extentions or a whisk (note: whisk helps you to build your muscsles). It would be better if you have them ready room temperature. But make sure you don't overheat them if you use a microwave to warm them up because they won't work properly this way. You can warm up butter in two ways: either melt it on a stove but don't let it boil - when you see a few pieces left just remove from the heat stirring all the time; or take butther out of the fridge and let it sit for an hour at least. From my personal experience using soft butter makes muffins fluffier (but this way a mixer is a must have).",
        "2. Add dry ingredients - flour, vanilla and baking soda. To get rid of soda taste just pour a little bit vinegar on a spoon, make use soda is covered with bubbles. It creates a simple chemical reactin so now you're not just a baker - you're a chemist as well - watch it fizzy and bubbly."
    ]

    return (
        <div className="size-screen overflow-hidden">
            <h1 className='font-amatic font-bold text-5xl text-green-950 w-full text-center py-6'>
                <span className='text-[40px]'>🧁🧁🧁🧁🧁🧁🧁🧁🧁🧁🧁</span> Ana's Favourite Muffins <span className='text-[40px]'>🧁🧁🧁🧁🧁🧁🧁🧁🧁🧁🧁🧁</span>
            </h1>

            <div className='lg:flex xl:flex lg:h-[65vh] xl:h-[65vh]'>
                <IngredientList listOfIngredients={listOfIngredients} />
                <Recipe instructions={instructions} substitutes={substitutes} />
            </div>

            <div className='xl:h-0 lg:h-0 h-[20vh] bg-white'></div>

            <div className="fixed bottom-0 left-0 w-full h-[20vh] bg-white pt-2">
                <SlideShowMarquee />
            </div>
        </div>
    );

}

export default App;

