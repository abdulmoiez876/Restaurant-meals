import {useState} from 'react';
import './NavigationBar.css';

const NavigationBar = (props) => {
    const [categorySelected, setCategorySelected] = useState('all')

    function selectionHandler(event) {
        event.preventDefault();
        setCategorySelected(event.target.name);
        props.selectedMeal(event.target.name);
    }
    return (
        <nav className="navMenu">
            <a href='#' onClick={selectionHandler} name='breakfast' value={categorySelected}>Breakfast</a>
            <a href='#' onClick={selectionHandler} name='lunch' value={categorySelected}>Lunch</a>
            <a href='#' onClick={selectionHandler} name='evening' value={categorySelected}>Evening</a>
            <a href='#' onClick={selectionHandler} name='dinner' value={categorySelected}>Dinner</a>
            <a href='#' onClick={selectionHandler} name='all' value={categorySelected}>All</a>
            <div className="dot"></div>
        </nav>
    );
};

export default NavigationBar;