import { db } from '../firebase';
import { signInWithGoogle } from '../firebase';
import './navbar.css'
export const NavBar=()=>{
    return(
        <>
        <nav className="navHolder">
            <div className='mainNav'>
                <img src="/images/books.gif"/>
                <h4>iLibrary</h4>
            <p className='openInDesk'>Open in Desktop for better experience!</p>
            </div>
            <div className='buttonSec'>
                <button className='button' onClick={signInWithGoogle}>Login</button>
            </div>

        </nav>
        </>
    )
}