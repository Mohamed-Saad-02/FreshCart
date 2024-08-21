import { useRemoveFromWishlist } from "../../hooks/wishlist/useRemoveFromWishlist";

function RemoveFromWishlist({ productId }) {
  const { isRemoving, removeProduct } = useRemoveFromWishlist();

  return (
    <button
      className="font-medium text-red-600 hover:underline disabled:opacity-45 disabled:cursor-no-drop transition-opacity duration-300"
      onClick={() => removeProduct(productId)}
      disabled={isRemoving}
    >
      Remove
    </button>
  );
}

export default RemoveFromWishlist;
