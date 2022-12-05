import { db } from '../firebase';
import { signInWithGoogle } from '../firebase';
import './navbar.css'
export const NavBar=()=>{
    return(
        <>
        <nav className="navHolder">
            <div className='mainNav'>
            <img src="/images/icon.jpg"/>

            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Most Viewed</a></li>
                <li><a href='#'>New Books</a></li>
            </ul>
            </div>
            <div className='buttonSec'>
                <button className='button' onClick={signInWithGoogle}>Login</button>
            </div>

        </nav>
        </>
    )
}