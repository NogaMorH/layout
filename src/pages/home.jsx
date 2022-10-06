import { HomeHeader } from "../cmps/home-header"
import { HomeHero } from "../cmps/home-hero"

export const Home = () => {
    return (
        <div className='home'>
            <HomeHeader />
            <HomeHero />
        </div>
    )
}