import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Main from "./pages/Main";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { CategoriesPage } from "./pages/CategoriesPage/CategoriesPage";
import styles from './app.module.scss'
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import { Outlet } from "react-router-dom";
import useScrollToTop from "./utils/useScrollToTop";
import ProductPage from "./pages/ProductPage/ProductPage";
import Modal from "./reusable/Modal";
import ArticlePage from "./pages/ArticlePage/ArticlePage";

function Layout() {
  useScrollToTop();
  
  return (
    <>
      <Header />
      <div className={styles.app}>
        <Outlet />
      </div>
      {/* <Footer />
      <Modal /> */}
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        id: "main",
        path: "/",
        Component: Main,
      },
      {
        id: "categories-page",
        path: "/categories-page",
        Component: CategoriesPage,
      },
      {
        id: "products-page",
        path: "/products-page/:category",
        Component: ProductsPage,
      },
      {
        id: "subcategory-products-page",
        path: "/subcategory-products-page/:subcategory",
        Component: ProductsPage,
      },
      {
        id: "product",
        path: "/product/:product",
        Component: ProductPage,
      },
      {
        id: "article",
        path: "/article/:article",
        Component: ArticlePage,
      },
    ]
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}

