import React from "react"
import { Link } from "react-router-dom";


const AppHeader=()=>{
    return(
        <><div className="container-fluid menu bg-light">
            <div className="row menu">
                <div className="col-12">
                    <nav className="navbar navbar-light bg-light">
                   
                    <Link to={'/'}   className="navbar-brand">
                    <img src="/images/logo2.png" alt="logo" />
                        </Link>
                        <ul className="nav justify-content-end menuUl">
                            <li className="nav-item">
                                <Link  to={'/about'} className="nav-link active menu">ПРО НАС</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link menu">АКЦІЇ</Link>
                            </li> 
                            <li className="nav-item">
                                <Link to={'/products/slicers'} className="nav-link menu">ПРОДУКЦІЯ</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/garant'} className="nav-link menu">ГАРАНТІЯ</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/dostavka'} className="nav-link menu">ДОСТАВКА ТА ОПЛАТА</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/contact'} className="nav-link menu">КОНТАКТИ</Link>
                            </li>
                        </ul>
                        <div className="dropdown">
                            <button className="btn dropdown-toggle burgerMenu" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-bars"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                <Link to={'/about'} className="dropdown-item menu">ПРО НАС</Link>
                                {/* <Link className="dropdown-item menu" href="">АКЦІЇ</Link> */}
                                <Link to={'/products/slicers'}  className="dropdown-item menu">ПРОДУКЦІЯ</Link>
                                <Link to={'/garant'} className="dropdown-item menu">ГАРАНТІЯ</Link>
                                <Link  to={'/dostavka'} className="dropdown-item menu">ДОСТАВКА ТА ОПЛАТА</Link>
                                <Link  to={'/contact'} className="dropdown-item menu">КОНТАКТИ</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
       </>

    )
}

export default AppHeader