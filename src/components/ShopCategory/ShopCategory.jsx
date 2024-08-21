import Slider from "react-slick";
import CategoryItem from "../CategoryItem/CategoryItem";
import useCategories from "../../hooks/categories/useCategories";

function ShopCategory() {
  const {
    isLoading,
    data: { data: collections = [] },
    error,
  } = useCategories();

  if (error) return;

  return (
    <section className="py-8 space-y-8">
      <h2 className="text-xl font-medium">Shop Popular Categories</h2>

      <div
        className={`rounded overflow-hidden min-h-52 ${
          isLoading ? "animate-pulse bg-slate-100" : ""
        }`}
      >
        <Slider
          dots={false}
          infinite={true}
          speed={700}
          arrows={false}
          slidesToShow={7}
          slidesToScroll={7}
          autoplay={true}
          autoplaySpeed={3000}
          pauseOnHover={true}
          responsive={[
            {
              breakpoint: 1024,
              settings: { slidesToShow: 4, slidesToScroll: 4 },
            },
            {
              breakpoint: 768,
              settings: { slidesToShow: 3, slidesToScroll: 3 },
            },
            {
              breakpoint: 640,
              settings: { slidesToShow: 2, slidesToScroll: 2 },
            },
          ]}
        >
          {collections.map((collection) => (
            <CategoryItem key={collection._id} collection={collection} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default ShopCategory;
