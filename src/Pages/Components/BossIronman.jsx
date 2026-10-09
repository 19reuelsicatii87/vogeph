import { Link } from "react-router-dom";

export default function BossIronman() {
    return (
        <section id="boss-ironman">
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-lg-12 p-3'>
                        <div className='h-100 d-flex align-items-center'>
                            <img className='img-fluid' src='/Images/Events/BossIronMan1.jpg'></img>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 p-3'>
                        <div className='h-100 d-flex align-items-center'>
                            <img className='img-fluid' src='/Images/Events/BossIronMan2.jpg'></img>
                        </div>
                    </div>
                    <div className='col-lg-6 p-3'>
                        <h3 className='m-0'>Conquering the Ultimate Adventure</h3>
                        <p className=''>Boss IronMan Philippines with Voge 500 DSX and 650 DS</p>
                        <p>
                            In the world of adventure and extreme challenges, few can compare to the monumental feat that is the
                            Boss IronMan Philippines. A grueling test of both man and machine, this event pushes participants
                            to their limits as they traverse a mind-boggling 1,200 kilometers of Northern Luzon's rugged roads
                            within a mere 24 hours. It's a test of endurance, determination, and, most importantly, the choice
                            of the right vehicle. Meet the remarkable trio - Allan Escuzar, Eric Dela Cruz, and Narz Lagalag -
                            who conquered this incredible challenge aboard the Voge 500 DSX and 650 DS motorcycle.
                        </p>
                        <p>
                            The Boss IronMan Philippines is not for the faint of heart. It demands unwavering determination,
                            an indomitable spirit, and a vehicle that can withstand the toughest terrains. And it was precisely
                            the choice of the Voge 500 DSX and 650 DS that set Allan, Eric, and Narz on the path to exultance.

                            The Voge 500 DSX and 650 DS is not just any motorcycle; it's a masterpiece of engineering designed to tackle
                            the most demanding of adventures. With its impressive features and capabilities, it became the lifeline
                            of our adventurers, enabling them to conquer the seemingly unconquerable.

                            At the heart of the <Link className="fw-bold" style={{ color: "#B8860B" }} to='/model/500DSX'>Voge 500 DSX</Link> beats a robust and reliable engine that delivers the power and performance
                            needed to take on the toughest of terrains. When you're racing against the clock, you need an engine that
                            won't let you down, and the <Link className="fw-bold" style={{ color: "#B8860B" }} to='/model/650DS'>Voge 650 DS</Link> engine proved its mettle.
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 p-3'>
                        <p>
                            Completing Boss IronMan Philippines is not a one-person show; it's a testament to teamwork and shared determination.
                            Allan Escuzar, Eric Dela Cruz, and Narz Lagalag demonstrated that together, they could conquer the impossible.
                            Each rider brought their unique skills and unwavering commitment to the table, pushing each other to their limits and beyond.

                            As they sped through the picturesque landscapes of Northern Luzon, they faced challenges that tested their mental
                            and physical strength. From navigating treacherous terrains to battling fatigue, their journey was a rollercoaster
                            of emotions. But they had a secret weapon – the Voge 650 DS and 500 DSX – a motorcycle that never once let them down.
                        </p>
                        <p>
                            In the end, Boss IronMan Philippines wasn't just a competition of willpower; it was a demonstration
                            of the harmony between man and machine. The Voge 650 DS and 500 DSX showcased its mettle as a champion's choice,
                            and Allan, Eric, and Narz emerged victorious.
                        </p>
                        <p>
                            Their journey was an ode to the synergy between human determination and technological prowess.
                            It's proof that when you have a dream, a team, and a machine like the Voge 500 DSX and 650 DS, you can conquer
                            any challenge that comes your way.
                        </p>
                        <p>
                            To Allan Escuzar, Eric Dela Cruz, Narz Lagalag, and the incredible Voge motorcycles, we salute your victory.
                            Your glory is a testament to the power of engineering excellence and the harmonious collaboration
                            between man and machine. You've shown the world that with the Voge 500 DSX and 650 DS by your side, conquering the
                            impossible becomes not just a dream but a reality.
                        </p>
                    </div>
                    <div className='col-lg-6 p-3'>
                        <div className='h-100 d-flex align-items-center'>
                            <img className='img-fluid' src='/Images/Events/BossIronMan.png'></img>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
