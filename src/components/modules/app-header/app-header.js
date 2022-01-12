import React from "react"
import { Link , NavLink} from "react-router-dom";


const AppHeader=()=>{
    return(
        <><div className="container-fluid menu bg-light">
            <div className="row menu">
                <div className="col-12">
                    <nav className="navbar bg-light headerNav">
                        <div>
                    <Link to={'/'}   className="navbar-brand headLogo">
                    <img src="/images/logo2.png" alt="logo" />
                        </Link>
                        </div>
                        <div className="headerNavMenu">
                        <ul className="nav menuUl">
                            <li className="nav-item">
                                <NavLink  to={'/about'} className={({ isActive }) => (isActive ? 'nav-link menu active1' : 'nav-link menu')}>ПРО НАС</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/'} className={({ isActive }) => (isActive ? 'nav-link menu active1' : 'nav-link menu')}>АКЦІЇ</NavLink>
                            </li> 
                            <li className="nav-item">
                                <NavLink to={'/products/slicers'} className={({ isActive }) => (isActive ? 'nav-link menu active1' : 'nav-link menu')}>ПРОДУКЦІЯ</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/garant'} className={({ isActive }) => (isActive ? 'nav-link menu active1' : 'nav-link menu')}>ГАРАНТІЯ</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/dostavka'} className={({ isActive }) => (isActive ? 'nav-link menu active1' : 'nav-link menu')}>ДОСТАВКА ТА ОПЛАТА</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/contact'} className={({ isActive }) => (isActive ? 'nav-link menu active1' : 'nav-link menu')}>КОНТАКТИ</NavLink>
                            </li>
                        </ul>
                        </div>
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