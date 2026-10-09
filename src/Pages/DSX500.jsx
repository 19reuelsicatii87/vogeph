import Header from './Components/Header';
import Footer from './Components/Footer';
import WarrantyLogo from './Components/WarrantyLogo';
import DSX500Carousel from './Components/Models/DSX500Carousel';
import DSX500Content from './Components/Models/DSX500Content';
import DSX500Specs from './Components/Models/DSX500Specs';
import DSX500Review from './Components/Models/DSX500Review';
import './Assets/modelStyle.css';

export default function DSX500() {
  return (
    <div>
      <Header />
      <DSX500Carousel />
      <DSX500Content />
      <DSX500Specs />
      <DSX500Review />
      <WarrantyLogo />
      <Footer />
    </div>
  )
}
