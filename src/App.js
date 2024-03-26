import './App.css';
import Ads from './components/ads/ads'
import Download from './components/downloadmenu/download'
import Footer from './components/footer/footer'
import NavHeader from './components/nav-header/nav-header'
import Offer from './components/offer/offer'
import Products from './components/products/products'
import Stuff from './components/stuff/stuff'

function App() {
  return (
    <div>
      <NavHeader />
      <Products />
      <Offer />
      <Ads />
      <Stuff />
      <Download /> 
      <Footer />
    </div>
  );
}

export default App;