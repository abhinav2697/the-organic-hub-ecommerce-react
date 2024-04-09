import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export const Category = () => {
    const [Category, setCategory] = useState([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    return (
        <main className="main-page-container">
            <section className="footwear-category d-flex justify-center align-center wrap">
               
                
            </section>
       </main>
   )

}