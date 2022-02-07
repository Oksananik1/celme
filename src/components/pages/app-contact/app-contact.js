import React, { useEffect } from "react";

const AppContact = () => {
  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    document.title = `Контакти`;
  });

  return (
    <div className="container kontakt" id="kontaktMain">
      <div className="row">
        <div className="col-12 mb-3 kontZagol text-center">
          <h2>Зв'язатись з нами</h2>
        </div>
        <div className="col-12 col-sm-6">
          <h5 className="kontZagol2">Наші контакти</h5>
          <p>
            <b>ТОВ «Челме-Україна» </b>
          </p>
          <p>
            адрес: <b>10001 м. Житомир, вул. Кооперативна, 10</b>
          </p>
          <p>
            телефон: <b>+380412427289</b>
          </p>
          <p>
            факс: <b> +380412427302</b>
          </p>
          <p>
            e-mail: <b> celme@ukr.net</b>
          </p>
          <p className="kontZagol3">
            <b>Mенеджер з продажу </b>
          </p>
          <p>
            телефон: <b> +380674103484</b>
          </p>
          <p>
            e-mail: <b>viacheslav@celme-ucraina.com.ua</b>
          </p>
          <p>
            години роботи: <b>8:00-16:30</b>
          </p>
          <p></p>
        </div>
        <div className="col-12 col-sm-6">
          <form action="http://celme-zt.pp.ua/celmeapi/sendmail" method="post">
            <h5 className="kontZagol2">Відправити нам листа</h5>
            <div className="row">
              <div className="col-md-6 ">
                <div className="form-group">
                  <label>ПІБ:</label>
                  <input
                    type="text"
                    className="form-control formInp"
                    required
                    id="name"
                    name="name"
                  ></input>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Телефон:</label>
                  <input
                    type="tel"
                    className="form-control formInp bfh-phone"
                    required
                    id="phone"
                    name="phone"
                    pattern="^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$"
                    minLength="10"
                    maxLength="14"
                    placeholder="0670000000"
                    aria-describedby="emailHelp"
                  ></input>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                className="form-control formInp"
                id="email"
                name="email"
                aria-describedby="emailHelp"
              ></input>
            </div>
            <div className="form-group mt-3">
              <label>Повідомлення:</label>
              <textarea
                className="form-control"
                required
                id="message"
                name="message"
                rows="4"
              ></textarea>
            </div>
            <div className="col-12 text-right">
              <input
                type="submit"
                className="kontBtn"
                value="ВІДПРАВИТИ"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppContact;
