import { latestCollection } from "../../dB/new-arrivals";
import { Link } from "react-router-dom";
const NewArrivals = () => {
  return (
    <main class="main-page-container">
      <section class="new-arrival-section d-flex">
        {latestCollection.map(({ imgUrl }) => {
          return (
            <>
              <Link to="/products" class="link">
                <div className="new-arrival-banner-container d-flex gap shadow">
                  <img className="new-arrival-img" src={imgUrl} alt="collection" />
                  <div className="arrival-details d-flex direction-column">
                    <span className="banner-promo">New Arrivals</span>
                    <p className="collection-details">
                      <h3 className="collection-title">Summer Collection</h3>
                      <small className="about-collection">
                        Checkout out latest summer collection to keep your feet
                        cool.
                      </small>
                    </p>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </section>
    </main>
  );
};

export { NewArrivals };
