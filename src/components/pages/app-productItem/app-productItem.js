import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Feature(props) {
  return (
    <tr>
      <td>{props.value.name}</td>
      <td>{props.value.value}</td>
    </tr>
  );
}

function FeatureList(props) {
  const data = props.dataF.map((feature, index) => (
    <Feature key={index} value={feature} />
  ));

  return (
    <table className="prodTabl">
      <tbody>{data}</tbody>
    </table>
  );
}

function AppProductItem() {
  const params = useParams();
  const id = params.id;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch("http://celme-zt.pp.ua/celmeapi/product/item?id=" + id)
      .then((res) => res.json())
      .then(
        (result) => {
          setProduct(result);
          setIsLoaded(true);
          document.title = `${result.name}`;
        },

        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      );
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div className="container productItem">
        <div className="row">
          <div className="col-12 m-5 zakazBtnStrelka">
            <Link
              to={"/products/" + getGroupName(product.group)}
              className="btn zakazBtn"
            >
              <img src="/images/strelka.png" alt="strelka"></img>
              {product.group}
            </Link>
          </div>
        </div>
        <div className="row m-2">
          <div className="col-xl-4 col-md-12">
            <div>
              <div className="prodImg">
                <img
                  src={"http://celme-zt.pp.ua" + encodeURI(product.photo)}
                  className="prodImg"
                  alt={product.name}
                ></img>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-md-12 prodItemText">
            <div>
              <h3 className="colorTxt mb-5">{product.name}</h3>
              <p>{product.descr}</p>
              <h5 className="colorTxt mt-4">{product.price}</h5>
            </div>
          </div>
        </div>
        <div className="row m-4">
          <div>
            <p>
              <b>Технічні характеристики</b>
            </p>

            <FeatureList dataF={product.feature} />
          </div>
        </div>
      </div>
    );
  }
}

export default AppProductItem;

function getGroupName(group) {
  let groupEn = "";
  switch (group) {
    case "Слайсери":
      groupEn = "slicers";
      break;
    case "М'ясорубки":
      groupEn = "mincer";
      break;
    case "Куттери":
      groupEn = "cutters";
      break;
    case "Овочерізки":
      groupEn = "vegetable_slicers";
      break;
    case "Обладнання для піцерії":
      groupEn = "pizzeria_equipment";
      break;
    default:
      groupEn = "slicers";
  }
  return groupEn;
}
