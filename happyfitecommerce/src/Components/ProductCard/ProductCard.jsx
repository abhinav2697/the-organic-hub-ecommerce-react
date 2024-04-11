import { Link, useNavigate } from "react-router-dom";
import "./Product.css";
import { useAuth, useAlert } from "../../context";
import { set } from "loadlash";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const { eToken } = useAuth();
    const { setAlert } = useAlert();
    const { _id, imgUrl, isTrending, title, productCategory, newPrice, oldPrice, discount, outOfStock, isFast, itemRating
    } = product;

    return (
        <div className="card card-vertical d-flex direction-column relative shadow">
        <div className="card-image-container relative">
          <img className="card-image" src={imgUrl} alt="card" />
          {isTrending && (
            <small className="c-badge bg-primary absolute left-0 top-1">
              Trending
            </small>
          )}
          {isFast && (
            <small className="c-badge bg-primary absolute left-0 top-1">
              Express Delivery
            </small>
          )}
          <button
            className="badge-close cursor absolute fav-outline d-flex align-center justify-center"
           
          >
            <span >favorite</span>
          </button>
        </div>
        <div className="card-details">
        <Link className="link" to={`/product/${_id}`}>
          <div className="card-title">{title}</div>
          <div className="card-description">
            <p className="card-des">{productCategory}</p>
            <p className="card-price">
              Rs. {newPrice}
              <span className="price-strike-through padding-all-8 font-light">
                Rs. {oldPrice}
              </span>
              <span className="discount padding-all-8 font-light">({discount}% OFF)</span>
            </p>
            <p className="d-flex align-center">{itemRating} <span class="material-icons-outlined star">
                  star
                  </span></p>
          </div>
        </Link>
          <div className="cta-btn">
            <button 
            className={`${outOfStock ? `strik-through` : `cursor`} button action-btn btn-primary btn-icon d-flex btn-margin gap align-center justify-center`} 
            disabled={outOfStock}
          
            >
             
          
            </button>
          </div>
        </div>
      </div>
    );
  };
  
export { ProductCard };