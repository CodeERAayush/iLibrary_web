import './mainContent.css'
import { NavBar } from './NavBar'
export const MainCont = () => {
    return (

<>
<NavBar/>
        <div className='site'>
            <div className="container">
                <img id="mainIcon" src='/images/anim.gif' />
                <div className='about'>
                    <h1>Welcome Baby Girl!</h1>
                    <p>We iLibrary provide free Access to the books of Engineering Students for free.
                        Become the part of our family in just few simple steps!
                    </p>
                    <ol>
                        <li>Register To Our Site aur To Our APP</li>
                        <li>Verify Your Account In Few Seconds</li>
                        <li>Hurray! You Have The Access To All The Books And Notes </li>
                    </ol>
                </div>
            </div>

            <div className='lineHolder'>
                <div className='horLine'></div>
            </div>



            <div className='grid'>


                <div className='entity'>
                    <div className='xxyy'>
                        <img className="entityImg" src='/images/books.png' />
                    </div>
                    <div className='entityContent'>
                    <h4>Free Access</h4>
                    <p className='ins'>Get All Books For Free</p>
                    <p className='ins'>Easy Download</p>
                    </div>
                </div>

                <div className='entity'>
                    <div className='xxyy'>
                        <img className="entityImg" src='/images/ebook.png' />
                    </div>
                    <div className='entityContent'>
                    <h4>Fast Book Order</h4>
                    <p className='ins'>Email Us To Add</p>
                    <p className='ins'>OnDemand Books</p>
                    </div>
                </div>
                <div className='entity'>
                    <div className='xxyy'>
                        <img className="entityImg" src='/images/play.png' />
                    </div>
                    <div className='entityContent'>
                    <h4>App Available</h4>
                    <p className='ins'>Catch Us On PlayStore</p>
                    <p className='ins'>Account - HackScript</p>
                    </div>
                </div>



            </div>



            <div className='lineHolder'>
                <div className='horLine'></div>
            </div>



            <div className='footer'>
                <div className='contactUs'>
                    <h3>
                        Contact Us!
                    </h3>
                    <ul>
                        <li>Email: <span>aayushpandey1100@gmail.com</span></li>
                        <li>Phone: <span>+91-7860456546</span></li>
                        <li>Address: <span>Ramjanki Nagar Nakha No 1 Basharatpur Gorakhpur</span></li>
                    </ul>
                </div>
                <div className='line'>
                </div>
                <div className='gplay'>
                    <img id="getIt" src="/images/gPlay.png"></img>
                </div>
            </div>







        </div>
        </>

    )
}