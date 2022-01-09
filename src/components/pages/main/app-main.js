
import AppProductList from "./modules/app-product-list"





const AppMain=()=>{
    return(
        <>
    <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 logoBig">
                        <div className="row menuLogo">
                            <div className="col-12">
                                <img src="/images/logo.png" alt="foto" />
                            </div>
                            <div className="col-12">
                                <button className="zakazBtn">Замовити зараз</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 carousMain">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner shadow">
                                <div className="carousel-item active">
                                    <img src="/images/karusel/kar1.jpg" className="d-block w-100" alt="foto">
                                    </img></div>
                                <div className="carousel-item">
                                    <img src="/images/karusel/kar2.jpg" className="d-block w-100" alt="foto">
                                    </img></div>
                                <div className="carousel-item">
                                    <img src="/images/karusel/kar3.jpg" className="d-block w-100" alt="foto">
                                    </img></div>
                                <div className="carousel-item">
                                    <img src="/images/karusel/kar4.jpg" className="d-block w-100" alt="foto">
                                    </img></div>
                                <div className="carousel-item">
                                    <img src="/images/karusel/kar5.jpg" className="d-block w-100" alt="foto">
                                    </img></div>
                                <div className="carousel-item">
                                    <img src="/images/karusel/kar6.jpg" className="d-block w-100" alt="foto">
                                    </img></div>
                                <div className="carousel-item">
                                    <img src="/images/karusel/kar7.jpg" className="d-block w-100" alt="foto">
                                    </img></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         <AppProductList/>
        
         </>
    )
}

export default AppMain