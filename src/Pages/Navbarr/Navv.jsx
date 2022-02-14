import React from "react";


import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Signup, useAuth, Logout, Login } from '../Login/Fire'
import { useRef, useState } from 'react'



import Home from "../Home/Home";
import Appp from '../Wallet/Wallet'
import cl from "../im/cl.png"
import "./nav.css";
import Loginn from "../Login/Loginn";
import Register from "../Register/Register";
import Create_artwork from "../Create_artwork/Create_artwork";
import Profle from "../profile/Profile";
import Explore from "../Explore/Explore";












function Navbarr() {

  const [loading, setloading] = useState(false)

  const currentUser = useAuth();







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
    <Router>
      <div className="navbarrr">







        <nav class="navbar navbar-expand-lg navbar-light bg-#121419  ">

          <div class="container-fluid">



            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarButtonsExample2"
              aria-controls="navbarButtonsExample2"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars text-light"></i>
            </button>

            <a class="navbar-brand me-2" href="">

              <Link to="/"><img src={cl} alt="placeholder 960" class="img-fluid "
                height="52"
                id="navlogo"
                alt=""

                loading="lazy"
              /></Link>


            </a>




            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarButtonsExample1"
              aria-controls="navbarButtonsExample1"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-search text-light"></i>
            </button>










            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarButtonsExample-profile"
              aria-controls="navbarButtonsExample-profile"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                class="rounded-circle  "
                height="52"
                alt="Avatar"
                loading="lazy"
              />
            </button>




            <div class="collapse navbar-collapse justify-content-center " id="navbarButtonsExample-profile">
              <div class="container-fluid  d-md-block d-lg-none ">
                <h1>pro</h1>
              </div>


            </div>




            {/* first line navbar show only in large screen */}


            <div class="collapse navbar-collapse justify-content-center  " id="navbarButtonsExample">




              <div className="  w-50  ">
                <div className="">


                  <div className="d-none d-xl-block   mr-3">
                    <div className="row align-items-center mx-auto  formm-full">

                      <div className="col-3  border-search  bg- #cfcbca	">

                        <div class="dropdown  ">
                          <button class="  dropdown-toggle border-0 bg-bt p-3 rounded-8  text-light " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            All items
                          </button>
                          <ul class="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">All items</a></li>
                            <li><a class="dropdown-item" href="#">Collections</a></li>
                            <li><a class="dropdown-item" href="#">Creaters</a></li>
                          </ul>
                        </div>

                      </div>
                      <div className="col-8">

                        <form class="d-flex input-group p-2 ">



                          <input
                            type="search"
                            class="form-control border-0  inp-wid bgg"
                            placeholder="enter your search here"
                            aria-label="Search"
                          />

                        </form>

                      </div   >
                      <div className="col-1 align-self-center">
                        <h6><i class="fas fa-search mt-3  text-light"></i></h6>

                      </div>
                    </div>


                  </div>

                </div>



              </div>





              <ul class="navbar-nav me-auto mb-2 mb-lg-0    align-items-center mx-auto">

                <li class="nav-item  d-none d-xl-block   " >
                  <button type="button" class="btn btn-primary  p-3  rounded-9  " data-toggle="button" aria-pressed="false" autocomplete="off">
                    Create
                  </button>

                </li>
                <li class="nav-item  d-none d-xl-block  " >
                  <h6><Link to="/" class="text-decoration-none" > <a class=" px-3" href="#">My collection<span className="text-danger">12</span></a></Link></h6>

                </li>



                <a
                  class=" me-3 dropdown-toggle hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="far fa-heart"></i>
                  <span class="badge rounded-pill badge-notification bg-primary">1</span>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end bg-dark w-50"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">Some news</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Another news</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>


                <a
                  class=" me-3 dropdown-toggle hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="far fa-bell"></i>
                  <span class="badge rounded-pill badge-notification bg-primary">1</span>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end bg-dark w-auto p-3 scr"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <h6 className="dropdown-head text-light p-3">notification <span className="text-danger">4</span></h6>
                  <div className="container">
                    <div className="row p-3">
                      <div className="col-1">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                          class="rounded-3 image-fluid  "
                          height="52"
                          alt="Avatar"
                          loading="lazy"
                        />


                      </div>
                      <div className="col-11">
                        <li>
                          <a class="mx-3 " href="#">@JackieJ just commented on Cryptoki NFT and Digital Market PSD Template</a>
                          <br></br>
                          <a class=" p-3" href="#">2 minutes ago</a>
                        </li>

                      </div>




                    </div>

                  </div>

                  <div className="container ">
                    <div className="row p-3">
                      <div className="col-1">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                          class="rounded-3 image-fluid  "
                          height="52"
                          alt="Avatar"
                          loading="lazy"
                        />


                      </div>
                      <div className="col-11">
                        <li>
                          <a class="mx-3 " href="#">@JackieJ just commented on Cryptoki NFT and Digital Market PSD Template</a>
                          <br></br>
                          <a class=" p-3" href="#">2 minutes ago</a>
                        </li>

                      </div>




                    </div>

                  </div>
                  <div className="container">
                    <div className="row p-3">
                      <div className="col-1">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                          class="rounded-3 image-fluid  "
                          height="52"
                          alt="Avatar"
                          loading="lazy"
                        />


                      </div>
                      <div className="col-11">
                        <li>
                          <a class="mx-3 " href="#">@JackieJ just commented on Cryptoki NFT and Digital Market PSD Template</a>
                          <br></br>
                          <a class=" p-3" href="#">2 minutes ago</a>
                        </li>

                      </div>




                    </div>

                  </div>
                  <div className="container">
                    <div className="row p-3">
                      <div className="col-1">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                          class="rounded-3 image-fluid  "
                          height="52"
                          alt="Avatar"
                          loading="lazy"
                        />


                      </div>
                      <div className="col-11">
                        <li>
                          <a class="mx-3 " href="#">@JackieJ just commented on Cryptoki NFT and Digital Market PSD Template</a>
                          <br></br>
                          <a class=" p-3" href="#">2 minutes ago</a>
                        </li>

                      </div>




                    </div>

                  </div>

                </ul>



                <a
                  class=" me-3 dropdown-toggle hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fas fa-shopping-cart"></i>
                  <span class="badge rounded-pill badge-notification bg-primary">1</span>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end bg-dark w-30 rounded-9"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <h6 className="dropdown-head text-light p-3">your cart <span className="text-danger" > 3</span></h6>

                  <div className="container">
                    <div className="row p-3">
                      <div className="col-2">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                          class="rounded-4 image-fluid  "
                          height="52"
                          alt="Avatar"
                          loading="lazy"
                        />

                      </div>
                      <div className="col-8">


                        <li>
                          <a class="dropdown-item" href="#">Cryptoki NFT and Digital Market PSD Template</a>
                        </li>
                        <div className="bg-primary  rounded-9 mx-3">
                          <h6 className="text-light mx-5">UI Template</h6>
                        </div>

                      </div>
                      <div className="col-2">
                        <h6 className="text-light mt-2">
                          $12</h6>

                      </div>

                    </div>
                  </div>



                  <div className="container">
                    <div className="row p-3">
                      <div className="col-2">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                          class="rounded-4 image-fluid  "
                          height="52"
                          alt="Avatar"
                          loading="lazy"
                        />

                      </div>
                      <div className="col-8">


                        <li>
                          <a class="dropdown-item" href="#">Twitter Gaming Headers Pack 04
                          </a>
                        </li>
                        <div className="bg-danger  rounded-9 mx-3 ">
                          <h6 className="text-light mx-5">SOCIAL GRAPHICS</h6>
                        </div>

                      </div>
                      <div className="col-2">
                        <h6 className="text-light mt-2">
                          $12</h6>

                      </div>

                    </div>
                  </div>

                  <div className="container">
                    <div className="row p-3">
                      <div className="col-2">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                          class="rounded-4 image-fluid  "
                          height="52"
                          alt="Avatar"
                          loading="lazy"
                        />

                      </div>
                      <div className="col-8">


                        <li>
                          <a class="dropdown-item" href="#">Cryptoki NFT and Digital Market PSD Template</a>
                        </li>
                        <div className="bg-warning  rounded-9 mx-3 ">
                          <h6 className="text-light mx-5">CODED TEMPLATES</h6>
                        </div>

                      </div>
                      <div className="col-2">
                        <h6 className="text-light mt-2">
                          $12</h6>

                      </div>

                    </div>
                  </div>

                  <div className="container">
                    <hr className="text-light"></hr>

                    <div className="row">
                      <div className="col-4">


                      </div>

                      <div className="col-6 align-self-center">
                        <h6 className="text-light ">
                          cart total</h6>

                      </div>
                      <div className="col-2 ">   <h6 className="text-light ml-10">
                        $300</h6></div>

                    </div>

                    <hr className="text-light"></hr>
                  </div>

                  <div className="container">


                    <div className="row ">
                      <div className="col-6">


                      </div>

                      <div className="col-6 align-self-center p-1">
                        <button className="btn bgb rounded-9 text-light">go to cart</button>
                        <button className="btn bgb rounded-9 text-light">checkout</button>


                      </div>


                    </div>


                  </div>









                </ul>





              </ul>
              <div class="vr mx-auto"></div>


              <div class="d-flex mx-auto  ">

                <div className="row justify-content-start">
                  <div className="col-8">
                    {/* <h6 className="text-light">
                   
                      {   currentUser?.email}</h6> */}

                    <div className="mt-2">

                      <Link to="/login"><a href="" hidden={loading || currentUser} className=" p-2 ">login</a></Link>
                      <Link to="/register"><a href="" hidden={loading || currentUser} className=" p-2">signup</a></Link>
                    </div>



                    {/* <button className="btn btn bg-dark" hidden={loading||currentUser}>log in </button>
                      <button className="btn btn bg-dark" hidden={loading||currentUser}>singup </button> */}




                  </div>

                  <div className="col-4 bg " >
                    <a
                      class="dropdown-toggle d-flex align-items-center hidden-arrow"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"


                    >
                      {/* <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                        class="rounded-circle"
                        height="55"
                        alt="Black and White Portrait of a Man"
                        loading="lazy"
                      /> */}

                      <h3><i class="fas fa-user-circle p-2 "></i></h3>
                    </a>
                    <div
                      class="dropdown-menu dropdown-menu-end bg-black  rounded-9 border "
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <div className="bg-im-pro">

                        {/* <img
                          src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                          class="rounded-circle mx-1 mt-4 "
                          height="45"
                          alt="Black and White Portrait of a Man"
                          loading="lazy"
                        />
                        <button className="btn btn-primary rounded-9 h-50 mx-5 ">profile</button> */}




                      </div>
                      <ul className="list-unstyled" >
                        {/* <li>
                          <a class="dropdown-item" href="#"><i class="fas fa-user mx-3"></i>  My profile</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"><i class="fas fa-cog mx-3"></i> Account settings</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"><i class="fas fa-cog mx-3"></i> Notification settings</a>
                        </li> */}
                        <li>
                          <a class="dropdown-item" href="#"> <h5>{currentUser?.email}</h5></a>
                        </li>

                        <li hidden={loading || currentUser}>
                          <Link to='/register'><a class="dropdown-item" href="#"><i class="fas fa-registered mx-3" ></i>  Register</a></Link>
                        </li>

                        <li hidden={loading || currentUser}>
                          <Link to='/login'><a class="dropdown-item" href="#"><i class="fas fa-user-circle mx-3" hidden={loading || currentUser}></i>  Log in</a></Link>
                        </li>

                        <li>
                          <Link to='/create-artwork'><a class="dropdown-item" href="#"><i class="fas fa-image mx-3" ></i>  Create Art work</a></Link>
                        </li>
                        <li>
                          <Link to='/profile-info'><a class="dropdown-item" href="#"><i class="fas fa-image mx-3" ></i>  profile-info</a></Link>
                        </li>
                        <li>
                          <Link to="/wallet"><a class="dropdown-item" href=""><i class="fas fa-wallet mx-3"></i>  Wallet</a></Link>
                        </li>
                        {/* <li>
                          <a class="dropdown-item" href="#"><i class="fas fa-check-circle mx-3"></i>Get verified</a>
                        </li> */}


                        <li hidden={loading || !currentUser}>
                          <button class="dropdown-item btn bg-none text-light myButton rounded-9" onClick={handlelogout} href=""><i class="fas fa-sign-out-alt mx-3"></i>Log out</button>
                        </li>
                      </ul>
                    </div>

                  </div>

                </div>











              </div>
            </div>



          </div>


          {/* search bar for mobile view */}

          <div class="collapse navbar-collapse justify-content-center " id="navbarButtonsExample1">
            <div class="container-fluid  d-md-block d-lg-none ">
              <input type="text" className="  " placeholder="search"></input>
            </div>


          </div>


          {/* ------search  bar for mobile view closed----------- */}



          {/* menu btn for mobile view */}

          <div class="collapse navbar-collapse justify-content-center   " id="navbarButtonsExample2">

            <div class="container-fluid  d-md-block d-lg-none ">





              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item  font-weight-bold">
                  <a class=" p-3" aria-current="page" href="#">Home</a>
                </li>

                <div class="dropdown">
                  <li class=" nav-item  font-weight-bold dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"><a className=" p-3  text-light" aria-current="page">Explore</a>  </li>


                  <ul class="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>



                <li class="nav-item  font-weight-bold">
                  <a class=" p-3" aria-current="page" href="#">Creators</a>
                </li>
                <li class="nav-item  font-weight-bold">
                  <a class=" p-3" aria-current="page" href="#">Collectors</a>
                </li>

                <li class="nav-item  font-weight-bold">
                  <a class=" p-3" aria-current="page" href="#">Spotlight</a>
                </li>


                <div class="dropdown">
                  <li class=" nav-item  font-weight-bold dropdown-toggle "
                    type="button"
                    id="dropdownMenuButton"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"><a className=" p-3  text-light" aria-current="page">Product</a>  </li>


                  <ul class="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
                    <li><a class="dropdown-item" href="#">Product v1</a></li>
                    <li><a class="dropdown-item" href="#">Product v2</a></li>
                    <li><a class="dropdown-item" href="#">Product v3</a></li>
                  </ul>
                </div>




                <div class="dropdown">
                  <li class=" nav-item  font-weight-bold dropdown-toggle "
                    type="button"
                    id="dropdownMenuButton"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"><a className=" p-3  text-light" aria-current="page">All pages</a>  </li>


                  <ul class="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
                    <li><a class="dropdown-item" href="#">Product v1</a></li>
                    <li><a class="dropdown-item" href="#">Product v2</a></li>
                    <li><a class="dropdown-item" href="#">Product v3</a></li>
                  </ul>
                </div>







                <div class="dropdown">
                  <li class=" nav-item  font-weight-bold dropdown-toggle "
                    type="button"
                    id="dropdownMenuButton"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"><a className=" p-3  text-light" aria-current="page">Blog</a>  </li>


                  <ul class="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
                    <li><a class="dropdown-item" href="#">Product v1</a></li>
                    <li><a class="dropdown-item" href="#">Product v2</a></li>
                    <li><a class="dropdown-item" href="#">Product v3</a></li>
                  </ul>
                </div>





                <li class="nav-item  font-weight-bold">
                  <a class=" p-3" aria-current="page" href="#">My Collection <span className="t12">12</span></a>
                </li>







              </ul>


              <div>



                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item  font-weight-bold  d-inline">
                    <a class=" p-3" aria-current="page" href="#"><span><i class="fab fa-facebook-square "></i></span> <span><i class="fab fa-twitter-square p-3"></i></span> <span><i class="fab fa-twitch  p-3"></i></span> <span><i class="fab fa-github-alt p-3"></i></span></a>
                  </li>
                </ul>




              </div>








            </div>







          </div>



          {/* menu btn for mobile view closed */}















        </nav>


        {/* navbar second line */}


        <nav class="navbar navbar-expand-lg  border   d-none d-lg-block   bg-#121419">

          <div class="container-fluid">





            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to='/'> <li class="nav-item  font-weight-bold">
                <a class=" p-3" aria-current="page" href="">Home</a>
              </li></Link>
              {/* <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                    <a class="p-3 mb-2 dropdown-toggle  font-weight-bold  explorelink" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Explore
                    </a>
                    <ul class="dropdown-menu dropdown-menu bg-black explore border rounded-9 mt-3 h-200" aria-labelledby="navbarDropdownMenuLink">
                      <li className="p-3"><a class=" font-weight-bold" href="#"> Explore</a></li>
                      <li className="p-3" ><a class=" font-weight-bold" href="#">    Explore V2</a></li>
                      <li className="p-3"><a class=" font-weight-bold" href="#">Item version</a> </li>
                    </ul>
                  </li>
                </ul>
              </div> */}






              <div class="dropdown">

                <a class=" p-3 dropbtn  dropdown-toggle font-weight-bold" aria-current="page" href="">Explore</a>
                <div class="dropdown-content bg-black text-light rounded-9 border">
                  <Link to="/explore"><a class=" font-weight-bold p-2 mx-2" href=""> Explore</a></Link>
                  <Link to='/'><a class=" font-weight-bold p-2 mx-2" href="#">    Explore V2</a></Link>
                  <Link to='/'><a class=" font-weight-bold p-2 mx-2" href="#">Item version</a></Link>
                </div>
              </div>








              <li class="nav-item  font-weight-bold">
                <a class=" p-3" aria-current="page" href="#">Creators</a>
              </li>
              <li class="nav-item  font-weight-bold">
                <a class=" p-3" aria-current="page" href="#">Collectors</a>
              </li>

              <li class="nav-item  font-weight-bold">
                <a class=" p-3" aria-current="page" href="#">Spotlight</a>
              </li>

              {/* 
              <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item dropdown ">
                    <a class="p-3 dropdown-toggle  font-weight-bold productlink" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Products
                    </a>
                    <ul class="dropdown-menu dropdown-menu bg-black product mt-3 border rounded-9" aria-labelledby="navbarDropdownMenuLink">
                      <li className="p-3"><a class="p-4 mt-3 font-weight-bold" href="#">  Product v1</a></li>
                      <li className="p-3"><a class="p-4 font-weight-bold" href="#">    Products V2</a></li>
                      <li className="p-3"><a class="p-4 font-weight-bold" href="#"> Products v3</a></li>
                    </ul>
                  </li>
                </ul>
              </div> */}


              <div class="dropdown">

                <a class=" p-3 dropbtn dropdown-toggle font-weight-bold" aria-current="page" href="">  Products</a>
                <div class="dropdown-content bg-black text-light rounded-9 border">
                  <Link to="/explore"><a class=" font-weight-bold p-2 mx-2" href=""> Product v1</a></Link>
                  <Link to='/'><a class=" font-weight-bold p-2 mx-2" href="#">     Products V2</a></Link>
                  <Link to='/'><a class=" font-weight-bold p-2 mx-2" href="#">Products v3</a></Link>
                </div>
              </div>







              <div class="dropdown">

                <a class=" p-3 dropbtn dropdown-toggle font-weight-bold" aria-current="page" href="">  Allpage</a>
                <div class="dropdown-content-all-pg bg-black text-light rounded-9 border">
                  <div >
                    <div className="container ">
                      <div className="row p-3">
                        <div className="col-3 ">
                          <li className="p-1"  ><h6 class="dropdown-header font-weight-bold">Main page</h6></li>
                          <li className="p-1"><a class="  font-weight-bold " href="#">Home</a></li>
                          <li className="p-1"><a class=" font-weight-bold " href="#">Explore</a></li>
                          <li className="p-1"><a class=" font-weight-bold" href="#">Explore v2</a></li>
                          <li className="p-1"><a class=" mt-3 font-weight-bold" href="#">item version</a></li>
                          <li className="p-1"><a class=" font-weight-bold" href="#">spotlight</a></li>
                          <li className="p-1"><a class=" font-weight-bold" href="#"> Products v3</a></li>
                          <li className="p-1"><a class="mt-3 font-weight-bold" href="#">product page</a></li>

                          <li className="p-1"><a class=" font-weight-bold" href="#"> Product page v2</a></li>

                        </div>
                        <div className="col-3 mt-5">

                          <li className="p-1"><a class=" mt-3 font-weight-bold" href="#">product page v3</a></li>
                          <li className="p-1"><a class=" font-weight-bold" href="#">Blog grid</a></li>
                          <li className="p-1"><a class=" font-weight-bold" href="#">Blog classic</a></li>
                          <li className="p-1"><a class=" font-weight-bold" href="#">Blog post sidebar</a></li>
                          <li className="p-1"><a class=" font-weight-bold" href="#">Blog post centered</a></li>
                          <li className="p-1"><a class=" font-weight-bold" href="#">FAG</a></li>
                          <li className="p-1"><a class=" font-weight-bold" href="#">Contect</a></li>

                        </div>
                        <div className="col-3">
                          <li><h6 class="dropdown-header font-weight-bold">user page</h6></li>
                          <li className="p-1"><a class=" mt-3 font-weight-bold" href="#">  profile page about</a></li>
                          <li className="p-1"><a class=" font-weight-bold" href="#">    profile info</a></li>
                          <li className="p-1"><a class=" font-weight-bold" href="#"> Upload artwork</a></li>
                          <li className="p-1"><a class=" mt-3 font-weight-bold" href="#">  Nofification</a></li>
                          <li className="p-1"><a class=" font-weight-bold" href="#">shopping cart</a></li>
                          <li className="p-1"><a class=" font-weight-bold" href="#">Checkout</a></li>


                        </div>
                        <div className="col-3 mt-4">
                          <li className="p-1"><a class="p-4 mt-3 font-weight-bold" href="#">Activity</a></li>
                          <li className="p-1"><a class="p-4 font-weight-bold" href="#">Creaters</a></li>
                          <li className="p-1"><a class="p-4 font-weight-bold" href="#">Collectors</a></li>
                          <li className="p-1"><a class="p-4 font-weight-bold" href="#">Become a creator</a></li>
                          <li className="p-1"><a class="p-4 font-weight-bold" href="#">Connect wallet</a></li>
                          <Link to="/login"><li className="p-1"><a class="p-4 font-weight-bold" href="">Login</a></li></Link>
                          <Link to="/register"><li className="p-1"><a class="p-4 font-weight-bold" href="#">Register</a></li></Link>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>







              <div class="dropdown">

                <a class=" p-3 dropbtn dropdown-toggle font-weight-bold" aria-current="page" href=""> Blog</a>
                <div class="dropdown-content bg-black text-light rounded-9 border">
                  <Link to="/explore"><a class=" font-weight-bold p-2 mx-2" href=""> Product v1</a></Link>
                  <Link to='/'><a class=" font-weight-bold p-2 mx-2" href="#">     Products V2</a></Link>
                  <Link to='/'><a class=" font-weight-bold p-2 mx-2" href="#">Products v3</a></Link>
                </div>
              </div>


              {/* <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                    <a class="p-3 dropdown-toggle  font-weight-bold" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fas fa-ellipsis-h"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
                      <li><a class="p-4 mt-3 font-weight-bold" href="#">  Product v1</a></li>
                      <li><a class="p-4 font-weight-bold" href="#">    Products V2</a></li>
                      <li><a class="p-4 font-weight-bold" href="#"> Products v3</a></li>
                    </ul>
                  </li>
                </ul>
              </div> */}



<div class="dropdown">

<a class=" p-3 dropbtn dropdown-toggle font-weight-bold" aria-current="page" href="">         <i class="fas fa-ellipsis-h"></i> </a>
<div class="dropdown-content bg-black text-light rounded-9 border">
  <Link to="/explore"><a class=" font-weight-bold p-2 mx-2" href="#"> Product v1</a></Link>
  <Link to='/'><a class=" font-weight-bold p-2  mx-2" href="#">     Products V2</a></Link>
  <Link to='/'><a class=" font-weight-bold p-2 mx-2" href="#">Products v3</a></Link>
</div>
</div>










            </ul>

            <div class="d-flex align-items-center">

              <a class=" me-3" href="#">
                <i class="fab fa-facebook-square"></i>
              </a>
              <a class=" me-3" href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a class=" me-3" href="#">
                <i class="fab fa-twitch"></i>
              </a>
              <a class=" me-3" href="#">
                <i class="fab fa-twitter-square"></i>
              </a>
              <a class=" me-3" href="#">
                <i class="fab fa-github-alt"></i>
              </a>





            </div>










          </div>




        </nav>










      </div>

      <Switch>


        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/wallet">
          <Appp />
        </Route>
        <Route exact path="/login">
          <Loginn />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>

        <Route exact path="/create-artwork">
          <Create_artwork />
        </Route>

        <Route exact path="/profile-info">
          <Profle />
        </Route>

        <Route exact path="/explore">
          <Explore />
        </Route>




      </Switch>
    </Router>









  );
}
export default Navbarr;










