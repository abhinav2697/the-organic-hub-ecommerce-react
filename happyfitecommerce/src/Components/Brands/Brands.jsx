import { Fragment } from "react";
import "./Brands.css";
 import nike from "../../assets/n.jpg";
import addidas from "../../assets/adidas.png";
import puma from "../../assets/puma.jpg";
import bata from "../../assets/bata.jpg";
// import organichub from "../../assets/organichub.gif";

export const Brands = () => {
    return (
        <div className="d-flex align-center gutter-large justify-center">
            <div className="avatar avatar-large-size brand">
                <img className="avatar-image-round" src={nike} alt="nike" />
            </div>
            <div className="avatar avatar-large-size brand">
                <img className="avatar-image-round" src={addidas} alt="nike" />
            </div>
            <div className="avatar avatar-large-size brand">
                <img className="avatar-image-round" src={puma} alt="nike" />
            </div>
            <div className="avatar avatar-large-size brand">
                <img className="avatar-image-round" src={bata} alt="nike" />
            </div>
        </div>
    )
}