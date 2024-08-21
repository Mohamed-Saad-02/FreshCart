import { useCategoriesColl } from "../../hooks/categories/useCategoriesColl";
import ProductItem from "../ProductItem/ProductItem";

function ProductsSlider({ categoryProductId, productId }) {
  const {
    isLoading,
    data: { data: productSimilar = [] },
  } = useCategoriesColl(categoryProductId);

  const filterProducts = productSimilar.filter(
    (product) => product.id !== productId
  );

  return (
    <div className="py-20 space-y-10">
      <h2 className="text-xl font-semibold">Related Products</h2>

      <div
        className={`${
          isLoading && "animate-pulse bg-slate-200 min-h-48 rounded"
        } grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8`}
      >
        {filterProducts.map(
          (product) =>
            product.ratingsAverage >= 4 && (
              <ProductItem key={product.id} product={product} />
            )
        )}
      </div>
    </div>
  );
}

export default ProductsSlider;
