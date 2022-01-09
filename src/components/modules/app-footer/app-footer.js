import { Link } from "react-router-dom";

const AppFooter = () => {
  return (
    <>
      <div className="container-fluid footer">
        <div>
          <div className="row footerColor">
            <div className="col-12">
              <ul className="nav justify-content-between footerUl">
                <li className="nav-item  ">
                  <Link to={'/about'} className="nav-link menu">
                    ПРО НАС
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={'/about'} className="nav-link menu">
                    АКЦІЇ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={'/products/slicers'} className="nav-link menu">
                    ПРОДУКЦІЯ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={'/garant'} className="nav-link menu">
                    ГАРАНТІЯ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={'/dostavka'} className="nav-link menu">
                    ДОСТАВКА ТА ОПЛАТА
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={'/contact'} className="nav-link menu">
                    КОНТАКТИ
                  </Link>
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
