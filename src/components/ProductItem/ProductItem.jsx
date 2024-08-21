import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";
import { handleLoadImage } from "../../utils/helper";
import AddToWishlistBtn from "../AddRemoveWishlistBtn/AddRemoveWishlistBtn";

function ProductItem({
  product: { id, imageCover, title, price, ratingsAverage, category = {} } = {},
}) {
  return (
    <div className="group overflow-hidden border-2 border-transparent hover:border-main-color hover:rounded-lg grid hover:p-2 transition-all duration-300 h-full relative">
      <Link to={`/productDetail/${id}`} className="max-sm:text-center">
        <img
          src={imageCover}
          alt={title}
          loading="lazy"
          className="w-full opacity-0 rounded max-sm:w-48 max-sm:mx-auto"
          onLoad={handleLoadImage}
        />
        <h3 className="text-main-color mt-2 font-medium">{category?.name}</h3>
        <h4>{title?.split(" ").splice(0, 2).join(" ")}</h4>
        <div className="flex items-center justify-between mt-3">
          <span>{price} EGP</span>
          <span className="text-gray-400 flex items-center gap-2">
            <FontAwesomeIcon icon={faStar} className="text-rating-color" />
            {ratingsAverage}
          </span>
        </div>
      </Link>

      <div className="mt-4 transition-all duration-300 translate-y-[200%] group-hover:translate-y-0">
        <AddToCartBtn id={id} />
      </div>

      <div className="absolute right-3 top-3 transition-all duration-300 invisible opacity-0 group-hover:opacity-100 group-hover:visible hover:text-red-400 text-slate-700">
        <AddToWishlistBtn id={id} />
      </div>
    </div>
  );
}

export default ProductItem;
