import { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

function ContactUs() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [message, setMessage] = useState("");


    return (
        <div>
            <Header></Header>
            <section id="stores">
                <div className='container py-5'>
                    <div className="px-2 py-5 shadow" >
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-6">
                                <div className="d-flex justify-content-center">
                                    <i className="bi bi-envelope" style={{ fontSize: "70px" }}></i>
                                </div>
                                <h2 className="text-center fw-bold mb-0 pb-0">Leave Us a Message</h2>
                                <p className="text-center mt-0 pt-0">We would love to hear from you</p>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center mb-5">
                            <div className="col-md-9">
                                <div className="mb-3">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text ">Fullname<small style={{ color: "red", paddingLeft: "0.2em" }}>(REQ)</small> </span>
                                        <input type="text"
                                            className="form-control"
                                            aria-describedby="emailHelp"
                                            placeholder="Juan Dela Cruz"
                                            value={fullname}
                                            onChange={(e) => setFullname(e.target.value)}
                                        >
                                        </input>
                                    </div>

                                    <div className="input-group mb-3">
                                        <span className="input-group-text">EAddress<small style={{ color: "red", paddingLeft: "0.2em" }}>(REQ)</small> </span>
                                        <input type="email"
                                            className="form-control"
                                            aria-describedby="emailHelp"
                                            placeholder="juandelacruz@gmail.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                    <div className="input-group mb-0 pb-0">
                                        <span className="input-group-text">Number<small style={{ color: "red", paddingLeft: "0.2em" }}>(REQ)</small> </span>
                                        <input type="text"
                                            className="form-control"
                                            aria-describedby="emailHelp"
                                            placeholder="+63 917 4676123"
                                            value={mobile}
                                            onChange={(e) => setMobile(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                    <div className='text-start mb-3'>
                                        <small className='mx-1' style={{ fontSize: "0.6em" }}>Please include Country and Area code (eg. 63 917 4676123)</small>
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Message<small style={{ color: "red", paddingLeft: "0.2em" }}>(REQ)</small> </span>
                                        <textarea
                                            className="form-control"
                                            placeholder="Drop your message here and we'll connect on your most immediate and available time."
                                            rows="6"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)} required>
                                        </textarea>
                                    </div>
                                </div>
                                <button type="submit"
                                    className="btn btn-lg w-100 background-black text-white"

                                >Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <Footer></Footer>
        </div >
    )
}

export default ContactUs