import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useCart } from "../hooks/cart/useCart";
import { useWishlist } from "../hooks/wishlist/useWishlist";

function AppLayout() {
  const { data: { numOfCartItems } = {} } = useCart();
  const { data: { count } = {} } = useWishlist();

  return (
    <div className="app-layout">
      <Navbar numOfCartItems={numOfCartItems} numOfWishlistItems={count} />
      <main className="min-h-[70vh] overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
