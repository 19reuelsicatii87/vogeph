import { Link } from "react-router-dom"



function Header() {


    return (
        <section id="header">
            <div id="menu">

                {/* Desktop View */}
                <div id='viewport-hidden-sm-fixedTop' className="d-none d-lg-block">
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top py-2 background-black">
                        <div className="container">
                            <div>
                                <div className="">
                                    <Link className="navbar-brand" to="/">
                                        <img src="/Images/header-logo-ph.png" alt="logo" />
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <div className="show navbar-collapse" id="navbarColor03">
                                    <ul className="navbar-nav me-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link active" to="/">HOME
                                                <span className="visually-hidden">(current)</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link active dropdown-toggle"
                                                id="navbarDropdown" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                MODELS
                                            </a>
                                            <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown" style={{ minWidth: "6rem" }}>
                                                <Link className="dropdown-item nav-link text-center text-white background-gold-hover" to="/model/650DS" ><small>650 DS</small></Link>
                                                <Link className="dropdown-item nav-link text-center text-white background-gold-hover" to="/model/500DSX"><small>500 DSX</small></Link>
                                                <Link className="dropdown-item nav-link text-center text-white background-gold-hover" to="/model/500R"><small>500 R</small></Link>
                                                <Link className="dropdown-item nav-link text-center text-white background-gold-hover" to="/model/500AC"><small>500 AC</small></Link>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link active dropdown-toggle"
                                                href="/#" id="navbarDropdown" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                EVENTS
                                            </a>
                                            <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown" style={{ minWidth: "6rem" }}>
                                                <Link className="dropdown-item nav-link text-center text-white background-gold-hover" to="/events/boss-ironman"><small>Boss Ironman</small></Link>
                                                <Link className="dropdown-item nav-link text-center text-white background-gold-hover" to="/events/enduro"><small>FJMoto Enduro</small></Link>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link active dropdown-toggle"
                                                href="/#" id="navbarDropdown" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                COMMUNITY
                                            </a>
                                            <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown" style={{ minWidth: "6rem" }}>
                                                <Link className="dropdown-item nav-link text-center text-white background-gold-hover" to="/community/voyagers"><small>Voyager Club</small></Link>
                                                <Link className="dropdown-item nav-link text-center text-white background-gold-hover" to="/community/rides"><small>Fun Rides</small></Link>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" to="/about-us">ABOUT US</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" to="/contact-us">CONTACT US</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div style={{ "height": "5.45rem" }}>

                    </div>
                </div>

                {/* Mobile View */}
                <div id='viewport-shown-sm' className="d-lg-none">
                    <nav className="navbar navbar-expand-md navbar-dark py-2 background-black">
                        <div className="container">
                            <div>
                                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarColor03" aria-controls="navbarColor03"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <img src="/Images/header-logo-ph.png" alt="logo" />
                                </button>
                            </div>
                            <div>
                                <div className="show navbar-collapse" id="navbarColor03">
                                    <ul className="navbar-nav me-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link active" to="/">HOME
                                                <span className="visually-hidden">(current)</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link active dropdown-toggle"
                                                id="navbarDropdown" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                MODELS
                                            </a>
                                            <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown" style={{ minWidth: "6rem" }}>
                                                <Link className="dropdown-item nav-link text-center text-white background-gold-hover" to="/model/650DS" ><small>650 DS</small></Link>
                                                <Link className="dropdown-item nav-link text-center text-white background-gold-hover" to="/model/500DSX"><small>500 DSX</small></Link>
                                                <Link className="dropdown-item nav-link text-center text-white background-gold-hover" to="/model/500R"><small>500 R</small></Link>
                                                <Link className="dropdown-item nav-link text-center text-white background-gold-hover" to="/model/500AC"><small>500 AC</small></Link>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link active dropdown-toggle"
                                                href="/#" id="navbarDropdown" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                EVENTS
                                            </a>
                                            <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown" style={{ minWidth: "6rem" }}>
                                                <Link className="dropdown-item nav-link text-center text-white background-gold-hover" to="/events/boss-ironman"><small>Boss Ironman</small></Link>
                                                <Link className="dropdown-item nav-link text-center text-white background-gold-hover" to="/events/enduro"><small>FJMoto Enduro</small></Link>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link active dropdown-toggle"
                                                href="/#" id="navbarDropdown" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                COMMUNITY
                                            </a>
                                            <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown" style={{ minWidth: "6rem" }}>
                                                <Link className="dropdown-item nav-link text-center text-white background-gold-hover" to="/community/voyagers"><small>Voyager Club</small></Link>
                                                <Link className="dropdown-item nav-link text-center text-white background-gold-hover" to="/community/rides"><small>Fun Rides</small></Link>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" to="/about-us">ABOUT US</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" to="/contact-us">CONTACT US</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </section >
    )
}

export default Header