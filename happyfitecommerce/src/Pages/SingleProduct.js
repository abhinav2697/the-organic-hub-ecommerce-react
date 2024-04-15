import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import { Navbar, ProductDetails, Alert, Loader } from "../Components";
import { useAlert } from "../context";


export const SingleProduct = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const { productId } = useParams();
    const { alert } = useAlert();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try{
                const {data : {products}} = await axios.get("/api/products")
                setProducts(products);
                setIsLoading(false);
            }catch(error){
                setError(true);

            }
        })()
    }, [])


    const product = products.find((prod) => prod._id === productId);
    return (
        <Fragment>
          {isLoading ? <Loader /> : (<Fragment>
            <Navbar />
            {(product && !error) ? (<ProductDetails product={product} />) : (<Loader />)}
              {alert.open && <Alert />}
            </Fragment>)
            }
        </Fragment>
      );
    };