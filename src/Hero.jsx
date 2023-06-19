import heroIMG from './assets/hero.svg'
const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero-center'>
                <div className='hero-title'>
                    <h1>contentful CMS</h1>
                    <p>
                        Gatekeep deep v shaman keytar,
                        waistcoat pork belly next level
                        unicorn tacos neutra. Thundercats
                        3 wolf moon cray, gluten-free taiyaki
                        keytar tattooed schlitz biodiesel
                        quinoa bruh narwhal selvage snackwave.
                    </p>
                </div>
                <div className='img-container'>
                    <img src={heroIMG} className='img' alt="women and browser" />
                </div>
            </div>
        </section>
    )
}

export default Hero
