import { db } from "../firebase"
import { storage } from "../firebase"
import { ref, onValue } from "firebase/database"
import './dash.css'
import React from "react"
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import React from "react"
export const Dashboard = () => {


    const email = "aayushpandey1100@gmail.com"
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");

    const [open, setOpen] = React.useState(false);

    const [books, setBooks] = React.useState([{}]);

    const logOut = () => {
        localStorage.clear();
        window.location.reload();
    }



    React.useEffect(() => {
        const starCountRef = ref(db, 'Books');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            //   console.log(data)
            if (data !== null) {
                Object.values(data).map((internals) => {
                    setBooks((oldBooks) => [internals, ...oldBooks]);
                    // console.log(internals);

                });
            }
        });
    }, []);

    // console.log(books);




    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };





    return (


        <div className="DashBody">


            <nav className="navHolder">
                <div className='mainNav'>
                    <img src="/images/icon.jpg" />

                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Most Viewed</a></li>
                        <li><a href='#'>New Books</a></li>
                    </ul>
                </div>
                <div className='ImgSec'>
                    <button className="logBtn" onClick={logOut}>Logout!</button>
                    <img id="AdminImg" src={localStorage.getItem("photo")} />
                </div>

            </nav>



            <div className='internals'>
                <div className="container">
                    <img id="mainIcon" src='/images/animm.gif' />
                    <div className='about'>
                        <div className="profileHolder">
                            <img id="profilePic" src={localStorage.getItem("photo")} />

                            <h1>Welcome!
                                <br />
                                <span id="profileName"> {localStorage.getItem("name")} </span></h1>

                        </div>
                        <p>
                            Congratulations 🥳
                            <br />
                            You Have Successfully Logged in!
                        </p>
                        <button className="button-53" >Dashboard</button>
                        <button className="button-531" onClick={handleClickOpen} >Order Books</button>
                    </div>
                </div>

                <div className='lineHolder'>
                    <div className='horLine'></div>
                </div>



                <div className='gridDash'>




                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Book On Demand!</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Fill The Given Form To Order The Desired Book To Be Added Here!👹
                            </DialogContentText>
                            <TextField
                                autoFocus
                                autocomplete="off"
                                margin="dense"
                                id="name"
                                label="Book Name"
                                fullWidth
                                variant="standard"
                                onChange={
                                    (event) => {
                                        setTitle(event.target.value);
                                    }
                                }
                            />
                            <TextField
                                autoFocus
                                autocomplete="off"
                                margin="dense"
                                id="cate"
                                label="Book Description"
                                fullWidth
                                variant="standard"
                                onChange={
                                    (event) => {
                                        setDescription(event.target.value);
                                    }
                                }
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button><a href={`mailto:organizationietapps@gmail.com?subject=Order Book&body=Hey Aayush! Can You Please Upload
           Book : ${title} 
           Description :${description}`}>Send</a></Button>
                        </DialogActions>
                    </Dialog>







                    {
                        books.map((dataOfBooks) => {


                            return (
                                <div className='entityDash'>
                                    <div className='xxyy'>
                                        <img className="entityImg" src='/images/bookish.gif' />
                                    </div>
                                    <div className='entityContent'>
                                        <h4>{dataOfBooks.title}</h4>
                                        <p className='ins'>{dataOfBooks.description}</p>
                                        <p className='ins'><a href={dataOfBooks.url}>Read Book...</a></p>
                                    </div>
                                </div>)
                        })
                    }


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




        </div>

    )
}










