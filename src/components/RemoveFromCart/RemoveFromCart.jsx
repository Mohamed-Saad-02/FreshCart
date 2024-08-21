import useRemoveProductCart from "../../hooks/cart/useRemoveProductCart";

function RemoveFromCart({ productId }) {
  const { isDeleting, deleteProduct } = useRemoveProductCart();

  return (
    <button
      className="font-medium text-red-600 hover:underline disabled:opacity-45 disabled:cursor-no-drop transition-opacity duration-300"
      onClick={() => deleteProduct(productId)}
      disabled={isDeleting}
    >
      Remove
    </button>
  );
}

export default RemoveFromCart;
