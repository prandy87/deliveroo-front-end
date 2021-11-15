import image from "../Assets/Pictures/main-image.jpeg";
import Basket from "./Basket";
import { useState } from "react";

const Body = ({ name, description, category }) => {
  const [basket, setBasket] = useState([]);
  const buyItem = (title, price, id) => {
    const newItem = { title: title, price: price, id: id, quantity: 1 };
    const newBasket = [...basket];
    if (newBasket.some((el) => el.id === newItem.id)) {
      const index = newBasket.findIndex((el) => el.id === newItem.id);
      newBasket[index].quantity++;
      console.log("new quantity");
    } else {
      newBasket.push(newItem);
      console.log("new item");
    }
    setBasket(newBasket);
    console.log("new basket", newBasket);
  };

  return (
    <>
      <div className="container">
        <div className="restaurant">
          <div className="description">
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
          <img src={image} alt="sdfs" />
        </div>
      </div>
      <div className="offres">
        <div class="menu">
          {category.map((elem, index) => {
            return (
              <>
                <h2 key={index}>{elem.name}</h2>
                <div className="content-center">
                  {elem.meals.map((elem, index) => {
                    return (
                      <div
                        key={index}
                        className="box"
                        onClick={() => {
                          buyItem(elem.title, elem.price, elem.id);
                        }}
                      >
                        <div className="item">
                          <h3>{elem.title}</h3>
                          {elem.description ? (
                            <span className="para">{elem.description}</span>
                          ) : (
                            <span></span>
                          )}

                          <span className="price">{elem.price} €</span>
                          {elem.popular ? (
                            <span className="popular">Populaire</span>
                          ) : (
                            <span></span>
                          )}
                        </div>
                        {elem.picture ? (
                          <img src={elem.picture} alt="food" />
                        ) : (
                          <span></span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
        <Basket basket={basket} setBasket={setBasket} />
      </div>
    </>
  );
};

export default Body;
