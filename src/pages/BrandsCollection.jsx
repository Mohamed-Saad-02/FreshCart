import { useBrandsColl } from "../hooks/brands/useBrandsColl";

import Loading from "../ui/Loading";
import NoProduct from "../components/NoProduct/NoProduct";
import ProductItem from "../components/ProductItem/ProductItem";
import Container from "../ui/Container";

function BrandsCollection() {
  const {
    isLoading,
    data: { data: collection = [] },
  } = useBrandsColl();

  if (!collection.length && !isLoading)
    return <NoProduct message="No Product Now 😥" />;

  return (
    <section className="h-full py-12 flex items-center justify-center">
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {collection.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </Container>
      )}
    </section>
  );
}

export default BrandsCollection;
