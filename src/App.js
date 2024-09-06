import './App.css';
import { Banner } from './components/banner/Banner';
import { Categories } from './components/categories/Categories';
import { Header } from './components/header/Header';
import { News } from './components/news/News';
import { Partners } from './components/partners/Partners';
import { Products } from './components/products/Products';
import { Why } from './components/why/Why';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Categories />
      <Products />
      <Why />
      <Partners />
      <News />
    </div>
  );
}

export default App;
