import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Product(props) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 prodVid">
      <div className="card cardWidth">
        <img
          src={props.value.photo}
          className="card-img-top "
          alt={props.value.name}
        ></img>
        <div className="card-body cardText">
          <h5 className="card-title">{props.value.name}</h5>
          <p className="card-text">{props.value.smallDescr}</p>
          <h5 className="priceNumb">{props.value.price}</h5>
          <Link to={"/productItem/"+props.value._id} className="btn prodBtn">
            Детальніше
          </Link>
        </div>
      </div>
    </div>
  );
}



function ProductList(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  
  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  useEffect(() => {
    fetch("http://celme-zt.pp.ua/celmeapi/product/list?gr=" + props.group)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  },[]);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    const data = items.map((product, index) => (
      <Product key={product._id} value={product} />
    ));

    return <div className="row justify-content-between mb-5">{data}</div>;
  }
}

class AppProductList extends Component {
  constructor(props) {
    super(props);
    this.changeBurgerLabel = this.changeBurgerLabel.bind(this);
    this.state = {
     burgerMenuLabel:"Слайсери",
    };
  }

   changeBurgerLabel=(name)=>{
    this.setState({burgerMenuLabel:name})
  }

  render() {
    return (
      <div className="container product" id="productMain">
        <div className="row justify-content-between mr-1">
          <div>
            <h2 className="kontZagol">Наш товар</h2>
          </div>
          <div>
            <ul className="nav nav-tabs productUL" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  href="#slayser"
                  className="nav-link active1 menu active"
                  id="slayser-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="slayser"
                  aria-selected="true"
                >
                  Слайсери
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#myasorubka"
                  className="nav-link menu"
                  id="myasorubka-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="myasorubka"
                  aria-selected="false"
                >
                  М'ясорубки
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#kuttery"
                  className="nav-link menu"
                  id="kuttery-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="kuttery"
                  aria-selected="false"
                >
                  Куттери
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#ovocherezka"
                  className="nav-link menu"
                  id="ovocherezka-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="ovocherezka"
                  aria-selected="false"
                >
                  Овочерізки
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#oblPizza"
                  className="nav-link menu"
                  id="oblPizza-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="oblPizza"
                  aria-selected="false"
                >
                  Обладнання для піцерії
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown burgerMenu2" role="tablist">
            <button
              className="btn dropdown-toggle burgerMenuBtn"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {this.state.burgerMenuLabel}
            </button>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="dropdownMenuButton"
              role="tablist"
            >
              <ul className="nav nav-tabs" role="tablist">
                <li className="active" role="presentation">
                  <a
                    href="#slayser"
                    className="dropdown-item menu"
                    role="tab"
                    data-toggle="tab" onClick={() => this.changeBurgerLabel("Слайсери")}
                  >
                    Слайсери
                  </a>
                </li>
                <li role="presentation">
                  <a
                    href="#myasorubka"
                    className="dropdown-item menu"
                    role="tab"
                    data-toggle="tab" onClick={() => this.changeBurgerLabel("М'ясорубки")}
                  >
                    М'ясорубки
                  </a>
                </li>
                <li role="presentation">
                  <a href="#kuttery" className="dropdown-item menu" 
                  role="tab"
                  data-toggle="tab" onClick={() => this.changeBurgerLabel("Куттери")}>
                    Куттери
                  </a>
                </li>
                <li role="presentation">
                  <a href="#ovocherezka" className="dropdown-item menu" 
                  role="tab"
                  data-toggle="tab" onClick={() => this.changeBurgerLabel("Овочерізки")}>
                    Овочерізки
                  </a>
                </li>
                <li role="presentation">
                  <a href="#oblPizza" className="dropdown-item menu" 
                  role="tab"
                  data-toggle="tab" onClick={() => this.changeBurgerLabel("Обладнання для піцерії")}>
                    Обладнання для піцерії
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="slayser"
                role="tabpanel"
                aria-labelledby="slayser-tab"
              >
                <ProductList group="Слайсери" />
              </div>
              <div
                className="tab-pane fade"
                id="myasorubka"
                role="tabpanel"
                aria-labelledby="myasorubka-tab"
              >
                <ProductList group="М'ясорубки" />
              </div>
              <div
                className="tab-pane fade"
                id="kuttery"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <ProductList group="Куттери" />
              </div>
              <div
                className="tab-pane fade"
                id="ovocherezka"
                role="tabpanel"
                aria-labelledby="ovocherezka-tab"
              >
                <ProductList group="Овочерізки" />
              </div>
              <div
                className="tab-pane fade"
                id="oblPizza"
                role="tabpanel"
                aria-labelledby="oblPizza-tab"
              >
                <ProductList group="Обладнання для піцерії" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppProductList;
