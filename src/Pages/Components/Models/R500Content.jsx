
export default function R500Content() {
  return (
    <section id="R500Content">
      <div className="container">
        <div className='row my-3'>
          <div className='col-lg-3 my-3'>
            <div className='d-flex justify-content-start'>
              <h1 className='fw-bold headline-gold m-0'>500R</h1>
            </div>
            <div className='d-flex align-items-center flex-row'>
              <p className='m-0'>Colors</p>
              <div className='mx-2' style={{ backgroundColor: "black", height: "1rem", width: "3rem" }}></div>
              <div className='mx-2' style={{ backgroundColor: "red", height: "1rem", width: "3rem" }}></div>
            </div>

          </div>
          <div className='col-lg-7 my-3'>
            <h4>Sensations Guaranteed</h4>
            <p>Looking for a motorbike that makes your heart beat faster? Look no further, as the VOGE 500R is the ultimate choice with its striking design and powerful performance. The guiding principles when designing this motorbike ? Power and agility, aggressive looks and great handling.</p>
            <p>Underneath the 500R's impressive exterior is a modern 471cc parallel-twin producing 46.5bhp at 8500rpm. The LCD dashboard gives you all the information you need and includes a USB to power your smartphone or GPS, while the advanced Nissin braking system (with dual front discs) and KYB suspension ensure a safe and comfortable ride even on the most challenging roads.</p>
            <p>They also looked to the top brands for other components: for example, an injection system from BOSCH ensures the supply of a correct petrol-air mixture. The asymmetrical cast aluminium swingarm with its characteristic "banana shape" contributes to efficient and precise handling. Both the clutch and brake lever are four-way adjustable, so you can always find the ideal sitting position.</p>
            <p>The Pirelli Angel GTs found around the 120/70 - 17 front and 160/60 - 17 rear rims underline the 500R's sporty character. And in terms of looks, you can't ignore the full LED lights and turn signals.</p>
            <p>Whether you are an experienced rider or just starting out, the VOGE 500R is suitable for everyone. Are you ready for the ride of your life?</p>
            <div className='py-5 px-3'
              style={{ backgroundColor: "#fef7e7", borderTop: "1px solid black" }}>
              <div className="row">
                <p className="fw-bold mx-0 my-0 py-0">Price: <s style={{ color: "red" }}>₱290,000</s> ₱260,000 </p>
                <sub>until supply last</sub>
              </div>
            </div>
          </div>
          <div className='col-lg-2 my-3'>
            <div className='d-flex justify-content-start headline-gold'>
              <h2 className='fw-bold m-0'>Street</h2>
            </div>
            <div className='d-flex justify-content-start headline-gold'>
              <h2 className='fw-bold m-0'>Series</h2>
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
              src="https://www.youtube.com/embed/lk27U1aT2Ss?autoplay=0&controls=0&loop=1&mute=0&rel=0&start=1">
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
              src="https://www.youtube.com/embed/lk27U1aT2Ss?autoplay=0&controls=0&loop=1&mute=0&rel=0&start=1">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
