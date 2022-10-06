import { Link } from "react-router-dom"
import logo from '../assets/images/logo.svg'

export const HomeHeader = () => {
    return (
        <div className='full main-layout home-header-container'>
            <div className='flex home-header'>
                <div className='flex header-main-content'>
                    <img src={logo} alt='my team' className='logo' />
                    <nav className='main-nav'>
                        <Link>home</Link>
                        <Link>about</Link>
                    </nav>
                </div>
                <button className='btn btn-round'>contact us</button>
            </div>
        </div>
    )
}