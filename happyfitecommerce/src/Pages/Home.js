import {
  Navbar,
  Banner,
  Category,
  NewArrivals,
  Footer,
  Loader,
  Alert,
  Brands
  } from "../Components";
  import { useEffect, useState, Fragment } from "react";
  import {useAlert} from "../context";
  import "./Home.css";
  
  const Home = () => {
    const [route, setRoute] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const {alert} = useAlert();
  useEffect(() => {
    setTimeout(() => setIsLoading(true), 500)
  }, [])

  useEffect(() => {
    setRoute("home");
  }, [route]);

    return (
      <Fragment>
        {!isLoading ? <Loader /> : (<div className="page">
        <Navbar route={route} />
        <main>
        {alert.open && <Alert />}
          
            <Banner />
            <div className="marquee">
              <marquee><span>Shop By Category</span></marquee>
            </div>
            
            <Category />
          <Brands />
        </main>
        <Footer />
      </div>
      )}
      </Fragment>
    );
  };
  
  export { Home };
  