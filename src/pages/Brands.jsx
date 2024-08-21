import Container from "../ui/Container";
import Loading from "../ui/Loading";

import BrandItem from "../components/BrandItem/BrandItem";
import { useBrands } from "../hooks/brands/useBrands";

function Brands() {
  const {
    isLoading,
    data: { data: brands = [] },
  } = useBrands();

  return (
    <section className="py-12 h-full flex items-center justify-center">
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {brands.map((collection) => (
              <BrandItem key={collection._id} collection={collection} />
            ))}
          </div>
        </Container>
      )}
    </section>
  );
}

export default Brands;
