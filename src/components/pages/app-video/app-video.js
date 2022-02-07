import React, { useEffect, useState } from "react";

const Video = (props) => {
  return (
    <div className="col-12 videoDiv">
      <p>{props.value.name}</p>
      <div dangerouslySetInnerHTML={{ __html: props.value.descr }}></div>
    </div>
  );
};

const AppVideo = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    document.title = `Відео`;
    fetch("http://celme-zt.pp.ua/celmeapi/video/list")
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
    const data = items.map((videoInfo, index) => (
      <Video key={videoInfo._id} value={videoInfo} />
    ));

    return (
      <div className="container dostavka" id="dostavkaMain">
        <div className="row mb-4">
          <div className="col-12 kontZagol text-center">
            <h2>Відео</h2>
          </div>
          {data}
        </div>
      </div>
    );
  }
};

export default AppVideo;
