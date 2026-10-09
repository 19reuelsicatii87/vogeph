import { Link } from "react-router-dom";

export default function WarrantyLogo() {
    return (
        <section id="warranty-logo">
            <div className=''>
                <div className='container py-3 px-2'>
                    <div className='row'>
                        <div className='col-sm-4 d-flex justify-content-center'>
                            <div className='d-flex align-items-center'>
                                <img src='/Images/WarrantyLogo.png'
                                    style={{ height: '290px', width: '290px' }}></img>
                            </div>
                        </div>
                        <div className='col-sm-8 d-flex align-items-center'>
                            <div className='row px-5'>
                                <h3 className='fw-bold'>ENJOY A 2-YEAR WARRANTY WITH VOGE</h3>
                                <p>Since 1 June 2023, all new motorbikes with displacement above 450cc, marketed by the <b>VOGE Philippines</b> enjoys a two-year warranty.</p>
                                <Link to="/warranty" className="btn background-black fw-bold text-white mx-1">
                                    Voge Philippines Warranty
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
