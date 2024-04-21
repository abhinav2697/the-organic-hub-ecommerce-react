import { Fragment } from "react";
import "./Brands.css";
 import FarmFresh from "../../assets/FarmFresh.jpg";
import ExpressDelivery from "../../assets/ExpressDelivery.png";
import MoneyBack from "../../assets/MoneyBack.jpg";
import Payment from "../../assets/Payment.jpg";
// import organichub from "../../assets/organichub.gif";

export const Brands = () => {
    return (
        <div className="d-flex align-center gutter-large justify-center">
            <div className="avatar avatar-large-size brand">
                <img className="avatar-image-round" src={FarmFresh} alt="nike" />
                <span>Farm Fresh</span>
                
            </div>
            <div className="avatar avatar-large-size brand">
                <img className="avatar-image-round" src={ExpressDelivery} alt="nike" />
                <span>Within 3-5 days</span>
            </div>
            <div className="avatar avatar-large-size brand">
                <img className="avatar-image-round" src={MoneyBack} alt="nike" />
                <span>7 days money Back</span>
            </div>
            <div className="avatar avatar-large-size brand">
                <img className="avatar-image-round" src={Payment} alt="nike" />
                <span>All Cards Accepted</span>
            </div>
        </div>
    )
}