import "./App.css";
import { useState, useEffect } from "react";

import axios from "axios";

import Header from "./Components/Header";
import Body from "./Components/Body";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://deliveroo-backend-proj.herokuapp.com/"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <>
      <div>
        <Header />
        <Body
          name={data.restaurant.name}
          description={data.restaurant.description}
          category={data.categories}
        />
      </div>
    </>
  );
}

export default App;
