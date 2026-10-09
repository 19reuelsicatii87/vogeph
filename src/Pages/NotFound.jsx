import { Link } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';

function NotFound() {
    return (
        <div>
            <Header></Header>
            <section id="404-Not-Found">
                <div className='container py-5'>
                    <div className='d-flex justify-content-center'>
                        <div className='row'>
                            <img src="/Images/GoldLogoBlurSmall.png"
                                className="img-fluid" alt="Responsive image"></img>
                            <div className='d-flex justify-content-center'>
                                <div className="mt-1">
                                    <div className="my-3">
                                        <p>Looks like this page wasn't built for two wheels.</p>
                                        <div className='d-flex justify-content-center'>
                                            <Link to="/" className="btn btn-gold mx-1">
                                                <i className="bi bi-house mx-1"></i>
                                                Ride Home
                                            </Link>
                                            <Link to="/contact-us" className="btn btn-gold mx-1">
                                                <i className="bi bi-envelope mx-1"></i>
                                                Contact Us
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default NotFound