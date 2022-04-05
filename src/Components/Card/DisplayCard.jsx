import './DisplayCard.css';

const DisplayCard = (props) => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-body">
                    <span className="card-number card-circle subtle">{props.id}</span>
                    <span className="card-author subtle">{props.category}</span>
                    <h2 className="card-title">{props.name}</h2>
                    <span className="card-description subtle">{props.description}</span>
                    <div className="card-read">Read</div>
                </div>
                <img className='card-media' src={props.image} alt="Food Pic" />
                <span className="card-tag subtle">Order Now</span>
            </div>
        </div>
    )
}

export default DisplayCard;