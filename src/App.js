import { useEffect, useState } from "react";
import "./App.css";
import CategoryList from "./CategoryList/categoryList";
import Header from "./Header/header";
import axios from "./axios";
import Loading from "./Loading/loading";
import FastFoodList from "./FastFoodList/fastFoodList";
import SearchBar from "./SearchBar/searchBar";
import notFound from "./assets/images/404.png"
import useAxios from "./useAxios";

function App() {

  const [url,setUrl]=useState("/FastFood/list")
  const[fastFoodItems,,loading]=useAxios({
    url
  })



  const filterItem = (categoryId) => {
    setUrl(`/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`)
    // fetchData(categoryId);
  };

  const searchItems = async (term) => {
    setUrl(`/FastFood/search/${term ? "?term=" + term : ""}`)
    // setLoading(true);
    // const response = await axios.get(
    //   `/FastFood/search/${term ? "?term=" + term : ""}`
    // );
    // setLoading(false);
    // setFastFoods(response.data);
  };

  const renderContent = () => {
    if (loading) {
      return <Loading theme="dark" />;
    }


    if(fastFoodItems.length == 0){
      return(
        <>
          <div className="alert alert-warning text-center">
            برای کلید واژه فوق هیچ آیتمی یافت نشد
          </div>
          <img className="mx-auto mt-5 d-block" src={notFound}/>
        </>
      )
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
