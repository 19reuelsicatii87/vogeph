import { useEffect, useState } from "react";
import typewriterModule from "react-typewriter-hook";

const useTypewriter = typewriterModule.default ?? typewriterModule;

const mobileLines = [
    "Ride with Voge to awaken your adventurous spirit and embark on a journey that sparks excitement.",
    "Crafted with precision engineering and innovative design, our motorcycles redefine the pavement, granting you the freedom to chase the horizon.",
];

export default function Banner() {
    const [lineIndex, setLineIndex] = useState(0);
    const typedLine = useTypewriter(mobileLines[lineIndex]);

    useEffect(() => {
        const timer = setInterval(() => {
            setLineIndex((current) => (current + 1) % mobileLines.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="banner">
            <div className='d-none d-lg-block'>
                <div id="carouselBannerDesktop" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">

                        <div className="carousel-item active" data-bs-interval="5000">
                            <div className="background-image-banner-desktop"
                                style={{ backgroundImage: `url(/Images/HeroImage4.jpg)` }}>
                                <div className=" d-flex justify-content-start" style={{ height: "50%" }}>
                                    <div className="d-flex align-items-start mx-3 my-5">
                                        <div className="d-flex flex-column p-3">
                                        </div>
                                    </div>
                                </div>
                                <div className=" d-flex justify-content-center" style={{ height: "50%" }}>
                                    <div className="d-flex align-items-end">
                                        <div className="mx-3 my-2">
                                            <div className="d-flex flex-column p-3">
                                                <div className="d-flex flex-column p-5" style={{ opacity: "0.75", backgroundColor: "CaptionText", width: "90vw" }}>
                                                    <h1 className="fw-bold text-start header-text-gold mb-0">Crafted for the Road Ahead</h1>
                                                    <p className="text-start text-gold mb-0">A symphony of engineering and design, harmoniously crafted for the road ahead</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="carousel-item" data-bs-interval="5000">
                            <div className="background-image-banner-desktop"
                                style={{ backgroundImage: `url(https://voge.s3.ap-southeast-1.amazonaws.com/images/app/HeroImage6.jpg)` }}>
                                <div className=" d-flex justify-content-start" style={{ height: "50%" }}>
                                    <div className="d-flex align-items-start mx-3 my-5">
                                        <div className="d-flex flex-column p-3">
                                        </div>
                                    </div>
                                </div>
                                <div className=" d-flex justify-content-end" style={{ height: "50%" }}>
                                    <div className="d-flex align-items-end">
                                        <div className="mx-3 my-2">
                                            <div className="d-flex flex-column p-3">
                                                <div className="d-flex flex-column p-5" style={{ opacity: "0.75", backgroundColor: "CaptionText" }}>
                                                    <h1 className="fw-bold text-start header-text-gold mb-0">Drive your Soul</h1>
                                                    <p className="text-start text-gold mb-0">Feel the freedom in every twist of the throttle, as you drive your soul on the open road</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="carousel-item" data-bs-interval="5000">
                            <div className="background-image-banner-desktop"
                                style={{ backgroundImage: `url(https://voge.s3.ap-southeast-1.amazonaws.com/images/app/HeroImage7.jpg)` }}>
                                <div className=" d-flex justify-content-start" style={{ height: "50%" }}>
                                    <div className="d-flex align-items-start mx-3 my-5">
                                        <div className="d-flex flex-column p-3">
                                        </div>
                                    </div>
                                </div>
                                <div className=" d-flex justify-content-start" style={{ height: "50%" }}>
                                    <div className="d-flex align-items-end">
                                        <div className="mx-3 my-2">
                                            <div className="d-flex flex-column p-3">
                                                <div className="d-flex flex-column p-5" style={{ opacity: "0.75", backgroundColor: "CaptionText" }}>
                                                    <h1 className="fw-bold text-start header-text-gold mb-0">Where Adventure meets the Road</h1>
                                                    <p className="text-start text-gold mb-0">Embark on an adventure that leads you down trails less traveled and roads uncharted</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="carousel-item" data-bs-interval="5000">
                            <div className="background-image-banner-desktop"
                                style={{ backgroundImage: `url(https://voge.s3.ap-southeast-1.amazonaws.com/images/app/HeroImage8.jpg)` }}>
                                <div className=" d-flex justify-content-start" style={{ height: "50%" }}>
                                    <div className="d-flex align-items-start mx-3 my-5">
                                        <div className="d-flex flex-column p-3">
                                            <div className="d-flex flex-column p-5" style={{ opacity: "0.75", backgroundColor: "CaptionText" }}>
                                                <h1 className="fw-bold text-start header-text-gold mb-0">Redefine Your Ride with Voge Innovation</h1>
                                                <p className="text-start text-gold mb-0">Experience the future of riding – where innovation and excellence redefine your journey</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" d-flex justify-content-end" style={{ height: "50%" }}>
                                    <div className="d-flex align-items-end">
                                        <div className="mx-3 my-2">
                                            <div className="d-flex flex-column p-3">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className='row'>
                    <iframe
                        width="100%"
                        height="700rem"
                        title="Voge"
                        frameBorder="0"
                        allowFullScreen
                        src="https://www.youtube.com/embed/VHtjMamJ6W8?autoplay=1&controls=1&loop=0&mute=0&rel=0&start=1">
                    </iframe>
                </div>


            </div>
            <div className='d-lg-none'>
                <div className='background-image-banner-mobile'>
                    <div className=" d-flex justify-content-start" style={{ height: "80vh" }}>
                        <div className="d-flex align-items-center mx-3">
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-column p-5" style={{ opacity: "0.75", backgroundColor: "CaptionText" }}>
                                    <h1 className="fw-bold text-start header-text-gold-mobile mb-0">Drive your soul</h1>
                                    <p className="text-start text-gold-mobile mb-0">
                                        <span className="cursor">{typedLine}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
