import { useState } from 'react';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Card from './Components/Card/Card';
import meals from './Components/Menu/menuApi';

const App = () => {
    const [filterMeal, setFilterMeal] = useState('all');
    function selectedMeal(meal) {
        setFilterMeal(meal);
    }
    return (
        <>
            <NavigationBar
                selectedMeal={selectedMeal}
            />
            <Card
                meals = {meals}
                filterMeal = {filterMeal}
            />
        </>
    )
};

export default App;