
export default function DS650Carousel() {
  return (
    <section id="DS650Carousel" className=''>
      <div className="container-fluid background-image-stripe"
        style={{ borderTop: "2px solid #fff600", borderBottom: "5px solid #fff600" }}>
        <div className='row d-flex justify-content-center '>
          <div className='p-1'>
            <div className='row'>
              <div id="carousel650DS" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="/Images/Models/650DS/650ds-e5-34.png"
                      className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/Images/Models/650DS/650ds-e5-35.png"
                      className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/Images/Models/650DS/650ds-e5-36.png"
                      className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/Images/Models/650DS/650ds-e5-38.png"
                      className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel650DS" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon background-image-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel650DS" data-bs-slide="next">
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
