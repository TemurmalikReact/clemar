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

const router = createBrowserRouter([
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
]);

export default function App() {
  return (
    <>
      <Header />
      <div className={styles.app}>
        <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
      </div>
      <Footer />
    </>
  );
}

