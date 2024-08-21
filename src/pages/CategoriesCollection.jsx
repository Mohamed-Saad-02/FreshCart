import { useParams } from "react-router-dom";

import Loading from "../ui/Loading";
import NoProduct from "../components/NoProduct/NoProduct";
import Container from "../ui/Container";
import ProductItem from "../components/ProductItem/ProductItem";
import { useCategoriesColl } from "../hooks/categories/useCategoriesColl";

function CategoriesCollection() {
  const { id } = useParams();

  const {
    isLoading,
    data: { data: collection = [] },
  } = useCategoriesColl(id);

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

export default CategoriesCollection;
