import './App.scss';
import Header from './components/header/Header';
import Banner from './components/banner-principal/banner';
import Cards from './components/card-produto/cards';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="main-content">
      <Header/>
      <Banner/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
