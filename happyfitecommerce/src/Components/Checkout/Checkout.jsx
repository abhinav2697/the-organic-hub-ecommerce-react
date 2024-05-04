import "../FinalPrice/FinalPrice.css";
import { useCart, useAlert } from "../../context";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  let {
    cartState: {
      cart,
      deliveryCharge,
      totalItemPrice,
      discountedPrice,
      totalAmount
    }, cartDispatch
  } = useCart();

  const {setAlert} = useAlert();

  totalItemPrice = cart.reduce(
    (previousValue, currentValue) =>
      previousValue + Number(currentValue.newPrice) * currentValue.itemCount,
    0
  );

  const navigate = useNavigate();

  const originalPrice = cart.reduce(
    (previousValue, currentValue) =>
      previousValue + Number(currentValue.oldPrice) * currentValue.itemCount,
    0
  );

  discountedPrice = originalPrice - totalItemPrice;

  totalAmount = Math.abs(originalPrice - discountedPrice + deliveryCharge);


  const loadScript = (src) => {
      return new Promise(resolve => {
          const script = document.createElement("script");
          script.src= src;
          script.onload = () => resolve(true);
          script.onerror = () => resolve(false);
          document.body.appendChild(script);
      });
  };

  const displayRazorpay = async () => {
      const response = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

      if(!response){
        setAlert({
            open: true,
            message: "Razorpay SDK failed to load",
            type: "error"
        })
      }

      const options = {
        key: "rzp_test_VSdp7X3K39GwBK",
        amount: totalAmount * 100,
        curreny: "INR",
        name: "The Right Fit",
        description: "Thank you for shopping with us.",
        image: "https://img.freepik.com/free-vector/100-organic-quality-food-green-sticker-label-design_1017-25574.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713052800&semt=ais",

        handler: ({payment_id}) => {
            cartDispatch({type: "CLEAR_CART"});
            navigate("/order")
        }
      }

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
  }

  return (
    <div class="total-price padding-all-16 align-self">
      <h3 class="cart-title">Price Details</h3>
      <div class="price-distribution d-flex direction-column gap">
        <div class="items-purchased d-flex align-center">
          <p>Price ({cart.length} items)</p>
          <p class="mg-left">Rs. {originalPrice}</p>
        </div>
        <div class="discount-rate d-flex align-center">
          <p>Dsicount</p>
          <p class="mg-left">- Rs. {discountedPrice}</p>
        </div>
        <div class="delivery-charge d-flex align-center">
          <p>Delivery Charges</p>
          <p class="mg-left">Rs. {deliveryCharge}</p>
        </div>
      </div>
      <div class="total-amount d-flex align-center">
        <p>TOTAL AMOUNT </p>
        <p class="mg-left">Rs. {totalAmount}</p>
      </div>
      <p class="discount-text">
        You will save Rs. {discountedPrice} on this order
      </p>
      <button class="button btn-primary cursor btn-width" onClick={displayRazorpay}>Checkout</button>
    </div>
  );
};
