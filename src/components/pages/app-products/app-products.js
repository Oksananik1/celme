import React, {useState, useEffect} from "react";
import { Link, useParams} from "react-router-dom";
import Product from "../../modules/product";


function NavTabs(props) {
  return (
    <li className="nav-item">
    <Link to={"/products/"+props.value.enName} 
    className={(props.currentGroup===props.value.name ? "nav-link active1 menu" : "nav-link menu")}>
      {props.value.name}
    </Link>
  </li>
  );
}
function BurgerBtn(props) {
  return (
    <Link to={"/products/"+props.value.enName}
              className={(props.currentGroup===props.value.name ? "dropdown-item active1 menu" : "dropdown-item menu")}>
                {props.value.name}
              </Link>
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
  const groupList= [
    { name: "Слайсери", enName: "slayser", isActive: true },
    { name: "М'ясорубки", enName: "myasorubka", isActive: false },
    { name: "Куттери", enName: "kuttery", isActive: false },
    { name: "Овочерізки", enName: "ovocherezka", isActive: false },
    { name: "Обладнання для піцерії", enName: "oblPizza", isActive: false },
  ]

  const groupElementsNavTabs = groupList.map((gr) => (
    <NavTabs key={gr.enName} value={gr} currentGroup={group} />
  ));
  const groupElementsBurgerBtn = groupList.map((gr) => (
    <BurgerBtn key={gr.enName} value={gr} currentGroup={group}/>
  ));


  return (
    <div className="container product">
      <div className="row justify-content-between mb-5 mt-5">
        <div>
          <h2 className="kontZagol">Наш товар</h2>
        </div>
       
        <div>
          <ul className="nav nav-tabs productUL">
            {groupElementsNavTabs}
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
             {groupElementsBurgerBtn}
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
return group;
}