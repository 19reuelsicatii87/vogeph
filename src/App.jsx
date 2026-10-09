import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import R500 from './Pages/R500';
import AC500 from './Pages/AC500';
import DSX500 from './Pages/DSX500';
import DS650 from './Pages/DS650';
import Warranty from './Pages/Warranty';
import ContactUs from './Pages/ContactUs';
import AbouttUs from './Pages/AbouttUs';
import BossIronMan from './Pages/BossIronMan';
import Enduro from './Pages/Enduro';
import Rides from './Pages/Rides';
import Voyager from './Pages/Voyager';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/model/500R' element={<R500 />} />
        <Route path='/model/500AC' element={<AC500 />} />
        <Route path='/model/500DSX' element={<DSX500 />} />
        <Route path='/model/650DS' element={<DS650 />} />
        <Route path='/warranty' element={<Warranty />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/about-us' element={<AbouttUs />} />
        <Route path='/events/boss-ironman' element={<BossIronMan />} />
        <Route path='/events/enduro' element={<Enduro />} />
        <Route path='/community/rides' element={<Rides />} />
        <Route path='/community/voyagers' element={<Voyager />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
