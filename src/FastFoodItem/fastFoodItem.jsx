import "./fastFoodItem.css";
import { HiShoppingCart } from "react-icons/hi";
const FastFoodItem = ({ name, price, ingredients, imageUrl }) => {
  return (
    <div className="card product-card h-100 border-0 shadow-sm pb-1 ">
      <span className="badge badge-end badge-shadow bg-success fs-ms fw-medium">
        قیمت :{price.toLocaleString()}تومان
      </span>
      <div className="card__placeholder">
        <img className="card-img-top" src={imageUrl}></img>
      </div>

      <div className="card-body text-center pt-3 pb-3 d-flex flex-column">
        <h5 className="mb-2">{name} </h5>
        <div className="fs-ms fw-bold text-muted mb-3">{ingredients}</div>
      </div>
      <div className="row justify-content-center align-items-center h-auto  pb-3 ">
        <div className="btn btn-outline-success btn-sm w-75  ml-auto fw-bold  ">
          <HiShoppingCart className="fs-5 ms-3" />
          <span>افزودن به سبد خرید</span>
        </div>
      </div>
    </div>
  );
};
export default FastFoodItem;
