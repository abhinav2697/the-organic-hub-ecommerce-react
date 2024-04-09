import { useNavigate } from "react-router";
const Banner = () => {
    const navigate = useNavigate();
    
    return (
        <main className="main-page-container">
            <section className="main-banner">
                <div className="link">
                
                    <div className="main-banner-image border-radius-4"></div>
                    </div>
            </section>
        </main>
    )
}

export { Banner };