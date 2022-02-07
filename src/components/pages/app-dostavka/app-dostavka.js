import React, { useEffect } from "react";

const AppDostavka = () => {
  useEffect(() => {
    document.title = `Доставка та оплата`;
  });

  return (
    <div className="container dostavka" id="dostavkaMain">
      <div className="row">
        <div className="col-12 kontZagol text-center">
          <h2>Доставка та оплата</h2>
        </div>
        <div>
          <div className="col-12 dostavkaZagol">
            <p>
              <b>Способи оплати</b>
            </p>
            <ul className="garantUL">
              <li>Безготівковий розрахунок із ПДВ</li>
              <li>
                Оплата товару при отриманні на Новій Пошті – післяплати (+2%)
              </li>
              <li>
                Готівкою у нашому офісі або при кур'єрській доставці
                (обговорюється з менеджером)
              </li>
            </ul>
          </div>
          <div className="col-12 dostavkaZagol">
            <p>
              <b>Способи доставки</b>
            </p>
            <ul className="garantUL">
              <li>
                Самовивіз{" "}
                <p>
                  Ви можете забрати замовлене обладнання на нашому складі або з
                  офісу у Житомирі.
                </p>
              </li>
              <li>
                Доставка по Україні{" "}
                <p>
                  Здійснюється транспортною компанією на склад Перевізника у
                  Вашому місті або за вказаною Вами адресою. Вартість доставки
                  оплачує Одержувач при отриманні обладнання. Вартість доставки
                  залежить від габаритів та ваги обладнання.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDostavka;
