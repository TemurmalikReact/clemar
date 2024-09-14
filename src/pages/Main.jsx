import { Banner } from "../components/banner/Banner";
import { Categories } from "../components/categories/Categories";
import { Contact } from "../components/contact/Contact";
import { News } from "../components/news/News";
import { Partners } from "../components/partners/Partners";
import { Products } from "../components/products/Products";
import { Why } from "../components/why/Why";

export const Main = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Products />
      {/* 
      <Why />
      <Partners />
      <News />
      <Contact /> */}
    </div>
  );
}

export default Main;
