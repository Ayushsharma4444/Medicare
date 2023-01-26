import logo from './logo.svg';
import './App.css';
import {Home} from './component/Home';
import {Services} from './component/Services';
import  CWI from './component/CWI';
import {About} from './component/About';
import {Newsletter} from './component/Newsletter';
import {BottomNav} from './component/BottomNav';
import {Bottom} from './component/Bottom';
function App() {
  return (
    <div className="App">
      <Home/>
      <Services/>
      <CWI/>
      <About/>
      <Newsletter/>
      <BottomNav/>
      <Bottom/>
    </div>
  );
}

export default App;
