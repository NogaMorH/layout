import { Link } from "react-router-dom"

export const HomeHeader = () => {
    return (
        <div className='home-header'>
            <div className='logo'>myTeam</div>
            <nav>
                <Link>home</Link>
                <Link>about</Link>
            </nav>
            <button>contact us</button>
        </div>
    )
}