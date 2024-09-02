import './App.css';
import { Banner } from './components/banner/Banner';
import { Categories } from './components/categories/Categories';
import { Header } from './components/header/Header';
import { Products } from './components/products/Products';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Categories />
      <Products />
    </div>
  );
}

export default App;
