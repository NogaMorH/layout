import { HomeDescription } from "../cmps/home-description"
import { HomeHeader } from "../cmps/home-header"
import { HomeHero } from "../cmps/home-hero"

export const Home = () => {
    return (
        <div className='main-layout home'>
            <HomeHeader />
            <HomeHero />
            <HomeDescription />
        </div>
    )
}