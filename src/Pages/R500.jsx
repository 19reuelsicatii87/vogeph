import Header from './Components/Header';
import Footer from './Components/Footer';
import WarrantyLogo from './Components/WarrantyLogo';
import R500Carousel from './Components/Models/R500Carousel';
import R500Content from './Components/Models/R500Content';
import R500Specs from './Components/Models/R500Specs';
import R500Review from './Components/Models/R500Review';
import './Assets/modelStyle.css';

export default function R500() {
  return (
    <div>
      <Header />
      <R500Carousel />
      <R500Content />
      <R500Specs />
      <R500Review />
      <WarrantyLogo />
      <Footer />
    </div>
  )
}
