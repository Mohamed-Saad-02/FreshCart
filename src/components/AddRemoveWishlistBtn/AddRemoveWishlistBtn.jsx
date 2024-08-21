import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useAddToWishlist } from "../../hooks/wishlist/useAddToWishlist";
import { useWishlist } from "../../hooks/wishlist/useWishlist";
import { useRemoveFromWishlist } from "../../hooks/wishlist/useRemoveFromWishlist";

function AddToWishlistBtn({ id }) {
  const { data: { data: wishlist = [] } = {} } = useWishlist();
  const { isAdding, addProduct } = useAddToWishlist();
  const { isRemoving, removeProduct } = useRemoveFromWishlist();

  const isFound = !!wishlist.find((product) => product.id === id);

  const handleAddProduct = () => addProduct(id);
  const handleRemoveProduct = () => removeProduct(id);

  return (
    <div className="">
      {isFound ? (
        <button
          className="p-2 transition-all duration-300 hover:text-slate-700 text-red-400"
          title="Remove from wishlist"
          disabled={isRemoving}
          onClick={handleRemoveProduct}
        >
          <FontAwesomeIcon icon={faHeart} size="lg" />
        </button>
      ) : (
        <button
          className="p-2 transition-all duration-300 hover:text-red-400 text-slate-700"
          title="Add to wishlist"
          disabled={isAdding}
          onClick={handleAddProduct}
        >
          <FontAwesomeIcon icon={faHeart} size="lg" />
        </button>
      )}
    </div>
  );
}

export default AddToWishlistBtn;
