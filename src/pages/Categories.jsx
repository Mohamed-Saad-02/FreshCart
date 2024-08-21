import Container from "../ui/Container";
import CategoryItem from "../components/CategoryItem/CategoryItem";

import Loading from "../ui/Loading";
import useCategories from "../hooks/categories/useCategories";

function Categories() {
  const {
    isLoading,
    data: { data: categories = [] },
  } = useCategories();

  return (
    <section className="py-12 h-full flex items-center justify-center">
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {categories.map((collection) => (
              <CategoryItem
                key={collection._id}
                collection={collection}
                collectionName="categories"
              />
            ))}
          </div>
        </Container>
      )}
    </section>
  );
}

export default Categories;
