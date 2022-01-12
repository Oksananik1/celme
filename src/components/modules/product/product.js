import React  from "react";
import { Link } from "react-router-dom";


function Product(props) {
    return (
      <div className="col-lg-3 col-md-6 col-sm-12 prodVid">
        <div className="card cardWidth">
          <div className="photoProdukt" style={{ 
        backgroundImage: `url(${"http://celme-zt.pp.ua"+encodeURI(props.value.photo)})` 
      }}>
          </div>
          <div className="card-body cardText">
            <div>
            <h5 className="card-title">{props.value.name}</h5>
            <span className="card-text">
              {props.value.smallDescr}
            </span>
            </div>
            <div className="cardPrice">
            <h5 className="priceNumb">{props.value.price}</h5>
            <div className="prodBtnDiv">
            <Link to={"/productItem/"+props.value._id} className="btn prodBtn">
              Детальніше
            </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  







  export default Product
  