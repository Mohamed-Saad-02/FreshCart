import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

import { useCart } from "../hooks/cart/useCart";

import Container from "../ui/Container";
import Loading from "../ui/Loading";
import RemoveFromCart from "../components/RemoveFromCart/RemoveFromCart";
import useSetCountProd from "../hooks/cart/useSetCountProd";
import useRemoveCart from "../hooks/cart/useRemoveCart";
import NoProduct from "../components/NoProduct/NoProduct";

function Cart() {
  const {
    isLoading,
    data: { numOfCartItems, data: { totalCartPrice, products = [] } = {} } = {},
  } = useCart();

  const { isUpdating, updateProduct } = useSetCountProd();
  const { isRemoving, removeCart } = useRemoveCart();

  if (isLoading)
    return (
      <section className="h-full flex items-center justify-center">
        <Loading />
      </section>
    );

  if (!numOfCartItems)
    return (
      <NoProduct message="No Product In Cart, Please Add Product First 😊" />
    );

  return (
    <section className="py-12">
      <Container>
        <div className="flex items-center justify-between gap-4 max-sm:flex-wrap mb-8 text-sm">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="text-slate-900">Total Item</span>
              <span className="text-gray-800 font-medium">
                {numOfCartItems}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-slate-900">Total Price</span>
              <span className="text-gray-800 font-medium">
                {totalCartPrice} EGP
              </span>
            </div>
          </div>
          <button
            className="flex items-center gap-2 border px-4 py-2 rounded border-gray-300 hover:text-white hover:bg-gray-600 transition-colors duration-300 disabled:cursor-no-drop disabled:bg-gray-600 disabled:text-white"
            disabled={isRemoving}
            onClick={removeCart}
          >
            <FontAwesomeIcon icon={faTrash} size="lg" />
            <span>Remove All</span>
          </button>
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
                  Qty
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map(
                ({ count, price, product: { id, imageCover, title } }) => (
                  <tr key={id} className="bg-white border-b hover:bg-gray-50">
                    <td className="p-4">
                      <Link to={`/productDetail/${id}`}>
                        <img
                          src={imageCover}
                          className="w-20 h-20 object-contain rounded-full mx-auto"
                          alt="Apple Watch"
                          loading="lazy"
                        />
                      </Link>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      <Link to={`/productDetail/${id}`}>
                        {title?.split(" ").slice(0, 4).join(" ")}
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <button
                          className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                          type="button"
                          disabled={isUpdating}
                          onClick={() =>
                            count > 1 && updateProduct([id, count - 1])
                          }
                        >
                          <FontAwesomeIcon icon={faMinus} size="sm" />
                        </button>
                        <div>
                          <span>{count}</span>
                        </div>
                        <button
                          className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                          type="button"
                          disabled={isUpdating}
                          onClick={() => updateProduct([id, count + 1])}
                        >
                          <FontAwesomeIcon icon={faPlus} size="sm" />
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      ${price}
                    </td>
                    <td className="px-6 py-4">
                      <RemoveFromCart productId={id} />
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        <Link to="/checkout" className="block mt-8 w-full">
          <button className="bg-main-color text-white rounded-md px-4 py-2 w-full">
            Check Out
          </button>
        </Link>
      </Container>
    </section>
  );
}

export default Cart;
