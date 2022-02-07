import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const File = (props) => {
  return (
    <div className="col-12 documDiv">
      <ul>
        <li>
          <Link
            to={encodeURI(props.value.filePath)}
            target="_blank"
            className="documLink"
          >
            {props.value.descr}
          </Link>
        </li>
      </ul>
    </div>
  );
};

const AppDocument = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  useEffect(() => {
    document.title = `Документація`;
    fetch("http://celme-zt.pp.ua/celmeapi/files/list")
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
    const data = items.map((fileInfo, index) => (
      <File key={fileInfo._id} value={fileInfo} />
    ));

    return (
      <div className="container dostavka" id="dostavkaMain">
        <div className="row">
          <div className="col-12 kontZagol text-center mb-4">
            <h2>Документація</h2>
          </div>
          {data}
        </div>
      </div>
    );
  }
};

export default AppDocument;
