import { useNavigate } from "react-router-dom";
import check from "../assets/check.png";
import "./Order.css";

export const Order = () => {

    const navigate = useNavigate();

    const handleConitnueShoppingClick = () => {
        navigate("/products")
    }

    return (
        <div className="order-container d-flex direction-column align-center justify-center gap ">
            <img className="img" src={check} />
            <span className="heading-2">Order Placed Successfully</span>
            <button className="button btn-primary cursor" onClick={handleConitnueShoppingClick}>Continue Shopping</button>
        </div>
    )
}