import { ProductCardHorizontal, FinalPrice, Navbar, Alert } from "../Components";
import { useCart, useAlert } from "../context";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, Fragment } from "react";

export const Cart = () => {
  const [route, setRoute] = useState();
  const navigate = useNavigate();
  const {
    cartState: { cart }
  } = useCart();

  useEffect(() => {
    setRoute("cart");
  }, [route]);

  const {alert} = useAlert();
  
  return (
    <Fragment>
      <Navbar route={route} />
      <main className="margin-top wishlist-page-container">
        {cart.length > 0 ? (
          <>
          <h2 className="text-center">My Cart</h2>
          <div className="d-flex gap-48px wrap justify-center">
            <div className="flex-col">
              {cart.map((product) => (
                <ProductCardHorizontal product={product} key={product.id} />
              ))}
            </div>
            <FinalPrice />
          </div>
          </>
        ) : (
          <div className="text-center">
            <h2>Cart Empty</h2>
            <button class="button btn-link-primary cursor" onClick={() => navigate("/products")}>
              <span class="link-primary" href="#" target="_blank">Click to add items to Cart</span>
            </button>
          </div>
        )}
      </main>
      {alert.open && <Alert />}
    </Fragment>
  );
};
