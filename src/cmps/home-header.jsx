import { Link } from "react-router-dom"
import logo from '../assets/images/logo.svg'

export const HomeHeader = () => {
    return (
        <div className='full main-layout home-header-container'>
            <div className='home-header'>
                <img src={logo} alt='my team' className='logo' />
                <nav>
                    <Link>home</Link>
                    <Link>about</Link>
                </nav>
                <button>contact us</button>
            </div>
        </div>
    )
}