import bgImg from '../assets/images/bg-pattern-home-2.svg'

export const HomeHero = () => {
    return (
        <section className='full main-layout home-hero-container'>
            <div className='home-hero'>
                <h1 className='hero-title'>Find the best <span className='emphasized'>talent</span></h1>
                <div className='paragraph-container'>
                    <div className='decoration'></div>
                    <p>
                        Finding the right people and building high performing teams can be hard. Most companies aren’t
                        tapping into the abundance of global talent. We’re about to change that.
                    </p>
                    <img src={bgImg} alt='' className='bg-img' />
                </div>
            </div>
        </section>
    )
}