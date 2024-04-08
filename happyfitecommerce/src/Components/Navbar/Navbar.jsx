import { Link } from "react-router-dom";
import { debounce } from "lodash";
import { useFilter, useCart, useAuth, useAlert } from "../../context";
import "./Navbar.css";

const Navbar = ({ route }) => {
  const {
    state: { myWishlist, searchInput }, productDispatch
  } = useFilter();

  const {
    cartState: { cart }
  } = useCart();

  const {
    logOutHandler, eToken, euser
  } = useAuth();

  const handleSearch = debounce((e) =>
  productDispatch({
    type: "SEARCH_INPUT",
    payload: e.target.value
  }), 500)

  const {setAlert} = useAlert();


  return (
    <header className="heading d-flex grow1-shrink1-basisauto align-center fixed top-0 left-0">
      <div className="heading-title-icon d-flex align-center">
        <img
          className="icon mr-1 border-radius-50"
          src="https://therightfit.netlify.app/assets/The%20Right%20Fit-logos.jpeg"
          alt="lightbulb"
        />
        <h1 className="heading-title">
          <Link className="link" to="/">
            The Right Fit
          </Link>
        </h1>
      </div>
      {route === "product" && (
        <div className="search-box-container relative">
        <input
          className="search-box padding-all-8"
          type="text"
          placeholder="Search"
          onChange={handleSearch}
        />
        <img
          src="https://therightfit.netlify.app/assets/outline_search_black_24dp.png"
          alt="Search"
          className="search-icon absolute left-0 top-0"
        />
      </div>
      )}
      
      <nav className="navigation">
        <ul className="list-non-bullet d-flex align-center gap">
        {eToken && route !== "login" && route !== "signup" && (
            <li className="list-item-inline">{`Hi, ${euser}`}</li>
          )}
          <li class="list-item-inline">
                        <button
                            to="/login"
                            class="cursor button btn-primary"
                            onClick={() => logOutHandler(setAlert)}>{eToken
                                ? "Logout"
                                : "Login"}</button>
                    </li>       
          <li className="list-item-inline">
            <Link to="/wishlist" className="link">
              <div className="icon-badge relative">
                <img
                  className="icon-img"
                  src="https://therightfit.netlify.app/assets/fav-outline-48px.png"
                  alt="wishlist"
                />
                {eToken && <div className="badge-number avatar-badge d-flex align-center justify-center">
                  {eToken && euser ? myWishlist.length : 0}
                </div>}
                
              </div>
            </Link>
          </li>
          <li className="list-item-inline">
            <Link to="/cart" className="link d-flex align-center gap-8px">
              <div className="icon-badge relative">
                <img
                  className="icon-img"
                  src="https://therightfit.netlify.app/assets/cart-outline-48px.png"
                  alt="cart"
                />
                {eToken && <div className="badge-number avatar-badge d-flex align-center justify-center">
                  {eToken && euser ? cart.length : 0}
                </div>}
                
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Navbar };