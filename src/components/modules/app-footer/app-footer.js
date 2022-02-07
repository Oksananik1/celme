import { NavLink } from "react-router-dom";

const AppFooter = () => {
  return (
    <>
      <div className="container-fluid footer">
        <div>
          <div className="row footerColor">
            <div className="col-12">
              <ul className="nav justify-content-between footerUl">
                <li className="nav-item  ">
                  <NavLink
                    to={"/about"}
                    className={({ isActive }) =>
                      isActive ? "nav-link menu active1" : "nav-link menu"
                    }
                  >
                    ПРО НАС
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink
                    to={"/about"}
                    className={({ isActive }) =>
                      isActive ? "nav-link menu active1" : "nav-link menu"
                    }
                  >
                    АКЦІЇ
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink
                    to={"/products/slicers"}
                    className={({ isActive }) =>
                      isActive ? "nav-link menu active1" : "nav-link menu"
                    }
                  >
                    ПРОДУКЦІЯ
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"/garant"}
                    className={({ isActive }) =>
                      isActive ? "nav-link menu active1" : "nav-link menu"
                    }
                  >
                    ГАРАНТІЯ
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"/dostavka"}
                    className={({ isActive }) =>
                      isActive ? "nav-link menu active1" : "nav-link menu"
                    }
                  >
                    ДОСТАВКА ТА ОПЛАТА
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"/contact"}
                    className={({ isActive }) =>
                      isActive ? "nav-link menu active1" : "nav-link menu"
                    }
                  >
                    КОНТАКТИ
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"/document"}
                    className={({ isActive }) =>
                      isActive ? "nav-link menu active1" : "nav-link menu"
                    }
                  >
                    ДОКУМЕНТАЦІЯ
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"/video"}
                    className={({ isActive }) =>
                      isActive ? "nav-link menu active1" : "nav-link menu"
                    }
                  >
                    ВІДЕО
                  </NavLink>
                </li>
              </ul>
              <div className="row justify-content-between ml-2 mr-2 footerSmall">
                <div className="footerSmall1">
                  <h6>
                    <i className="fas fa-phone-alt "></i> +38 (0412) 427289
                  </h6>
                  <span>Режим роботи: Пн.-Пт. c 8:00-16:30</span>
                </div>
                <div className="footerSmall2">
                  <span>
                    10001 м. Житомир, <br />
                    вул. Кооперативна, 10
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-12 text-center d-flex justify-content-center ">
                  <div className=" mr-1">
                    <i className="far fa-copyright"></i>
                  </div>
                  <div className="footTextSize">
                    <span>ЧЕЛМЕ-УКРАЇНА 2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppFooter;
