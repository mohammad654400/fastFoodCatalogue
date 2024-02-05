import { useEffect, useState } from "react";
import "./App.css";
import CategoryList from "./CategoryList/categoryList";
import Header from "./Header/header";
import axios from "./axios";
import Loading from "./Loading/loading";
import FastFoodList from "./FastFoodList/fastFoodList";
import SearchBar from "./SearchBar/searchBar";

function App() {
  const [loading, setLoading] = useState(false);
  const [fastFoodItems, setFastFoods] = useState([]);

  const fetchData = async (categoryId = null) => {
    setLoading(true);
    const response = await axios.get(
      `/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`
    );
    setLoading(false);
    setFastFoods(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterItem = (categoryId) => {
    fetchData(categoryId);
  };

  const searchItems = async (term) => {
    setLoading(true);
    const response = await axios.get(
      `/FastFood/search/${term ? "?term=" + term : ""}`
    );
    setLoading(false);
    setFastFoods(response.data);
  };

  const renderContent = () => {
    if (loading) {
      return <Loading theme="dark" />;
    }
    return <FastFoodList fastFoodItems={fastFoodItems} />;
  };

  return (
    <div className="wrapper bg-faded-dark">
      <Header></Header>
      <CategoryList filterItem={filterItem}>
        <SearchBar searchItems={searchItems}/>
      </CategoryList>

      <div className="container mt-4 ">{renderContent()}</div>
    </div>
  );
}

export default App;
