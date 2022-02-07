import React, { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = `Помилка 404`;
  });

  return (
    <div className="container oNAS">
      <div className="row">
        <div className="col-12 mb-4 notFoundTtxt text-center">
          <p>Помилка 404</p>
        </div>
        <div className="col-12 text-center">
          <div>
            <img
              src="/images/notFound.png"
              className="fotoNotFound"
              alt="notFound"
            ></img>
          </div>
          <p className="notFoundTtxt2">Сторінку не знайдено!</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
