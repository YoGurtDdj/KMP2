import "./assets/css/style.css";
import Header from "./components/Header"; 
import Footer from "./components/Footer";
import FoodList from "./components/foods/FoodList";

function App() {
  return (
    <div>
      <Header />
      <FoodList />
      <Footer />
    </div>
  );
}

export default App;
