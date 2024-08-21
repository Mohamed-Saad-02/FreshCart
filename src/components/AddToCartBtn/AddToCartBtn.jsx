import { Link, useMatch } from "react-router-dom";
import { useAddToCart } from "../../hooks/cart/useAddToCart";
import { useCart } from "../../hooks/cart/useCart";
import { useRemoveFromWishlist } from "../../hooks/wishlist/useRemoveFromWishlist";

function AddToCartBtn({ id }) {
  const isWishlistPage = !!useMatch("/wishlist");

  const { data: { data: { products = [] } = {} } = {} } = useCart();
  const { isAdding, addProduct } = useAddToCart();
  const { removeProduct } = useRemoveFromWishlist();

  const isProductInCart = !!products.find(({ product }) => product.id === id);

  const handleRemoveProduct = () => removeProduct(id);
  const handleAddProduct = () => {
    if (isWishlistPage) {
      addProduct(id);
      removeProduct(id);
    } else addProduct(id);
  };

  return (
    <>
      {isWishlistPage && isProductInCart ? (
        <Link
          to={`/cart`}
          className="mx-auto text-main-color font-medium"
          onClick={handleRemoveProduct}
        >
          Product already in you cart
        </Link>
      ) : (
        <button
          onClick={handleAddProduct}
          disabled={isAdding}
          className="bg-main-color text-center py-2 w-full text-white rounded hover:opacity-80 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-no-drop h-fit mt-auto"
        >
          Add To Cart
        </button>
      )}
    </>
  );
}

export default AddToCartBtn;
