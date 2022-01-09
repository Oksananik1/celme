import React, {useState, useEffect} from "react";
import { Link, useParams} from "react-router-dom";


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
          <p className="card-text">
            Призначена для нарізки салямі, шинки, м'яса, сирів, овочів.
          </p>
          <h5 className="priceNumb">14000,00</h5>
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
    fetch("http://celme-zt.pp.ua/celmeapi/product/list?gr="+props.group)
      .then(res => res.json())
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
      )
  }, [props.group])

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {


  const data = items.map((product, index) => (
    <Product key={index} value={product} />
  ));

  return <div className="row justify-content-between mb-5">{data}</div>;
  }
}

function AppProducts() {
  const params = useParams();
  const groupEn = params.group;
  const group = getGroupName(groupEn);
  return (
    <div className="container product" id="productMain">
      <div className="row justify-content-between mr-1">
        <div>
          <h2 className="kontZagol">Наш товар</h2>
        </div>
       
        <div>
          <ul className="nav nav-tabs productUL">
            <li className="nav-item">
              <Link to={"/products/slicers"} 
              className={(group==="Слайсери" ? "nav-link active1 menu" : "nav-link menu")}>
                Слайсери
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/products/mincer"} 
              className={(group==="М'ясорубки" ? "nav-link active1 menu" : "nav-link menu")}>
                М'ясорубки
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/products/cutters"} 
              className={(group==="Куттери" ? "nav-link active1 menu" : "nav-link menu")}>
                Куттери
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/products/vegetable_slicers"} 
              className={(group==="Овочерізки" ? "nav-link active1 menu" : "nav-link menu")}>
                Овочерізки
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/products/pizzeria_equipment"} 
              className={(group==="Обладнання для піцерії" ? "nav-link active1 menu" : "nav-link menu")}>
                Обладнання для піцерії
              </Link>
            </li>
          </ul>
          <div className="dropdown burgerMenu2">
            <button
              className="btn dropdown-toggle burgerMenuBtn"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
             {group}
            </button>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="dropdownMenuButton"
            >
              <Link to={"/products/slicers"} 
              className={(group==="Слайсери" ? "dropdown-item active1 menu" : "dropdown-item menu")}>
                Слайсери
              </Link>
              <Link to={"/products/mincer"} 
              className={(group==="М'ясорубки" ? "dropdown-item active1 menu" : "dropdown-item menu")}>
                М'ясорубки
              </Link>
              <Link to={"/products/cutters"} 
              className={(group==="Куттери" ? "dropdown-item active1 menu" : "dropdown-item menu")}>
                Куттери
              </Link>
              <Link to={"/products/vegetable_slicers"} 
              className={(group==="Овочерізки" ? "dropdown-item active1 menu" : "dropdown-item menu")}>
                Овочерізки
              </Link>
              <Link to={"/products/pizzeria_equipment"} 
              className={(group==="Обладнання для піцерії" ? "dropdown-item active1 menu" : "dropdown-item menu")}>
                Обладнання для піцерії
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ProductList group={group} />
    </div>
  );
}


export default AppProducts;


function getGroupName(groupEn){
  console.log(groupEn)
  let group = ""
  switch (groupEn) {
    case "slicers":
      group="Слайсери"
    break;
    case "mincer":
      group="М'ясорубки"
    break;
    case "cutters":
      group="Куттери"
    break;
    case "vegetable_slicers":
      group="Овочерізки"
    break;
    case "pizzeria_equipment":
      group="Обладнання для піцерії"
     break;
     default: 
     group="Слайсери";
  }
  console.log(group)
return group;
}