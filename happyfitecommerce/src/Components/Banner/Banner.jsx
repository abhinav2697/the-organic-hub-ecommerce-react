import { useNavigate } from "react-router-dom";
import { useFilter } from "../../context/";

const Banner = () => {
  const navigate = useNavigate();
  const {productDispatch} = useFilter();

  return (
    <main className="main-page-container">
      <section className="main-banner">
        <div className="link" onClick={() => {
                productDispatch({
                  type: "CATEGORY",
                  payload: "all"
                })
                navigate("/products")
              }}>
          <div className="main-banner-image border-radius-4"></div>
        </div>
      </section>
    </main>
  );
};

export { Banner };