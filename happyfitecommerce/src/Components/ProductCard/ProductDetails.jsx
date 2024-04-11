import { Link, useNavigate } from "react-router-dom";
import { useAuth, useAlert } from "../../context";
import "./ProductDetails.css";

export const ProductDetails = ({ sproduct })=>{
    const {
        _id,
        imgUrl,
        title,
        productCategory,
        description,
        newPrice,
        oldPrice,
        discount,
        itemRating,
        outOfStock
    } = sproduct;

    const navigate = useNavigate();

    const { eToken } = useAuth();

    const { setAlert } = useAlert();
    
    return (
        <div class="top-margin d-flex gap-4 justify-center">
          <div class="img-box">
            <img class="product-image" src={imgUrl} alt="product" />
          </div>
          <div class="content-container content-box col-flex gap-1">
            <div class="product-details col-flex gap-1">
              <h1>{title}</h1>
              <h3>{description} </h3>
              <div class="d-flex align-center gap-1">
                <span class="rating-font">{itemRating}</span>{" "}
                <span class="material-icons-outlined star">
                    star
                    </span>
              </div>
            </div>
            <div class="card-price ">
              <div class="d-flex gap align-end">
                <span class="product-final-price">Rs. {newPrice}</span>
                <span class="prod-price-strike-through">Rs. {oldPrice}</span>
                <span class="prod-discount">({discount}% OFF)</span>
              </div>
              <p class="tax-txt">inclusive of all taxes</p>
            </div>
            <div class="delivery-options col-flex gap-1">
              <h3>Delivery Options</h3>
              <div class="shipping d-flex align-center gap">
                <span class="material-icons-outlined">local_shipping</span>{" "}
                <span>Get it in 3 days</span>
              </div>
              <div class="shipping d-flex align-center gap">
                <span class="material-icons-outlined">currency_rupee</span>{" "}
                <span>Pay on delivery available</span>
              </div>
              <div class="shipping d-flex align-center gap">
                <span class="material-icons-outlined">change_circle</span>{" "}
                <span>30 days exchange and return available</span>
              </div>
            </div>
            <div class="cta d-flex gap">
            <button 
              className={`${outOfStock ? `strik-through` : `cursor`} button btn-primary btn-icon d-flex btn-margin gap align-center`} 
              disabled={outOfStock}
           
              > 
              
               
              </button>
              <button
                  className="button btn-outline-primary btn-icon d-flex align-center gap cursor btn-margin"
               
                  
                >
             
                </button>
            </div>
          </div>
        </div>
      );
    };
    
