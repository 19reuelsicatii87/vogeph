
export default function AC500Carousel() {
  return (
    <section id="AC500Carousel" className=''>
      <div className="container-fluid background-image-stripe"
        style={{ borderTop: "2px solid #fff600", borderBottom: "5px solid #fff600" }}>
        <div className='row d-flex justify-content-center '>
          <div className='p-1'>
            <div className='row'>
              <div id="carousel500AC" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="/Images/Models/500AC/VOGE_500_AC_meteorolite_grey_1.png"
                      className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/Images/Models/500AC/VOGE_500_AC_silver_grey_5.png"
                      className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/Images/Models/500AC/VOGE_500_AC_meteorolite_grey_2.png"
                      className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/Images/Models/500AC/VOGE_500_AC_silver_grey_6.png"
                      className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/Images/Models/500AC/VOGE_500_AC_meteorolite_grey_3.png"
                      className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/Images/Models/500AC/VOGE_500_AC_silver_grey_7.png"
                      className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/Images/Models/500AC/VOGE_500_AC_meteorolite_grey_4.png"
                      className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/Images/Models/500AC/VOGE_500_AC_silver_grey_8.png"
                      className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel500AC" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon background-image-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel500AC" data-bs-slide="next">
                  <span className="carousel-control-next-icon background-image-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
