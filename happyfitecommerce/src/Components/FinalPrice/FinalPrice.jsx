import './FinalPrice.css';
import { useCart, useAlert } from '../../context';
import { useNavigate } from 'react-router-dom';

export const FinalPrice = () => {
  let {
    cartState: {
      cart,
      deliveryCharge,
      totalItemPrice,
      discountedPrice,
      totalAmount
    },
    cartDispatch
  } = useCart();

  const { setAlert } = useAlert();
  const navigate = useNavigate();

  totalItemPrice = cart.reduce(
    (previousValue, currentValue) =>
      previousValue + Number(currentValue.newPrice) * currentValue.itemCount,
    0
  );

  const originalPrice = cart.reduce(
    (previousValue, currentValue) =>
      previousValue + Number(currentValue.oldPrice) * currentValue.itemCount,
    0
  );

  discountedPrice = originalPrice - totalItemPrice;

  totalAmount = Math.abs(originalPrice - discountedPrice + deliveryCharge);

  const placeOrderHandler = () => {
    navigate('/address');
  };

  return (
    <div className="total-price align-self">
      <h3 className="cart-title">Price Details</h3>
      <div className="price-distribution d-flex direction-column gap">
        <div className="items-purchased d-flex align-center">
          <p>Price ({cart.length} items)</p>
          <p className="mg-left">Rs. {originalPrice}</p>
        </div>
        <div className="discount-rate d-flex align-center">
          <p>Discount</p>
          <p className="mg-left">- Rs. {discountedPrice}</p>
        </div>
        <div className="delivery-charge d-flex align-center">
          <p>Delivery Charges</p>
          <p className="mg-left">Rs. {deliveryCharge}</p>
        </div>
      </div>
      <div className="total-amount d-flex align-center">
        <p>TOTAL AMOUNT </p>
        <p className="mg-left">Rs. {totalAmount}</p>
      </div>
      <p className="discount-text">
        You will save Rs. {discountedPrice} on this order
      </p>
      <button
        onClick={placeOrderHandler}
        className="button btn-primary cursor btn-width"
      >
        PLACE ORDER
      </button>
    </div>
  );
};
