import { Fragment ,useState,useEffect} from "react"
import { Alert,Loader,Navbar,Banner,Category,Brands,Footer } from "../Components"
import "./Home.css"
export const Home = () => {
    const [route, setRoute] = useState();
    const [isLoading, setIsLoading] = useState(false);
   

    useEffect(() => {
        setTimeout(()=>setIsLoading(true),500)
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
          <Category />
          <Banner />
          <Brands />
        </main>
        <Footer />
      </div>
      )}
      </Fragment>
    );
  };