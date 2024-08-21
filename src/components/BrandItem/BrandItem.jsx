import React from "react";
import { Link } from "react-router-dom";

function BrandItem({ collection }) {
  const { _id, name, image } = collection;

  const handleLoadImage = (e) =>
    e.target.animate({ opacity: 1 }, { duration: 1000, fill: "forwards" });

  return (
    <Link to={`/brandsCollection/${_id}`}>
      <div className="h-48">
        <img
          src={image}
          alt={name}
          loading="lazy"
          onLoad={handleLoadImage}
          className="w-full transition-opacity opacity-0 duration-300 h-full"
        />
      </div>
    </Link>
  );
}

export default BrandItem;
