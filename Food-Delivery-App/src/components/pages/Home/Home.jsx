import React, { useState } from "react";
import "./Home.css";
import Header from "../../Header/Header";
import ExploreMenu from "../../ExploreMenu/ExploreMenu";
import FoodDisplay from "../../FoodDisplay/FoodDisplay";
function Home() {
  const [category, setCatogory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu catogory={category} setCatogory={setCatogory} />
      <FoodDisplay category={category} />
    </div>
  );
}

export default Home;
