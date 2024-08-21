import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import { UserProvider } from "./context/UserContext";

import AppLayout from "./layouts/AppLayout";
import Brands from "./pages/Brands";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProductDetail from "./pages/ProductDetail";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ProtectedAuth from "./components/ProtectedAuth/ProtectedAuth";
import CategoriesCollection from "./pages/CategoriesCollection";
import BrandsCollection from "./pages/BrandsCollection";
import CheckOut from "./pages/CheckOut";
import AllOrders from "./pages/AllOrders";
import Wishlist from "./pages/Wishlist";
import PasswordProcess from "./pages/PasswordProssess";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import AuthLayout from "./layouts/AuthLayout";
import VerifyCode from "./components/VerifyCode/VerifyCode";
import ResetPassword from "./components/ResetPassword/ResetPassword";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 5000,
      refetchOnReconnect: true,
      retry: 3,
      retryDelay: 10000,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        ),
      },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute>
            <CheckOut />
          </ProtectedRoute>
        ),
      },
      {
        path: "/allorders",
        element: (
          <ProtectedRoute>
            <AllOrders />
          </ProtectedRoute>
        ),
      },
      {
        path: "/products",
        element: (
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        ),
      },
      {
        path: "/productDetail/:id",
        element: (
          <ProtectedRoute>
            <ProductDetail />
          </ProtectedRoute>
        ),
      },
      {
        path: "/categories",
        element: (
          <ProtectedRoute>
            <Categories />
          </ProtectedRoute>
        ),
      },
      {
        path: "/categoriesCollection/:id",
        element: (
          <ProtectedRoute>
            <CategoriesCollection />
          </ProtectedRoute>
        ),
      },
      {
        path: "/brands",
        element: (
          <ProtectedRoute>
            <Brands />
          </ProtectedRoute>
        ),
      },
      {
        path: "/brandsCollection/:id",
        element: (
          <ProtectedRoute>
            <BrandsCollection />
          </ProtectedRoute>
        ),
      },

      { path: "*", element: <PageNotFound /> },
    ],
  },
  {
    path: "/",
    element: (
      <ProtectedAuth>
        <AuthLayout />,
      </ProtectedAuth>
    ),
    children: [
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "passwordProcess",
        element: <PasswordProcess />,
        children: [
          { index: true, element: <ForgetPassword /> },
          { path: "verifyCode", element: <VerifyCode /> },
          { path: "resetPassword", element: <ResetPassword /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster
          position="top-center"
          gutter={8}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: { duration: 5000 },
          }}
          containerClassName="text-center"
        />
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-left"
        />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </UserProvider>
  );
}

export default App;
