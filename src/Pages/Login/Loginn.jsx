import React from 'react'
import Footerr from '../Footer/Footerr'
import "../Home/Home.css"

import { Signup,useAuth,Logout,Login } from '../Login/Fire'
import { useRef,useState } from 'react'
import {Link, useHistory } from "react-router-dom"


function Loginn() {

    
    const history=useHistory()



    const  currentUser=useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();


    const [loading,setloading]=useState(false)

    async function handleLogin(){

      
        setloading(true);
    
           try{
            await Login( emailRef.current.value,passwordRef.current.value)

            alert( "login success fully  " ,history.push('/'))
         
    
           } catch{
               alert("error")
           }
           setloading(false)
       }
    
    return (
        <div>
            
            <section class="vh-100 gradient-custom fw-bolder">
                <div class="container  h-100">
                    <div class="row d-flex justify-content-center  h-100">
                        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div class="card bgg text-white" >
                                <div class="card-body p-5 ">

                                    <div class="mb-md-5 mt-md-4 pb-5">

                                        <h1 class="fw-bold mb-2  text-capitalize text-center  pb-5"><span className='headtextt'> Account</span> Login</h1>
                                     

                                        <div class="form-outline form-white mb-4">
                                            <label class="form-label text-light " for="">Username Or Email Address</label>
                                            <input type="text"   ref={emailRef}  id="typeEmailX" class="form-control form-control-lg bg-light rounded-9 text-dark" />

                                        </div>

                                        <div class="form-outline form-white mb-4">

                                            <label class="form-label text-light " for="">password</label>
                                            <input type="password"  ref={passwordRef}  id="typePasswordX" class="form-control form-control-lg bg-light rounded-9 text-dark" />


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
                                                    Remember Me
                                                </label>
                                                <div className=' d-sm-block d-md-none d-lg-none'>
                                                    <a href="#!" class="text-light  ">Lost your password?</a>
                                                </div>

                                             
                                            </div>
                                            <a href="" class="text-light d-none d-sm-none d-md-block  ">Lost your password?</a>








                                        </div>






                                        <div className='text-center mt-1 text-light'>
                                            <button class="btn col-12 px-5 rounded-9  mt-3 text-capitalize myButton  text-light" type="submit"  onClick={handleLogin}><h6>Login</h6></button>

                                          

                                            <button class="btn  col-12 px-5 rounded-9  mt-3 text-capitalize text-light myButton" onClick={()=>history.push('/register')} type="submit"><h6>Create an Account</h6></button>

                                            <h6 class="fw-bold mb-2 text-capitalize text-center mt-4">Or login with your social account!</h6>

                                        </div>



                                        <div class="d-flex justify-content-center text-center mt-4 pt-1">
                                            <button className='btn btn-primary mx-3 rounded-9'><a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg mx-2 "></i></a></button>
                                         <button className='btn btn-info mx-3 rounded-9 ' onClick={()=>history.push('/register')}> <a href="" class="text-white"><i class="fab fa-twitter fa-lg mx-2"></i></a></button>
                                        
                                        </div>

                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>


            <Footerr/>

        </div>
    )
}

export default Loginn
