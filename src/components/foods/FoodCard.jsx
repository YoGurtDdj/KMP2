function FoodCard( {food} ){
    return (
        <div className="food-card">
            <div className="food-img">
                <img src={food.imageUrl} alt={food.name} />
            </div>
            <h3 className="food-name">{food.name}</h3>
            <h4 className="food-size">{food.size}</h4>
            <h4 className="food-price">{food.price + " тг"}</h4>
        </div>
    );
}

export default FoodCard;