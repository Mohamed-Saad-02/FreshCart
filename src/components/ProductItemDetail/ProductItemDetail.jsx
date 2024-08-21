import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";

import { handleLoadImage } from "../../utils/helper";
import GoBack from "../GoBack/GoBack";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";
import AddToWishlistBtn from "../AddRemoveWishlistBtn/AddRemoveWishlistBtn";

function ProductItemDetail({
  product: {
    id,
    imageCover,
    images = [],
    category = {},
    title,
    description,
    price,
    ratingsAverage,
  } = {},
}) {
  return (
    <>
      <div className="flex justify-end gap-3">
        <GoBack replace={false} />
        <AddToWishlistBtn id={id} />
      </div>

      <div className="flex items-center justify-center md:justify-between gap-x-12 gap-y-5 max-md:flex-wrap lg:w-11/12">
        <div
          className={`${
            images.length
              ? "md:w-1/3 xl:w-1/4 w-full"
              : "md:basis-1/3 xl:basis-1/4 flex items-center justify-center basis-full"
          }`}
        >
          {images.length > 1 ? (
            <Slider
              dots={false}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={5000}
              pauseOnHover={true}
              arrows={false}
            >
              {images.map((src, index) => (
                <div key={index} className="">
                  <img
                    src={src}
                    alt={title}
                    className="w-full mx-auto max-w-64 max-md:w-72 md:mx-auto opacity-0"
                    onLoad={handleLoadImage}
                    draggable="false"
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <img
              src={imageCover}
              alt={title}
              className="w-full max-md:w-72 md:mx-auto opacity-0"
              loading="lazy"
              onLoad={handleLoadImage}
              draggable="false"
            />
          )}
        </div>
        <div className="md:basis-2/3 xl:basis-3/4 basis-full">
          <h2 className="font-medium">{title}</h2>
          <p className="text-gray-400 mt-2 mb-4">{description}</p>
          <h3 className="font-medium">{category.name}</h3>
          <div className="flex items-center justify-between mt-3">
            <span>{price} EGP</span>
            <span className="text-gray-400 flex items-center gap-2">
              <FontAwesomeIcon icon={faStar} className="text-rating-color" />
              {ratingsAverage}
            </span>
          </div>
          <div className="pt-6">
            <AddToCartBtn id={id} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItemDetail;
