
export default function DS650Content() {
  return (
    <section id="DS650Content">
      <div className="container">
        <div className='row my-3'>
          <div className='col-lg-3 my-3'>
            <div className='d-flex justify-content-start'>
              <h1 className='fw-bold headline-gold m-0'>650DS</h1>
            </div>
            <div className='d-flex align-items-center flex-row'>
              <p className='m-0'>Colors</p>
              <div className='mx-2' style={{ backgroundColor: "red", height: "1rem", width: "3rem" }}></div>
              <div className='mx-2' style={{ backgroundColor: "grey", height: "1rem", width: "3rem" }}></div>
            </div>

          </div>
          <div className='col-lg-7 my-3'>
            <h4>Heritage and Exploration</h4>
            <p>From rugged terrain to mountain passes, the VOGE 650 DS is ready for adventure. The 650DS is a real workhorse, powered by a proven 652cc single-cylinder delivering a 47hp.</p>
            <p>The 650DS uses a 652cc single-cylinder, making it the VOGE with the largest displacement. The torquey engine receives its mixture of air and petrol (from the 18-litre tank) via a BOSCH injection system. The 650DS is stopped by a Nissin braking system, with dual 298mm floating discs and switchable ABS at the rear.</p>
            <p>This adventure touring motorbike also boasts excellent comfort and high riding pleasure, essential features for mile-eaters. Thus, the 650DS equipped with KYB suspension elements, LED lighting, a USB connection and a full-colour TFT dashboard that includes Bluetooth connectivity, a gear indicator and a tyre pressure gauge.</p>
            <p>The 650DS comes standard with crash protection, a luggage rack, a stepped saddle and aluminium footrests for rider and passenger. Pirelli tyres are mounted on a 19-inch cast wheel at the front and a 17-inch rear.</p>
            <div className='py-5 px-3'
              style={{ backgroundColor: "#fef7e7", borderTop: "1px solid black" }}>
              <div className="row">
                <p className="fw-bold mx-0 my-0 py-0">Price: ₱345,000 </p>
                <sub>until supply last</sub>
              </div>
            </div>
          </div>
          <div className='col-lg-2 my-3'>
            <div className='d-flex justify-content-start headline-gold'>
              <h2 className='fw-bold m-0'>Fearless</h2>
            </div>
            <div className='d-flex justify-content-start headline-gold'>
              <h2 className='fw-bold m-0'>Adventure</h2>
            </div>

          </div>
        </div>
        <div className='d-none d-lg-block'>
          <div className='row my-3'>
            <iframe
              width="100%"
              height="600rem"
              title="Voge"
              frameBorder="0"
              allowFullScreen
              src="https://www.youtube.com/embed/hzHF8NjMWvA?autoplay=0&controls=0&loop=1&mute=0&rel=0&start=18">
            </iframe>
          </div>
        </div>
        <div className='d-lg-none'>
          <div className='row my-3'>
            <iframe
              width="100%"
              height="300rem"
              title="Voge"
              frameBorder="0"
              allowFullScreen
              src="https://www.youtube.com/embed/hzHF8NjMWvA?autoplay=0&controls=0&loop=1&mute=0&rel=0&start=18">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
