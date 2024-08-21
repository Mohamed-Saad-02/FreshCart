import {
  faBars,
  faCartShopping,
  faHeart,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../../context/UserContext";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import Logo from "../../ui/Logo";
import { useQueryClient } from "@tanstack/react-query";

function Navbar({ numOfCartItems, numOfWishlistItems }) {
  const queryClient = useQueryClient();
  const [isActiveLinks, setIsActiveLinks] = useState(false);
  const { userInfo: isUserLog, handleUserInfo } = useUser();

  const handleToggleActiveLinks = () => setIsActiveLinks((active) => !active);
  const userLogOut = () => {
    queryClient.clear();
    handleUserInfo(null);
  };

  return (
    <nav
      className={`bg-light-color relative transition-all duration-300 grid
        ${isActiveLinks ? `${isUserLog ? "h-72 md:h-20" : "h-40"}` : "h-20"}`}
    >
      <Container>
        <div className="py-5 md:py-6 text-gray-600 flex items-center justify-between flex-wrap md:flex-nowrap gap-y-4">
          <div
            className={`flex items-center gap-8 ${
              !isUserLog && "md:basis-full"
            }`}
          >
            <Logo />

            <div
              className={`absolute bottom-0 left-0 md:static md:opacity-100 w-full pb-6 md:pb-0 transition-opacity duration-300 delay-150 ${
                isActiveLinks
                  ? "visible opacity-100"
                  : "invisible md:visible opacity-0"
              } ${!isUserLog && "flex justify-end"}`}
            >
              <ul className="md:flex items-center md:space-x-3 space-y-2 md:space-y-0 w-11/12 md:w-fit mx-auto md:mx-0 container md:max-w-full">
                {isUserLog ? (
                  <>
                    <li className="has-[.active]:text-main-color">
                      <NavLink
                        to="/"
                        className="block transition-colors duration-300 hover:text-main-color"
                        onClick={() =>
                          isActiveLinks && handleToggleActiveLinks()
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="has-[.active]:text-main-color">
                      <NavLink
                        to="/cart"
                        className="block transition-colors duration-300 hover:text-main-color"
                        onClick={() =>
                          isActiveLinks && handleToggleActiveLinks()
                        }
                      >
                        Cart
                      </NavLink>
                    </li>
                    <li className="has-[.active]:text-main-color">
                      <NavLink
                        to="/products"
                        className="block transition-colors duration-300 hover:text-main-color"
                        onClick={() =>
                          isActiveLinks && handleToggleActiveLinks()
                        }
                      >
                        Products
                      </NavLink>
                    </li>
                    <li className="has-[.active]:text-main-color">
                      <NavLink
                        to="/categories"
                        className="block transition-colors duration-300 hover:text-main-color"
                        onClick={() =>
                          isActiveLinks && handleToggleActiveLinks()
                        }
                      >
                        Categories
                      </NavLink>
                    </li>
                    <li className="has-[.active]:text-main-color">
                      <NavLink
                        to="/brands"
                        className="block transition-colors duration-300 hover:text-main-color"
                        onClick={() =>
                          isActiveLinks && handleToggleActiveLinks()
                        }
                      >
                        Brands
                      </NavLink>
                    </li>
                    <li className="md:hidden">
                      <Button
                        className="block transition-colors duration-300 hover:text-main-color"
                        onClick={userLogOut}
                      >
                        Logout
                      </Button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="has-[.active]:text-main-color">
                      <NavLink
                        to="signin"
                        className="block transition-colors duration-300 hover:text-main-color"
                        onClick={() =>
                          isActiveLinks && handleToggleActiveLinks()
                        }
                      >
                        Login
                      </NavLink>
                    </li>
                    <li className="has-[.active]:text-main-color">
                      <NavLink
                        to="signup"
                        className="block transition-colors duration-300 hover:text-main-color"
                        onClick={() =>
                          isActiveLinks && handleToggleActiveLinks()
                        }
                      >
                        Register
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            {isUserLog && (
              <>
                <Link
                  to="/cart"
                  className="text-black relative cursor-pointer px-4 group"
                  title="cart"
                >
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="text-green-700 group-hover:opacity-50 transition-opacity duration-300"
                  />
                  {numOfCartItems ? (
                    <span className="absolute w-5 h-5 text-sm text-white rounded-full bg-main-color flex items-center justify-center -top-4 right-0">
                      {numOfCartItems}
                    </span>
                  ) : (
                    ""
                  )}
                </Link>
                <Link
                  to="/wishlist"
                  className="text-black relative cursor-pointer px-4 group"
                  title="wishlist"
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    size="lg"
                    className="text-red-700 group-hover:opacity-50 transition-opacity duration-300"
                  />
                  {numOfWishlistItems ? (
                    <span className="absolute w-5 h-5 text-sm text-white rounded-full bg-red-600 flex items-center justify-center -top-4 right-0">
                      {numOfWishlistItems}
                    </span>
                  ) : (
                    ""
                  )}
                </Link>
                <Button
                  className="mr-2 ml-5 md:block hidden transition-colors duration-300 hover:text-main-color"
                  onClick={userLogOut}
                >
                  Logout
                </Button>
              </>
            )}

            <div
              className="cursor-pointer text-black px-3 py-2 md:hidden"
              onClick={handleToggleActiveLinks}
            >
              {isActiveLinks ? (
                <FontAwesomeIcon icon={faXmark} size="xl" />
              ) : (
                <FontAwesomeIcon icon={faBars} size="lg" />
              )}
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
