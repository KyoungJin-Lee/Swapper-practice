import logo from './logo.svg';
import './App.css';
import './style/index.css';
import Header from './component/Header';
import Connect from './component/Connect';
import SwapFrom from './component/SwapFrom';
import SwapTo from './component/SwapTo';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Header />
      <Connect />
      <SwapFrom />
      <SwapTo />
      <Footer />
    </div>

  );
}

export default App;
