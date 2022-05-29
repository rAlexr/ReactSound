const Productext = ({ promo = "", header = "", info = "" }) => {
  return (
    <div className="productext">
      <div className="productext-text">
        <p>{promo}</p>
        <h1>{header}</h1>
        <p>{info}</p>
      </div>
      <div className="productext-btns">
        <p>{price}</p>
        <div className="productext-btns-container">
          <div className="productext-btns-container__count-btns">
            <button>-</button>
            <span>1</span>
            <button>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productext;
