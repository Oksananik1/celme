const Feedback = () => {
  return (
    <div className="container oNAS">
      <div className="row">
        <div className="col-12 mb-4 kontZagol text-center">
          <h2>Дякуємо за звернення</h2>
        </div>

        <div className="col-6 feedback">
          <p className="feedbackText">
            Ваше повідомлення надіслано. <br />
            Ми обов'язково Вам відповімо.
          </p>
        </div>
        <div className="col-6">
          <img
            src="/images/feedbackKonvert.png"
            className="fotofeedback"
            alt="photo1"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
