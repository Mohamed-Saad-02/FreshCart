import { Link, useMatch } from "react-router-dom";

function CategoryItem({ collection }) {
  const isCollectionPage = !!useMatch("/categories");

  const { _id, name, image } = collection;

  const handleLoadImage = (e) =>
    e.target.animate({ opacity: 1 }, { duration: 1000, fill: "forwards" });

  return (
    <Link to={`/categoriesCollection/${_id}`} className="space-y-2">
      <div
        className={`${
          isCollectionPage ? "sm:h-72 h-52 rounded overflow-hidden" : "h-48"
        }`}
      >
        <img
          src={image}
          alt={name}
          loading="lazy"
          onLoad={handleLoadImage}
          className="w-full transition-opacity opacity-0 duration-300 h-full"
        />
      </div>
      <h3>{name}</h3>
    </Link>
  );
}

export default CategoryItem;
