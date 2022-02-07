import React, { Component, useState, useEffect } from "react";
import Product from "../../../../modules/product";

function NavTabs(props) {
  const OpenTab = (name) => {
    console.log(name);
    window.ga(
      "send",
      "event",
      "Вкладки на центральній сторінці",
      "Відкриття",
      name
    );
  };

  return (
    <li className="nav-item">
      <a
        href={"#" + props.value.enName}
        className={"nav-link menu " + (props.value.isActive ? "active" : "")}
        id={props.value.enName + "-tab"}
        data-toggle="tab"
        role="tab"
        aria-controls={props.value.enName}
        aria-selected="true"
        onClick={() => OpenTab(props.value.name)}
      >
        <span>{props.value.name}</span>
      </a>
    </li>
  );
}
function BurgerBtn(props) {
  return (
    <li className={props.value.isActive ? "active" : ""} role="presentation">
      <a
        href={"#" + props.value.enName}
        className="dropdown-item menu"
        role="tab"
        data-toggle="tab"
        onClick={() => this.changeBurgerLabel(props.value.name)}
      >
        {props.value.name}
      </a>
    </li>
  );
}

function GroupTab(props) {
  return (
    <div
      className={"tab-pane fade show " + (props.value.isActive ? "active" : "")}
      id={props.value.enName}
      role="tabpanel"
      aria-labelledby={props.value.enName + "-tab"}
    >
      <ProductList group={props.value.name} />
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
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

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
      burgerMenuLabel: "Слайсери",
      groupList: [
        { name: "Слайсери", enName: "slicers", isActive: true },
        { name: "М'ясорубки", enName: "mincer", isActive: false },
        { name: "Куттери", enName: "cutters", isActive: false },
        { name: "Овочерізки", enName: "vegetable_slicers", isActive: false },
        {
          name: "Обладнання для піцерії",
          enName: "pizzeria_equipment",
          isActive: false,
        },
      ],
    };
  }
  changeBurgerLabel = (name) => {
    this.setState({ burgerMenuLabel: name });
  };

  render() {
    const groupElementsNavTabs = this.state.groupList.map((gr) => (
      <NavTabs key={gr.enName} value={gr} />
    ));
    const groupElementsBurgerBtn = this.state.groupList.map((gr) => (
      <BurgerBtn key={gr.enName} value={gr} />
    ));

    const groupElementsGroupTab = this.state.groupList.map((gr) => (
      <GroupTab key={gr.enName} value={gr} />
    ));

    return (
      <div className="container product">
        <div className="row justify-content-between mr-1">
          <div>
            <h2 className="kontZagol">Наш товар</h2>
          </div>
          <div>
            <ul className="nav nav-tabs productUL" id="myTab" role="tablist">
              {groupElementsNavTabs}
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
                {groupElementsBurgerBtn}
              </ul>
            </div>
          </div>

          <div className="mt-3">
            <div className="tab-content" id="myTabContent">
              {groupElementsGroupTab}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppProductList;
