import ProductItem from "../ProductItem/ProductItem";
import Loading from "../../ui/Loading";
import useProducts from "../../hooks/products/useProducts";

function ProductsContainer() {
  const {
    isLoading,
    data: { data: products = [] },
    error,
  } = useProducts();

  if (error) return;

  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <Loading />
      </div>
    );

  return (
    <section className="pb-8 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductsContainer;
