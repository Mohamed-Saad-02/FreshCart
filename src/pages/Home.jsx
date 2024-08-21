import Banner from "../components/Banner/Banner";
import ProductsContainer from "../components/ProductsContainer/ProductsContainer";
import ShopCategory from "../components/ShopCategory/ShopCategory";
import Container from "../ui/Container";

function Home() {
  return (
    <Container>
      <Banner />
      <ShopCategory />
      <div className="w-1/2 mx-auto border-t pt-8 mt-10"></div>
      <ProductsContainer />
    </Container>
  );
}

export default Home;
