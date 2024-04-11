import { Link } from "react-router-dom";
import "./ProductCardHorizontal.css";
import { useAuth, useAlert } from "../../context";

export const ProductCardHorizontal = ({ product }) => {
    const { _id, imgUrl, isTrending, title, productCategory, newPrice, oldPrice, discount, isFast, itemCount
    } = product;
    const {eToken} = useAuth();

    const { setAlert } = useAlert();
    
        return (
            <div className="card-horizontal d-flex shadow card-size flex-start">
              <div className="card-hori-image-container card-size-hori relative">
              <Link className="link" to={`/product/${_id}`}>
                <img className="card-image-hori d-block" src={imgUrl} alt="shoes" />
                {isTrending && (
                  <small className="c-badge bg-primary absolute left-0 top-2">
                    Trending
                  </small>
                )}
                {isFast && (
                  <small className="c-badge bg-primary absolute left-0 top-1">
                    Express Delivery
                  </small>
                )}
                </Link>
              </div>
              <div className="card-details horizontal-card d-flex direction-column">
                <div className="card-title">{title}</div>
                <div className="card-description">
                  <p className="card-des">{productCategory}</p>
                  <p className="card-price">
                    Rs. {newPrice}
                    <span className="price-strike-through  padding-all-8 font-light">Rs. {oldPrice}</span>
                    <span className="discount padding-all-8 font-light">({discount}% OFF)</span>
                  </p>
                </div>
                <div className="quantity-container d-flex gap">
                  <p className="q-title">Quantity: </p>
                  <div className="count-container d-flex align-center gap">
                    <button
                      disabled={itemCount === 1}
                      className="count"
                   
                    >
                      {" "}
                      -{" "}
                    </button>
                    <span className="count-value">{itemCount}</span>
                    <button
                      class="count"
                     
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="cta-btn-container d-flex gap">
                    <button
                      className="button btn-primary btn-icon d-flex align-center gap cursor btn-margin"
                   
                    >
                      Remove From Cart
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