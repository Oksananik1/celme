import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";


function Feature(props){
    return (
        <tr>
                  <td>{props.value.name}</td>
                  <td>{props.value.value}</td>
                </tr>
    )
}

 function FeatureList(props){

    const data = props.dataF.map((feature,index) => <Feature key={index} value={feature} />)

    return (<table className="prodTabl">
    <tbody>{data}
    </tbody>
    </table>);
 }


 function AppProductItem()  {
    const params = useParams();
    const id = params.id;
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch("http://celme-zt.pp.ua/celmeapi/product/item?id=" + id)
          .then(res => res.json())
          .then(
            (result) => {
              setProduct(result);
              setIsLoaded(true);
              
            },
            // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
            // чтобы не перехватывать исключения из ошибок в самих компонентах.
            (error) => {
              setError(error);
              setIsLoaded(true);
            }
          )
        }, []);
        
      if (error) {
        return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Загрузка...</div>;
      } else {
    return (
      <div className="container productItem">
        <div className="row m-2">
          <div className="col-xl-4 col-md-12">
            <div>
              <div className="prodImg">
                <img
                  src={product.photo}
                  className="prodImg"
                  alt={product.name}
                ></img>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-md-12 prodItemText">
            <div>
              <h3 className="colorTxt mb-5">{product.name}</h3>
              <p>
              {product.descr}
              </p>
              <h5 className="colorTxt mt-4">{product.price}</h5>
            </div>
          </div>
        </div>
        <div className="row m-4">
          <div>
            <p>
              <b>Технічні характеристики</b>
            </p>
           
             <FeatureList dataF={product.feature}/> 
          </div>
        </div>
      </div>
   );
  }
}

export default AppProductItem;
