/* eslint-disable no-unused-vars */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
// import ThemeProvider from "./components/Container/ThemeProvider.jsx";
import Home from "./pages/Home.jsx";
import VerifiyEmail from "./pages/VerifiyEmail.jsx";
import Cart from "./pages/cart.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import About from "./pages/About.jsx";
import ProductPage from "./pages/SingleProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/cart",
        element: <Cart />, // Assuming you want to protect this route
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/product/:productId",
        element: <ProductPage />,
      },

      {
        path: "/place-order",
        element: <PlaceOrder />,
      },
    ],
  },
  {
    path: "/verify",
    element: <VerifiyEmail />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* <ThemeProvider> */}

      <RouterProvider router={router} />
      {/* </ThemeProvider> */}
    </Provider>
  </StrictMode>
);
