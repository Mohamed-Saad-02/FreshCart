import { useParams } from "react-router-dom";
import { useProductDetail } from "../hooks/products/useProductDetail";

import Container from "../ui/Container";
import ProductItemDetail from "../components/ProductItemDetail/ProductItemDetail";
import ProductsSlider from "../components/ProductsSlider/ProductsSlider";
import Loading from "../ui/Loading";

function ProductDetail() {
  const { id } = useParams();

  const {
    isLoading,
    data: { data: product = {} },
  } = useProductDetail();

  return (
    <section className="py-8 h-full flex items-center justify-center lg:w-11/12 lg:mx-auto">
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <ProductItemDetail product={product} />
          <ProductsSlider
            productId={id}
            categoryProductId={product.category._id}
          />
        </Container>
      )}
    </section>
  );
}

export default ProductDetail;
