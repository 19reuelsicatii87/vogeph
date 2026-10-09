import Header from './Components/Header';
import Footer from './Components/Footer';
import WarrantyLogo from './Components/WarrantyLogo';
import AC500Carousel from './Components/Models/AC500Carousel';
import AC500Content from './Components/Models/AC500Content';
import AC500Specs from './Components/Models/AC500Specs';
import AC500Review from './Components/Models/AC500Review';
import './Assets/modelStyle.css';

export default function AC500() {
  return (
    <div>
      <Header />
      <AC500Carousel />
      <AC500Content />
      <AC500Specs />
      <AC500Review />
      <WarrantyLogo />
      <Footer />
    </div>
  )
}
