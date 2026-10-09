import Header from './Components/Header';
import Footer from './Components/Footer';
import WarrantyLogo from './Components/WarrantyLogo';
import DS650Carousel from './Components/Models/DS650Carousel';
import DS650Content from './Components/Models/DS650Content';
import DS650Specs from './Components/Models/DS650Specs';
import DS650Review from './Components/Models/DS650Review';
import './Assets/modelStyle.css';

export default function DS650() {
  return (
    <div>
      <Header />
      <DS650Carousel />
      <DS650Content />
      <DS650Specs />
      <DS650Review />
      <WarrantyLogo />
      <Footer />
    </div>
  )
}
