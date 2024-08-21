import { Link } from "react-router-dom";
import Container from "../ui/Container";
import { useWishlist } from "../hooks/wishlist/useWishlist";
import RemoveFromWishlist from "../components/RemoveFromWishlist/RemoveFromWishlist";
import Loading from "../ui/Loading";
import NoProduct from "../components/NoProduct/NoProduct";
import AddToCartBtn from "../components/AddToCartBtn/AddToCartBtn";

function Wishlist() {
  const { isLoading, data: { count, data: wishlist = [] } = {} } =
    useWishlist();

  if (isLoading)
    return (
      <section className="h-full grid place-content-center">
        <Loading />
      </section>
    );

  if (!count)
    return <NoProduct message="Please Add Product To Wishlist First 😊" />;

  return (
    <section className="py-12">
      <Container>
        <div className="flex items-center gap-1 justify-end mb-8 text-sm">
          <span className="text-slate-900">Total Item</span>
          <span className="text-gray-800 font-medium">{count}</span>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-16 py-3 text-center">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map(({ price, _id, imageCover, title }) => (
                <tr key={_id} className="bg-white border-b hover:bg-gray-50">
                  <td className="p-4">
                    <Link to={`/productDetail/${_id}`}>
                      <img
                        src={imageCover}
                        className="w-20 h-20 object-contain rounded-full mx-auto"
                        alt="Apple Watch"
                        loading="lazy"
                      />
                    </Link>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    <Link to={`/productDetail/${_id}`}>
                      {title?.split(" ").slice(0, 4).join(" ")}
                    </Link>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    ${price}
                  </td>
                  <td className="px-6 py-4 grid gap-3">
                    <RemoveFromWishlist productId={_id} />
                    <AddToCartBtn id={_id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

export default Wishlist;
