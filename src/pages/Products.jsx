import ProductsContainer from "../components/ProductsContainer/ProductsContainer";
import Container from "../ui/Container";

function Products() {
  return (
    <section className="py-8 h-full flex items-center justify-center">
      <Container>
        <ProductsContainer />
      </Container>
    </section>
  );
}

export default Products;
