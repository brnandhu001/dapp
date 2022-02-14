import React from 'react'
import Footerr from '../Footer/Footerr'
import { Signup,useAuth,Logout } from '../Login/Fire'
import { useRef,useState, } from 'react'
import {useHistory } from "react-router-dom"


function Register() {

    const history=useHistory()

    const [loading,setloading]=useState(false)


     const  currentUser=useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();

    async function handlelogout(){
        setloading(true)
        try{
            await Logout()
        }catch{
            alert("error")
        }
        setloading(false)

    }


   async function handleSignup(){
      
    setloading(true);

       try{
        await Signup( emailRef.current.value,passwordRef.current.value)
     

        alert( "account create success fully  " ,history.push('/'))
      
 
     

       } catch{
           alert("error")
       }
       setloading(false)
   }

    return (
        <div>

           
<div className=''>

{/* <h1>{currentUser?.email}</h1> */}
                <section class="vh-100 gradient-custom fw-bolder">
                    <div class="container  h-100">
                        <div class="row d-flex justify-content-center  h-100">
                            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div class="card bgg text-white" >
                                    <div class="card-body p-5 ">

                                        <div class="mb-md-5 mt-md-4 pb-5">
                                      
                                     

                                            <h1 class="fw-bold mb-2  text-capitalize text-center  pb-5"><span className='headtextt'>Register</span> Account</h1>


                                            {/* <div class="form-outline form-white mb-4">
                                                <label class="form-label text-light " for="">Username</label>
                                                <input type="text" ref={usernameRef}  class="form-control form-control-lg bg-light rounded-9 text-dark" />

                                            </div> */}

                                            <div class="form-outline form-white mb-4">

                                                <label class="form-label text-light " for="">Email Address</label>
 
                                                <input type="email"  ref={emailRef}  placeholder='xyz@gmail.com' className=' bg-light rounded-9 text-dark w-100 p-2 bg-light  border-0 otline'></input>


                                            </div>

                                            <div class="form-outline form-white mb-4">

                                                <label class="form-label text-light " for="">password</label>
                                                <input type="password"  placeholder='min 6 character' className=' bg-light rounded-9 text-dark w-100 p-2 bg-light  border-0 otline'></input>


                                            </div>
                                            <div class="form-outline form-white mb-4">

                                                <label class="form-label text-light " for="">Confirm Password</label>
                                                {/* <input type="password" ref={passwordRef} id="typePasswordX"  class="form-control form-control-lg bg-light rounded-9 text-dark" /> */}
                                                <input type="password" ref={passwordRef} placeholder='min 6 character' className=' bg-light rounded-9 text-dark w-100 p-2 bg-light  border-0 otline'></input>


                                            </div>




                                            <div class="d-flex justify-content-between align-items-center">

                                                <div class="form-check ounded-9">
                                                    <input
                                                        class="form-check-input fotfm rounded-9"
                                                        type="checkbox"
                                                        value=""
                                                        id="flexCheckDefault"
                                                    />
                                                    <label class="form-check-label" for="flexCheckDefault">

                                                        I agree to Privacy Policy
                                                    </label>



                                                </div>









                                            </div>






                                            <div className='text-center mtext-light'>
                                                <button class="btn col-12 px-5 rounded-9  mt-3 text-capitalize myButton  text-light" disabled={loading} onClick={handleSignup}   type="submit"><h6>Register Now</h6></button>

                                                {/* <button class="btn col-12 px-5 rounded-9  mt-3 text-capitalize myButton  text-light"  onClick={handlelogout} type="submit"><h6>logout</h6></button> */}

                                                <button class="btn  col-12 px-5 rounded-9  mt-3 text-lowercase text-light myButton" onClick={()=>history.push('/login')} type="submit"><h6><span className='text-uppercase'>I</span> have an account</h6></button>

                                                <h6 class="fw-bold mb-2 text-capitalize text-center mt-4">You’ll receive a confirmation email in your inbox with a link to activate your account.</h6>

                                            </div>




                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                </div>
                <br></br>
                <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>


<div className='' >
                <Footerr/>


                </div>
              


           




        </div>
    )
}

export default Register
