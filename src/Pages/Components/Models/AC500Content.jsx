
export default function AC500Content() {
  return (
    <section id="AC500Content">
      <div className="container">
        <div className='row my-3'>
          <div className='col-lg-3 my-3'>
            <div className='d-flex justify-content-start'>
              <h1 className='fw-bold headline-gold m-0'>500AC</h1>
            </div>
            <div className='d-flex align-items-center flex-row'>
              <p className='m-0'>Colors</p>
              <div className='mx-2' style={{ backgroundColor: "#61616c", height: "1rem", width: "3rem" }}></div>
              <div className='mx-2' style={{ backgroundColor: "#C0C0C0", height: "1rem", width: "3rem" }}></div>
            </div>

          </div>
          <div className='col-lg-7 my-3'>
            <h4>Drive Your Soul</h4>
            <p>The new 500AC is a scion of the quirky "Advanced Classic" family, where elegant forms from the past meet today's most advanced technologies. Its neo-retro design is complemented by premium finishes and components from top brands.</p>
            <p>The 500AC is powered by a 471cc parallel-twin producing a healthy 48bhp, which we are also familiar with from the 500DS and 500DSX. The leading KYB supplies the fully adjustable upside-down fork and the monoshock with adjustable spring preload and damping. So you can decide whether to tune your bike for sporty use or opt for more comfort.</p>
            <p>Nissin has provided a braking system with two 298 mm brake discs at the front and a single 240 mm disc at the rear. Around the 17-inch alloy wheels, we find sporty Pirelli Angel GT II tyres with a 120/70 at the front and a 160/60 at the rear.</p>
            <p>The large TFT screen not only shows you a lot of basic info but you can also read the tyre pressure, for example. And with a seat height of 795 mm, a dry weight of about 185 kg and a tank capacity of 19 litres, behind that cute face is also just a very accessible and practical motorbike. </p>
            <p>The Voge 500AC is a motorbike that manages to combine past and present, style and innovation, beauty and power.</p>
            <div className='py-5 px-3'
              style={{ backgroundColor: "#fef7e7", borderTop: "1px solid black" }}>
              <div className="row">
                <p className="fw-bold mx-0 my-0 py-0">Price: <s style={{ color: "red" }}>₱310,000</s> ₱290,000 </p>
                <sub>until supply last</sub>
              </div>
            </div>
          </div>
          <div className='col-lg-2 my-3'>
            <div className='d-flex justify-content-start headline-gold'>
              <h2 className='fw-bold m-0'>Advance</h2>
            </div>
            <div className='d-flex justify-content-start headline-gold'>
              <h2 className='fw-bold m-0'>Classic</h2>
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
              src="https://www.youtube.com/embed/4yNKy0TylC8?autoplay=0&controls=0&loop=1&mute=0&rel=0&start=1">
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
              src="https://www.youtube.com/embed/4yNKy0TylC8?autoplay=0&controls=0&loop=1&mute=0&rel=0&start=1">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
