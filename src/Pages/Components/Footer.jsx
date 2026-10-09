
function Footer() {
    return (

        <section id="footer">
            <div className='background-black'>
                <div className="container pt-5">
                    <div className='row mb-5'>
                        <div className="col-lg-4">
                            <div className='d-flex flex-column'>
                                <div className="d-none d-sm-block">
                                    <img src='/Images/big-logo-vertical.png'
                                        style={{ height: '260px', width: '290px' }} />
                                </div>
                                <div className="text-white mt-4">
                                    <h3 className="text-start">Address</h3>
                                    <p className="text-start">
                                        <i className="bi bi-pin-map-fill"> 894 8th Ave, Grace Park West, Caloocan, 1400 Metro Manila </i>
                                    </p>
                                </div>
                                <div className="text-white">
                                    <h3 className="text-start">Contact Us</h3>
                                    <p className="text-start">
                                        <i className="bi bi-telephone"> (02) 85679227</i>
                                        <br></br>
                                        <i className="bi bi-envelope"> vogephilippines@gmail.com </i>
                                        <br></br>
                                        <a className="text-white" href="https://www.facebook.com/vogemotorcyclephils"><i className="bi bi-facebook"></i></a>
                                        {" "}
                                        <a className="text-white" href=""><i className="bi bi-tiktok"></i></a>
                                        {" "}
                                        <a className="text-white" href=""><i className="bi bi-instagram"></i></a>
                                        {" "}
                                        <a className="text-white" href=""><i className="bi bi-youtube"></i></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 embed-responsive embed-responsive-1by1">
                            <iframe className="embed-responsive-item"
                                width="100%" height="100%"
                                src="https://maps.google.com/maps?q=894%208th%20Ave,%20Grace%20Park%20West,%20Caloocan,%201400%20Metro%20Manila&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center text-white-50'>
                        <p className='pb-0 mb-0'>COPYRIGHTS NIMPHUS INC.</p>
                    </div>
                    <div className='d-flex justify-content-center text-white-50'>
                        <p className='pb-0 mb-0'>ALL RIGHTS RESERVED</p>
                    </div>
                    <div className='d-flex justify-content-center text-white-50'>
                        <p>
                            <a className='text-white' href='https://www.linkedin.com/in/reuelsicatii/'>
                                Design by Reuel B Sicat II
                            </a>
                        </p>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default Footer