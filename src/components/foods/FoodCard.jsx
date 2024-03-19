function FoodCard( {food} ){
    return (
        <div className="food-card">
            <div className="food-img">
                <a href={food.videoUrl} target="_blank">
                    <img src={food.imageUrl} alt={food.name} />
                </a>
            </div>
            <h3 className="food-name">{food.name}</h3>
            <h4 className="food-size">{food.size}</h4>
            <h4 className="food-price">{food.price + " тг"}</h4>
        </div>
    );
}

export default FoodCard;