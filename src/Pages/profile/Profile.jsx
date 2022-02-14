import React from 'react'



import { auth } from "../Login/Fire"


import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Signup, useAuth, Logout, Login, firebaseConfig } from '../Login/Fire'
import { useRef, useState, useEffect } from 'react'
import p1 from "../im/profile-cover-1.png"



import { useHistory } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth";
import Footerr from '../Footer/Footerr';

import a1 from "../im/ava.png"
import pro1 from "../im/profile-cover-1.png"










function Profile() {


    const [user, loading, error] = useAuthState(auth);


    const [loadingg, setloading] = useState(false)

    const currentUser = useAuth();


    const history = useHistory()




    useEffect(() => {
        if (user) {
            // maybe trigger a loading screen
            return;
        }
        if (loading) history.push("/login");
    }, [user, loading]);









    async function handlelogout() {
        setloading(true)
        try {
            await Logout()
        } catch {
            alert("error")
        }
        setloading(false)

    }




















    return (


        <div   >





            <div className='row  mt-5'   >
                <div className='col-lg-3 bgg'>


                    <div className='p-3'>




                        <div className="col-lg-12 bg    border border-dark rounded-9" >


                            <div class="  rounded-9 border border-dark">

                                <div class="  rounded-9   bg-im-pro ">


                                    {/* <img
                                    src={p1}
                                    class="img-fluid border  rounded-9"
                                    height="100"
                                    alt="Black and White Portrait of a Man"
                                    loading="lazy"



                                /> */}


                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                        class="rounded-circle mx-1 mt-5 "
                                        height="45"
                                        alt="Black and White Portrait of a Man"
                                        loading="lazy"
                                    />

                                    {/* <h3><i class="fas fa-user-circle p-3 text-black"></i></h3> */}
                                </div>
                                <div className='p-4 '>

                                    <h5 className='text-light'>Dexter Stark</h5>
                                    <h6 className='headtextt'> {currentUser?.email}</h6>

                                </div>
                            </div>





                            <ul class="list-unstyled p-3">
                                <li className='mt-1' >
                                    <a class="" href="#"><i class="fas fa-user mx-3"></i>  My profile</a>
                                </li>
                                <li className='mt-3' >
                                    <a class="" href="#"><i class="fas fa-cog mx-3"></i> Account settings</a>
                                </li>
                                <li className='mt-3' >
                                    <a class="" href="#"><i class="fas fa-cog mx-3"></i> Notification settings</a>
                                </li>


                                <li className='mt-3' hidden={loadingg || currentUser}>
                                    <Link to='/register'><a class="" href="#"><i class="fas fa-registered mx-3" ></i>  Register</a></Link>
                                </li>

                                <li className='mt-3' hidden={loadingg || currentUser}>
                                    <Link to='/login'><a class="" href="#"><i class="fas fa-user-circle mx-3" hidden={loading || currentUser}></i>  Log in</a></Link>
                                </li>

                                <li className='mt-3' >
                                    <Link to='/create-artwork'><a class="" href="#"><i class="fas fa-image mx-3" ></i>  Create Art work</a></Link>
                                </li>
                                <li className='mt-3' >
                                    <Link to="/wallet"><a class="" href=""><i class="fas fa-wallet mx-3"></i>  Wallet</a></Link>
                                </li>
                                <li className='mt-3' >
                                    <a class="" href="#"><i class="fas fa-check-circle mx-3"></i>Get verified</a>
                                </li>


                                <li className='mt-3' hidden={loadingg || !currentUser}>
                                    <a onClick={handlelogout} href=""><i class="fas fa-sign-out-alt mx-3"></i>Log out</a>
                                </li>
                            </ul>




                        </div>


                    </div>


                </div>
                <div className='col-lg-9  bg-'>




                    <div className=''>

                        <div class="fw-bold  text-capitalize  mx-5">

                            <h1 class="fw-bold  text-capitalize text-light display-5"><span className='headtextt'>Profile</span> Info</h1>
                            <h3 class="fw-bold  text-capitalize  text-light mt-4">Personal Info</h3>
                            <div className='row text-light'>
                                <div className='col-lg-6  '>
                                    <label for="" className='my-3'>Full Name</label>

                                    <input type="text" id="fname" name="fname" class="col-lg-12  col-md-12  bgg text-light p-2 rounded-9 border border-dark " placeholder='Full Name' />




                                </div>

                                <div className='col-lg-6  '>
                                    <label for="" className='my-3'>Email Address</label>

                                    <input type="email" id="fname" name="fname" class="col-lg-12  col-md-12 bgg text-light p-2 rounded-9 border border-dark" placeholder='Email Address' />




                                </div>


                                <div className='col-lg-6  '>
                                    <label for="" className='my-3'>Username</label>

                                    <input type="text" id="fname" name="fname" class="col-lg-12  col-md-12 bgg text-light p-2 rounded-9 border border-dark " placeholder='Username' />




                                </div>

                                <div className='col-lg-6  '>
                                    <label for="" className='my-3'>Phone Contact</label>

                                    <input type="tel" id="fname" name="fname" class="col-lg-12 col-md-12 bgg text-light p-2 rounded-9 border border-dark" placeholder='phone number' pattern="[\+]\d{2}[\(]\d{2}[\)]\d{4}[\-]\d{4}" />




                                </div>
                                <div className='col-lg-6 my-5 '>
                                    <label for="" className='my-3'>Change Password</label>

                                    <input type="password" id="fname" name="fname" class="col-lg-12  col-md-12 bgg text-light p-2 rounded-9 border border-dark " placeholder='min 6 letter' />




                                </div>

                                <div className='col-lg-6  my-5'>
                                    <label for="" className='my-3'>
                                        Repeat Password</label>

                                    <input type="password" id="fname" name="fname" class="col-lg-12  col-md-12 bgg text-light p-2 rounded-9 border border-dark" placeholder='min 6 letter' />




                                </div>





                            </div>

                            <h3 class="fw-bold  text-capitalize  text-light mt-4">Personal Info</h3>

<div className='row'>
                            <div className='  col-lg-4  my-5 '>
                                <img class="avatar avatar-96 bg-primary rounded-circle text-white p-1"
                                    src={a1} /><a href="">

                                    <span class="badge rounded-pill badge-notification bg-dark mt-3 p-1  "><i class="fas fa-camera  "></i>  </span>

                                </a>

                            </div>

                            <div className='  col-lg-6  my-5 '>
                                <img class="img-fluid"
                                    src={pro1} /><a href="">

                                    <span class="badge rounded-pill badge-notification bg-dark mt-3 p-1  "><i class="fas fa-camera  "></i>  </span>

                                </a>

                            </div>
                            </div>
                        </div>









                        <button type="submit" className=" mx-5 col-lg-2  text-light rounded-9 btn myButton1 my-3">Save Changes</button>


                    </div>
                </div>


            </div>
            <div className='my-5'>
                <Footerr />

            </div>





        </div >
    )
}

export default Profile

