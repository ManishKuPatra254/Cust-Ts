import './NavBar.css'
import { Link } from 'react-router-dom'
import { BsMenuButtonFill } from 'react-icons/bs'
import { TiDelete } from 'react-icons/ti'
import { Fragment, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';


export function NavBar() {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { isAuthenticated, user } = useAuth0();

    const navigate = useNavigate()

    function handleNavigateHome() {
        navigate('/');
    }

    const [displayChangeMobile, setDisplayChangeMobile] = useState(false)

    const [activeItem, setActiveItem] = useState('home');

    const handleNavbarClick = (item) => {
        setActiveItem(item);
    };
    

    return (
        <Fragment>
            <nav className="main_navbar">

                <h2 onClick={handleNavigateHome}>CustTs</h2>
                <ul className={displayChangeMobile ? 'navbar_links_to_navigate_mobile_responsive' : 'navbar_links_to_navigate'} onClick={() => setDisplayChangeMobile(false)}>
                    <Link to='/'> <li
                        className={activeItem === 'home' ? 'active' : ''}
                        onClick={() => handleNavbarClick('home')}
                    >
                        Home
                    </li></Link>
                    <Link to='/menfashion'> <li
                        className={activeItem === 'men' ? 'active' : ''}
                        onClick={() => handleNavbarClick('men')}
                    >
                        Men
                    </li></Link>
                    <Link to='/womenfashion'> <li
                        className={activeItem === 'women' ? 'active' : ''}
                        onClick={() => handleNavbarClick('women')}
                    >
                        Women
                    </li></Link>
                    <Link to='/accessories'><li
                        className={activeItem === 'accessories' ? 'active' : ''}
                        onClick={() => handleNavbarClick('accessories')}
                    >
                        Accessories
                    </li></Link>
                    <Link to='/addtocart'> <li
                        className={activeItem === 'addtocart' ? 'active' : ''}
                        onClick={() => handleNavbarClick('addtocart')}
                    >
                        Add to cart
                    </li></Link>
                </ul>

                <div className='btn1_div'>

                    {
                        isAuthenticated &&
                        <span>{user.name}</span>
                    }


                    {
                        isAuthenticated ? (
                            <Fragment>
                                <button className='btn1' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                    Log Out
                                </button>

                            </Fragment>
                        ) : (
                            <Fragment>
                                <button className='btn1' onClick={() => loginWithRedirect()}

                                >Log In</button>

                            </Fragment>
                        )}

                </div>
                <button className='btn2' onClick={() => setDisplayChangeMobile(!displayChangeMobile)}>
                    {displayChangeMobile ? <TiDelete /> : <BsMenuButtonFill style={{ fontSize: '1.1rem' }} />}
                </button>
            </nav>
        </Fragment>
    )
}


