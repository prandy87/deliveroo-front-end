const Basket = ({ basket, setBasket }) => {
  let grandTotal = 0;

  return (
    <div className="panier">
      <button className="val-button">Valider mon panier</button>
      <div className="panier-content">
        {basket.map((item, i) => {
          const total = Number(item.price) * Number(item.quantity);
          grandTotal += Number(total);
          Math.round(grandTotal);
          grandTotal.toFixed([2]);

          return (
            <>
              {item.quantity > 0 && (
                <div className="purchase">
                  <button
                    onClick={() => {
                      const newBasket = [...basket];
                      newBasket[i].quantity--;
                      setBasket(newBasket);
                    }}
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    onClick={() => {
                      const newBasket = [...basket];
                      newBasket[i].quantity++;
                      setBasket(newBasket);
                    }}
                  >
                    +
                  </button>
                  <div className="title-total">
                    <span className="title">{item.title}</span>
                    <span className="total">{total.toFixed([2])} €</span>
                  </div>
                </div>
              )}
            </>
          );
        })}
        {grandTotal > 0 && (
          <div className="sous-total">
            Sous-total : {grandTotal.toFixed([2])} €
          </div>
        )}

        <div className="grand-total">
          {grandTotal > 0 ? `Total : ${(grandTotal + 2.5).toFixed([2])} €` : ""}
        </div>
        <div className="">
          {basket.length !== 0 && grandTotal !== 0
            ? "Total frais de livraison : 2,50 €"
            : "Votre panier est vide"}
        </div>
      </div>
    </div>
  );
};

export default Basket;
