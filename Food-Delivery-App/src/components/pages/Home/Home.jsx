import React, { useState } from "react";
import "./Home.css";
import Header from "../../Header/Header";
import ExploreMenu from "../../ExploreMenu/ExploreMenu";
function Home() {
  const [catogory, setCatogory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu catogory={catogory} setCatogory={setCatogory} />
    </div>
  );
}

export default Home;
