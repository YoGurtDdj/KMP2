import FoodCard from "./FoodCard";
import Loading from "../Loading";
import Error from "../Error";
import { useEffect, useState } from "react";

function FoodList(){
    const [foods, setFoods] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    
    useEffect(() => {
        async function fetchFoods(){
            try {
                setIsLoading(true);
                const res = await fetch(
                    "https://65efd925ead08fa78a510bcb.mockapi.io/food"
                );
                const data = await res.json();
                setFoods(data);
            } catch (e){
                console.error(e);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchFoods();
    }, []);

    return (
        <section className="food-page">
            <div className="container">
                <h1 className="title">Choose your course</h1>
                <div className="row">
                    {isLoading ? (<Loading/>) : (foods.map((food) => <FoodCard food={food} key={food.id} />))}
                </div>
                {isError && <Error />}
            </div>
        </section>
    );
}

export default FoodList;