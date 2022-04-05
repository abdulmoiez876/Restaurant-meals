import DisplayCard from './DisplayCard';
import './DisplayCard.css';

const Card = (props) => {
    const mealsList = props.meals;
    const filterMeal = props.filterMeal;
    let mealsToBeDisplayed = [];
    
    if(filterMeal === 'all') {
        mealsToBeDisplayed = mealsList;
    }
    else {
        mealsToBeDisplayed = mealsList.filter((mealItem) => {
            return (
                filterMeal === mealItem.category
            )
        })
    }
    return (
        <section className="main-card--container">
            {mealsToBeDisplayed.map((meal) => {
                return (
                    <DisplayCard
                        key={meal.id}
                        id={meal.id}
                        name={meal.name}
                        image={meal.image}
                        category={meal.category}
                        description={meal.description}
                        price={meal.price}
                    />
                )
            })}
        </section>
    )
}

export default Card;