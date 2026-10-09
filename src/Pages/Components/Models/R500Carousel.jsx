
export default function R500Carousel() {
  return (
    <section id="R500Carousel" className=''>
      <div className="container-fluid background-image-stripe"
      style={{ borderTop: "2px solid #fff600", borderBottom: "5px solid #fff600"}}>
        <div className='row d-flex justify-content-center '>
          <div className='p-1'>
            <div className='row'>
              <div id="carousel500R" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="/Images/Models/500R/VOGE_500R_black_01.png"
                      className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/Images/Models/500R/VOGE_500R_red_06.png"
                      className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/Images/Models/500R/VOGE_500R_black_02.png"
                      className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/Images/Models/500R/VOGE_500R_red_07.png"
                      className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/Images/Models/500R/VOGE_500R_black_03.png"
                      className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/Images/Models/500R/VOGE_500R_red_08.png"
                      className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/Images/Models/500R/VOGE_500R_black_04.png"
                      className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/Images/Models/500R/VOGE_500R_red_05.png"
                      className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel500R" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon background-image-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel500R" data-bs-slide="next">
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
