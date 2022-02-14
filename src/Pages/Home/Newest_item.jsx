import React from 'react'
import Countdown from 'react-countdown';
import a1 from "../im/ava.png"
import item1 from '../im/items/featured-item-1.png';
import item2 from '../im/items/featured-item-2.png';
import item3 from '../im/items/featured-item-3.png';
import item4 from '../im/items/featured-item-4.png';
import item5 from '../im/items/featured-item-5.png';
import item6 from '../im/items/featured-item-6.png';
import item7 from '../im/items/featured-item-7.png';
import item8 from '../im/items/featured-item-8.png';
import item9 from '../im/items/featured-item-9.png';
import item10 from '../im/items/featured-item-10.png';
import item11 from '../im/items/featured-item-11.png';
import item12 from '../im/items/featured-item-12.png';
import item13 from '../im/items/featured-item-13.png';
import item14 from '../im/items/featured-item-14.png';
import item15 from '../im/items/featured-item-15.png';
import item16 from '../im/items/featured-item-16.png';
import item17 from '../im/items/featured-item-17.png';
import item18 from '../im/items/featured-item-18.png';
import item19 from '../im/items/featured-item-19.png';
import item20 from '../im/items/featured-item-20.png';
import item21 from '../im/items/featured-item-21.png';
import item22 from '../im/items/featured-item-22.png';
import item23 from '../im/items/featured-item-23.png';
import item24 from '../im/items/featured-item-24.png';


import a2 from '../im/avatarr/avatar-2.png';
import a3 from '../im/avatarr/avatar-3.png';
import a4 from '../im/avatarr/avatar-4.png';
import a5 from '../im/avatarr/avatar-5.png';
import a6 from '../im/avatarr/avatar-6.png';
import a7 from '../im/avatarr/avatar-7.png';
import a8 from '../im/avatarr/avatar-8.png';
import a9 from '../im/avatarr/avatar-9.png';
import a10 from '../im/avatarr/avatar-10.png';
import a11 from '../im/avatarr/avatar-11.png';
import a12 from '../im/avatarr/avatar-12.png';
import a13 from '../im/avatarr/avatar-13.png';
import a14 from '../im/avatarr/avatar-14.png';
import a15 from '../im/avatarr/avatar-15.png';

function Newest_item() {
    return (
        <div>
            <h1 className='display-5 fw-bolder headd  p-5'><span className='text-primary'>New</span><span className='text-info'>est</span> <span className='text-light'>Items</span></h1>
            {/* cards start here */}
            <div className='p-4'>

                {/*--------------------------------- card1 ------------------------------------*/}
                <div className=' col-lg-3 col-sm-1 col-md-6 d-inline-block p-3'>

                    <div className=''>

                        <div className=' bg-dark  border border-muted rounded-9 '>


                            <div className='card    rounded-9 bggtimer '>
                                <div className='card   border border-muted rounded-9 bggtimer'>

                                    <img src={item5} className='rounded-9 p-3'></img>

                                    <div className='bg-dark col-sm-12 col-lg-6 col-md-8 mx-auto rounded-9 car-tim  hover-overlay  border border-muted'>
                                        <a ><h6 className='my-auto  text-light '> <i class="fas fa-clock p-2"></i> <Countdown date={Date.now() + 550000000}></Countdown></h6></a>
                                        {/* hover function for countdown */}
                                        <div class="mask  rounded-9 bgbtt-gra">
                                            <a ><h6 className='my-auto  text-light'><i class="fas fa-clock p-2"></i><Countdown date={Date.now() + 550000000}></Countdown></h6></a>

                                        </div>
                                    </div>


                                    <h5 className=' fw-bolder mx-3 text-light'>MushRoom Popcorn</h5>


                                    <div className=' p-3'> <img class="avatar avatar-32 bg-primary rounded-circle text-white p-1"
                                        src={a1} /><a href="">

                                            <span class="badge rounded-pill badge-notification bg-primary mt-3"><i class="fas fa-check"></i>  </span>
                                            <span className='fw-bolder mx-3'> @DexterStark</span>
                                        </a>
                                    </div>

                                </div>
                                <span class="badge rounded-pill badge-notification bg-dark mt-3  p-3 align-self-end  hover-overlay border border-muted" > <i class="fas fa-heart"></i>  60 </span>

                            </div>
                            <div className='container'>
                                <div className='row mt-3 fw-bold text-light'>
                                    <div className='col-6'>
                                        <h6>RESERVE PRICE</h6>
                                        <h5>0.96 ETH</h5>

                                    </div>
                                    <div className='col-6'>
                                        <h6>SHARE</h6>
                                        <h6><i class="fab fa-facebook-square "><i class="fab fa-twitter mx-3"></i></i><i class="fab fa-instagram"></i></h6>

                                    </div>

                                </div>

                            </div>






                        </div>

                    </div>
                </div>

                {/*--------------------------------- card2 ------------------------------------*/}

                <div className=' col-lg-3 col-sm-1 col-md-6 d-inline-block p-3'>

                    <div className=''>

                        <div className=' bg-dark  border border-muted rounded-9 '>


                            <div className='card    rounded-9 bggtimer '>
                                <div className='card   border border-muted rounded-9 bggtimer'>

                                    <img src={item6} className='rounded-9 p-3'></img>

                                    <div className='bg-dark col-sm-12 col-lg-6 col-md-8 mx-auto rounded-9 car-tim  hover-overlay  border border-muted'>
                                        <a ><h6 className='my-auto  text-light '> <i class="fas fa-clock p-2"></i> <Countdown date={Date.now() + 550000000}></Countdown></h6></a>
                                        {/* hover function for countdown */}
                                        <div class="mask  rounded-9 bgbtt-gra">
                                            <a ><h6 className='my-auto  text-light'><i class="fas fa-clock p-2"></i><Countdown date={Date.now() + 550000000}></Countdown></h6></a>

                                        </div>
                                    </div>


                                    <h5 className=' fw-bolder mx-3 text-light'>Golden Expansion</h5>


                                    <div className=' p-3'> <img class="avatar avatar-32 bg-primary rounded-circle text-white p-1"
                                        src={a1} /><a href="">

                                            <span class="badge rounded-pill badge-notification bg-primary mt-3"><i class="fas fa-check"></i>  </span>
                                            <span className='fw-bolder mx-3'> @breadedwmdr</span>
                                        </a>
                                    </div>

                                </div>
                                <span class="badge rounded-pill badge-notification bg-dark mt-3  p-3 align-self-end  hover-overlay border border-muted" > <i class="fas fa-heart"></i>  60 </span>

                            </div>
                            <div className='container'>
                                <div className='row mt-3 fw-bold text-light'>
                                    <div className='col-6'>
                                        <h6>RESERVE PRICE</h6>
                                        <h5>147 ETH</h5>

                                    </div>
                                    <div className='col-6'>
                                        <h6>SHARE</h6>
                                        <h6><i class="fab fa-facebook-square "><i class="fab fa-twitter mx-3"></i></i><i class="fab fa-instagram"></i></h6>

                                    </div>

                                </div>

                            </div>






                        </div>

                    </div>
                </div>
                {/*--------------------------------- card3 ------------------------------------*/}

                <div className='col-lg-3 col-sm-1 col-md-6 d-inline-block p-3'>

                    <div className=''>

                        <div className=' bg-dark  border border-muted rounded-9 '>


                            <div className='card    rounded-9 bggtimer '>
                                <div className='card   border border-muted rounded-9 bggtimer'>

                                    <img src={item7} className='rounded-9 p-3'></img>

                                    <div className='bg-dark col-sm-12 col-lg-6 col-md-8 mx-auto rounded-9 car-tim  hover-overlay  border border-muted'>
                                        <a ><h6 className='my-auto  text-light '> <i class="fas fa-clock p-2"></i> <Countdown date={Date.now() + 550000000}></Countdown></h6></a>
                                        {/* hover function for countdown */}
                                        <div class="mask  rounded-9 bgbtt-gra">
                                            <a ><h6 className='my-auto  text-light'><i class="fas fa-clock p-2"></i><Countdown date={Date.now() + 550000000}></Countdown></h6></a>

                                        </div>
                                    </div>


                                    <h5 className=' fw-bolder mx-3 text-light'>Soul Picz Block</h5>


                                    <div className=' p-3'> <img class="avatar avatar-32 bg-primary rounded-circle text-white p-1"
                                        src={a2} /><a href="">

                                            <span class="badge rounded-pill badge-notification bg-primary mt-3"><i class="fas fa-check"></i>  </span>
                                            <span className='fw-bolder mx-3'> @JackieJ</span>
                                        </a>
                                    </div>

                                </div>
                                <span class="badge rounded-pill badge-notification bg-dark mt-3  p-3 align-self-end  hover-overlay border border-muted" > <i class="fas fa-heart"></i>  60 </span>

                            </div>
                            <div className='container'>
                                <div className='row mt-3 fw-bold text-light'>
                                    <div className='col-6'>
                                        <h6>CURRENTBID</h6>
                                        <h5>140 ETH</h5>

                                    </div>
                                    <div className='col-6'>
                                        <h6>SHARE</h6>
                                        <h6><i class="fab fa-facebook-square "><i class="fab fa-twitter mx-3"></i></i><i class="fab fa-instagram"></i></h6>

                                    </div>

                                </div>

                            </div>






                        </div>

                    </div>
                </div>

                {/*--------------------------------- card4 ------------------------------------*/}

                <div className='col-lg-3 col-sm-1 col-md-6 d-inline-block p-3'>

                    <div className=''>

                        <div className=' bg-dark  border border-muted rounded-9 '>


                            <div className='card    rounded-9 bggtimer '>
                                <div className='card   border border-muted rounded-9 bggtimer'>

                                    <img src={item8} className='rounded-9 p-3'></img>

                                    <div className='bg-dark col-sm-12 col-lg-6 col-md-8 mx-auto rounded-9 car-tim  hover-overlay  border border-muted'>
                                        <a ><h6 className='my-auto  text-light '> <i class="fas fa-clock p-2"></i> <Countdown date={Date.now() + 550000000}></Countdown></h6></a>
                                        {/* hover function for countdown */}
                                        <div class="mask  rounded-9 bgbtt-gra">
                                            <a ><h6 className='my-auto  text-light'><i class="fas fa-clock p-2"></i><Countdown date={Date.now() + 550000000}></Countdown></h6></a>

                                        </div>
                                    </div>


                                    <h5 className=' fw-bolder mx-3 text-light'>Jellyfish Galaxy</h5>


                                    <div className=' p-3'> <img class="avatar avatar-32 bg-primary rounded-circle text-white p-1"
                                        src={a8} /><a href="">

                                            <span class="badge rounded-pill badge-notification bg-primary mt-3"><i class="fas fa-check"></i>  </span>
                                            <span className='fw-bolder mx-3'> @breadedwmdr</span>
                                        </a>
                                    </div>

                                </div>
                                <span class="badge rounded-pill badge-notification bg-dark mt-3  p-3 align-self-end  hover-overlay border border-muted" > <i class="fas fa-heart"></i>  60 </span>

                            </div>
                            <div className='container'>
                                <div className='row mt-3 fw-bold text-light'>
                                    <div className='col-6'>
                                        <h6>CURRENTBID</h6>
                                        <h5>140 ETH</h5>

                                    </div>
                                    <div className='col-6'>
                                        <h6>SHARE</h6>
                                        <h6><i class="fab fa-facebook-square "><i class="fab fa-twitter mx-3"></i></i><i class="fab fa-instagram"></i></h6>

                                    </div>

                                </div>

                            </div>






                        </div>

                    </div>
                </div>



                {/*--------------------------------- card4 ------------------------------------*/}

                <div className=' col-lg-3 col-sm-1 col-md-6 d-inline-block p-3'>

                    <div className=''>

                        <div className=' bg-dark  border border-muted rounded-9 '>


                            <div className='card    rounded-9 bggtimer '>
                                <div className='card   border border-muted rounded-9 bggtimer'>

                                    <img src={item9} className='rounded-9 p-3'></img>

                                    <div className='bg-dark col-sm-12 col-lg-6 col-md-8 mx-auto rounded-9 car-tim  hover-overlay  border border-muted'>
                                        <a ><h6 className='my-auto  text-light '> <i class="fas fa-clock p-2"></i> <Countdown date={Date.now() + 550000000}></Countdown></h6></a>
                                        {/* hover function for countdown */}
                                        <div class="mask  rounded-9 bgbtt-gra">
                                            <a ><h6 className='my-auto  text-light'><i class="fas fa-clock p-2"></i><Countdown date={Date.now() + 550000000}></Countdown></h6></a>

                                        </div>
                                    </div>


                                    <h5 className=' fw-bolder mx-3 text-light'>Bubblegum Dream</h5>


                                    <div className=' p-3'> <img class="avatar avatar-32 bg-primary rounded-circle text-white p-1"
                                        src={a3} /><a href="">

                                            <span class="badge rounded-pill badge-notification bg-primary mt-3"><i class="fas fa-check"></i>  </span>
                                            <span className='fw-bolder mx-3'> @daGreenGoo</span>
                                        </a>
                                    </div>

                                </div>
                                <span class="badge rounded-pill badge-notification bg-dark mt-3  p-3 align-self-end  hover-overlay border border-muted" > <i class="fas fa-heart"></i>  60 </span>

                            </div>
                            <div className='container'>
                                <div className='row mt-3 fw-bold text-light'>
                                    <div className='col-6'>
                                        <h6>RESERVE PRICE</h6>
                                        <h5>1.36 ETH</h5>

                                    </div>
                                    <div className='col-6'>
                                        <h6>SHARE</h6>
                                        <h6><i class="fab fa-facebook-square "><i class="fab fa-twitter mx-3"></i></i><i class="fab fa-instagram"></i></h6>

                                    </div>

                                </div>

                            </div>






                        </div>

                    </div>
                </div>

                {/*--------------------------------- card6 ------------------------------------*/}

                <div className=' col-lg-3 col-sm-1 col-md-6 d-inline-block p-3'>

                    <div className=''>

                        <div className=' bg-dark  border border-muted rounded-9 '>


                            <div className='card    rounded-9 bggtimer '>
                                <div className='card   border border-muted rounded-9 bggtimer'>

                                    <img src={item10} className='rounded-9 p-3'></img>

                                    <div className='bg-dark col-sm-12 col-lg-6 col-md-8 mx-auto rounded-9 car-tim  hover-overlay  border border-muted'>
                                        <a ><h6 className='my-auto  text-light '> <i class="fas fa-clock p-2"></i> <Countdown date={Date.now() + 550000000}></Countdown></h6></a>
                                        {/* hover function for countdown */}
                                        <div class="mask  rounded-9 bgbtt-gra">
                                            <a ><h6 className='my-auto  text-light'><i class="fas fa-clock p-2"></i><Countdown date={Date.now() + 550000000}></Countdown></h6></a>

                                        </div>
                                    </div>


                                    <h5 className=' fw-bolder mx-3 text-light'>Lost in Illustration</h5>


                                    <div className=' p-3'> <img class="avatar avatar-32 bg-primary rounded-circle text-white p-1"
                                        src={a5} /><a href="">

                                            <span class="badge rounded-pill badge-notification bg-primary mt-3"><i class="fas fa-check"></i>  </span>
                                            <span className='fw-bolder mx-3'>@noirArtks</span>
                                        </a>
                                    </div>

                                </div>
                                <span class="badge rounded-pill badge-notification bg-dark mt-3  p-3 align-self-end  hover-overlay border border-muted" > <i class="fas fa-heart"></i>  60 </span>

                            </div>
                            <div className='container'>
                                <div className='row mt-3 fw-bold text-light'>
                                    <div className='col-6'>
                                        <h6>CURRENTBID</h6>
                                        <h5>4.89 ETH</h5>

                                    </div>
                                    <div className='col-6'>
                                        <h6>SHARE</h6>
                                        <h6><i class="fab fa-facebook-square "><i class="fab fa-twitter mx-3"></i></i><i class="fab fa-instagram"></i></h6>

                                    </div>

                                </div>

                            </div>






                        </div>

                    </div>
                </div>
                {/*--------------------------------- card7 ------------------------------------*/}

                <div className='col-lg-3 col-sm-1 col-md-6 d-inline-block p-3'>

                    <div className=''>

                        <div className=' bg-dark  border border-muted rounded-9 '>


                            <div className='card    rounded-9 bggtimer '>
                                <div className='card   border border-muted rounded-9 bggtimer'>

                                    <img src={item11} className='rounded-9 p-3'></img>

                                    <div className='bg-dark col-sm-12 col-lg-6 col-md-8 mx-auto rounded-9 car-tim  hover-overlay  border border-muted'>
                                        <a ><h6 className='my-auto  text-light '> <i class="fas fa-clock p-2"></i> <Countdown date={Date.now() + 550000000}></Countdown></h6></a>
                                        {/* hover function for countdown */}
                                        <div class="mask  rounded-9 bgbtt-gra">
                                            <a ><h6 className='my-auto  text-light'><i class="fas fa-clock p-2"></i><Countdown date={Date.now() + 550000000}></Countdown></h6></a>

                                        </div>
                                    </div>


                                    <h5 className=' fw-bolder mx-3 text-light'>Canary’s Kitchen</h5>


                                    <div className=' p-3'> <img class="avatar avatar-32 bg-primary rounded-circle text-white p-1"
                                        src={a3} /><a href="">

                                            <span class="badge rounded-pill badge-notification bg-primary mt-3"><i class="fas fa-check"></i>  </span>
                                            <span className='fw-bolder mx-3'>@daGreenGoo</span>
                                        </a>
                                    </div>

                                </div>
                                <span class="badge rounded-pill badge-notification bg-dark mt-3  p-3 align-self-end  hover-overlay border border-muted" > <i class="fas fa-heart"></i>  60 </span>

                            </div>
                            <div className='container'>
                                <div className='row mt-3 fw-bold text-light'>
                                    <div className='col-6'>
                                        <h6>CURRENTBID</h6>
                                        <h5>140 ETH</h5>

                                    </div>
                                    <div className='col-6'>
                                        <h6>SHARE</h6>
                                        <h6><i class="fab fa-facebook-square "><i class="fab fa-twitter mx-3"></i></i><i class="fab fa-instagram"></i></h6>

                                    </div>

                                </div>

                            </div>






                        </div>

                    </div>
                </div>

                {/*--------------------------------- card8 ------------------------------------*/}

                <div className='col-lg-3 col-sm-1 col-md-6 d-inline-block p-3'>

                    <div className=''>

                        <div className=' bg-dark  border border-muted rounded-9 '>


                            <div className='card    rounded-9 bggtimer '>
                                <div className='card   border border-muted rounded-9 bggtimer'>

                                    <img src={item12} className='rounded-9 p-3'></img>

                                    <div className='bg-dark col-sm-12 col-lg-6 col-md-8 mx-auto rounded-9 car-tim  hover-overlay  border border-muted'>
                                        <a ><h6 className='my-auto  text-light '> <i class="fas fa-clock p-2"></i> <Countdown date={Date.now() + 550000000}></Countdown></h6></a>
                                        {/* hover function for countdown */}
                                        <div class="mask  rounded-9 bgbtt-gra">
                                            <a ><h6 className='my-auto  text-light'><i class="fas fa-clock p-2"></i><Countdown date={Date.now() + 550000000}></Countdown></h6></a>

                                        </div>
                                    </div>


                                    <h5 className=' fw-bolder mx-3 text-light'>The moulten Heart</h5>


                                    <div className=' p-3'> <img class="avatar avatar-32 bg-primary rounded-circle text-white p-1"
                                        src={a1} /><a href="">

                                            <span class="badge rounded-pill badge-notification bg-primary mt-3"><i class="fas fa-check"></i>  </span>
                                            <span className='fw-bolder mx-3'> @breadedwmdr</span>
                                        </a>
                                    </div>

                                </div>
                                <span class="badge rounded-pill badge-notification bg-dark mt-3  p-3 align-self-end  hover-overlay border border-muted" > <i class="fas fa-heart"></i>  60 </span>

                            </div>
                            <div className='container'>
                                <div className='row mt-3 fw-bold text-light'>
                                    <div className='col-6'>
                                        <h6>CURRENTBID</h6>
                                        <h5>140 ETH</h5>

                                    </div>
                                    <div className='col-6'>
                                        <h6>SHARE</h6>
                                        <h6><i class="fab fa-facebook-square "><i class="fab fa-twitter mx-3"></i></i><i class="fab fa-instagram"></i></h6>

                                    </div>

                                </div>

                            </div>






                        </div>

                    </div>
                </div>




                <div className=' col-lg-3 col-sm-1 col-md-6 d-inline-block p-3'>

                    <div className=''>

                        <div className=' bg-dark  border border-muted rounded-9 '>


                            <div className='card    rounded-9 bggtimer '>
                                <div className='card   border border-muted rounded-9 bggtimer'>

                                    <img src={item13} className='rounded-9 p-3'></img>

                                    <div className='bg-dark col-sm-12 col-lg-6 col-md-8 mx-auto rounded-9 car-tim  hover-overlay  border border-muted'>
                                        <a ><h6 className='my-auto  text-light '> <i class="fas fa-clock p-2"></i> <Countdown date={Date.now() + 550000000}></Countdown></h6></a>
                                        {/* hover function for countdown */}
                                        <div class="mask  rounded-9 bgbtt-gra">
                                            <a ><h6 className='my-auto  text-light'><i class="fas fa-clock p-2"></i><Countdown date={Date.now() + 550000000}></Countdown></h6></a>

                                        </div>
                                    </div>


                                    <h5 className=' fw-bolder mx-3 text-light'>The moulten Heart</h5>


                                    <div className=' p-3'> <img class="avatar avatar-32 bg-primary rounded-circle text-white p-1"
                                        src={a1} /><a href="">

                                            <span class="badge rounded-pill badge-notification bg-primary mt-3"><i class="fas fa-check"></i>  </span>
                                            <span className='fw-bolder mx-3'> @breadedwmdr</span>
                                        </a>
                                    </div>

                                </div>
                                <span class="badge rounded-pill badge-notification bg-dark mt-3  p-3 align-self-end  hover-overlay border border-muted" > <i class="fas fa-heart"></i>  60 </span>

                            </div>
                            <div className='container'>
                                <div className='row mt-3 fw-bold text-light'>
                                    <div className='col-6'>
                                        <h6>CURRENTBID</h6>
                                        <h5>140 ETH</h5>

                                    </div>
                                    <div className='col-6'>
                                        <h6>SHARE</h6>
                                        <h6><i class="fab fa-facebook-square "><i class="fab fa-twitter mx-3"></i></i><i class="fab fa-instagram"></i></h6>

                                    </div>

                                </div>

                            </div>






                        </div>

                    </div>
                </div>

                <div className=' col-lg-3 col-sm-1 col-md-6 d-inline-block p-3'>

                    <div className=''>

                        <div className=' bg-dark  border border-muted rounded-9 '>


                            <div className='card    rounded-9 bggtimer '>
                                <div className='card   border border-muted rounded-9 bggtimer'>

                                    <img src={item14} className='rounded-9 p-3'></img>

                                    <div className='bg-dark col-sm-12 col-lg-6 col-md-8 mx-auto rounded-9 car-tim  hover-overlay  border border-muted'>
                                        <a ><h6 className='my-auto  text-light '> <i class="fas fa-clock p-2"></i> <Countdown date={Date.now() + 550000000}></Countdown></h6></a>
                                        {/* hover function for countdown */}
                                        <div class="mask  rounded-9 bgbtt-gra">
                                            <a ><h6 className='my-auto  text-light'><i class="fas fa-clock p-2"></i><Countdown date={Date.now() + 550000000}></Countdown></h6></a>

                                        </div>
                                    </div>


                                    <h5 className=' fw-bolder mx-3 text-light'>The moulten Heart</h5>


                                    <div className=' p-3'> <img class="avatar avatar-32 bg-primary rounded-circle text-white p-1"
                                        src={a1} /><a href="">

                                            <span class="badge rounded-pill badge-notification bg-primary mt-3"><i class="fas fa-check"></i>  </span>
                                            <span className='fw-bolder mx-3'> @breadedwmdr</span>
                                        </a>
                                    </div>

                                </div>
                                <span class="badge rounded-pill badge-notification bg-dark mt-3  p-3 align-self-end  hover-overlay border border-muted" > <i class="fas fa-heart"></i>  60 </span>

                            </div>
                            <div className='container'>
                                <div className='row mt-3 fw-bold text-light'>
                                    <div className='col-6'>
                                        <h6>CURRENTBID</h6>
                                        <h5>140 ETH</h5>

                                    </div>
                                    <div className='col-6'>
                                        <h6>SHARE</h6>
                                        <h6><i class="fab fa-facebook-square "><i class="fab fa-twitter mx-3"></i></i><i class="fab fa-instagram"></i></h6>

                                    </div>

                                </div>

                            </div>






                        </div>

                    </div>
                </div>
                {/* --------card15------- */}

                <div className='col-lg-3 col-sm-1 col-md-6 d-inline-block p-3'>

                    <div className=''>

                        <div className=' bg-dark  border border-muted rounded-9 '>


                            <div className='card    rounded-9 bggtimer '>
                                <div className='card   border border-muted rounded-9 bggtimer'>

                                    <img src={item15} className='rounded-9 p-3'></img>

                                    <div className='bg-dark col-sm-12 col-lg-6 col-md-8 mx-auto rounded-9 car-tim  hover-overlay  border border-muted'>
                                        <a ><h6 className='my-auto  text-light '> <i class="fas fa-clock p-2"></i> <Countdown date={Date.now() + 550000000}></Countdown></h6></a>
                                        {/* hover function for countdown */}
                                        <div class="mask  rounded-9 bgbtt-gra">
                                            <a ><h6 className='my-auto  text-light'><i class="fas fa-clock p-2"></i><Countdown date={Date.now() + 550000000}></Countdown></h6></a>

                                        </div>
                                    </div>


                                    <h5 className=' fw-bolder mx-3 text-light'>Quartz Fantasy</h5>


                                    <div className=' p-3'> <img class="avatar avatar-32 bg-primary rounded-circle text-white p-1"
                                        src={a10} /><a href="">

                                            <span class="badge rounded-pill badge-notification bg-primary mt-3"><i class="fas fa-check"></i>  </span>
                                            <span className='fw-bolder mx-3'> @nickstevens</span>
                                        </a>
                                    </div>

                                </div>
                                <span class="badge rounded-pill badge-notification bg-dark mt-3  p-3 align-self-end  hover-overlay border border-muted" > <i class="fas fa-heart"></i>  60 </span>

                            </div>
                            <div className='container'>
                                <div className='row mt-3 fw-bold text-light'>
                                    <div className='col-6'>
                                        <h6>CURRENTBID</h6>
                                        <h5>2.31 ETH</h5>

                                    </div>
                                    <div className='col-6'>
                                        <h6>SHARE</h6>
                                        <h6><i class="fab fa-facebook-square "><i class="fab fa-twitter mx-3"></i></i><i class="fab fa-instagram"></i></h6>

                                    </div>

                                </div>

                            </div>






                        </div>

                    </div>
                </div>

                {/* --------card16------- */}

                <div className='col-lg-3 col-sm-1 col-md-6 d-inline-block p-3'>

                    <div className=''>

                        <div className=' bg-dark  border border-muted rounded-9 '>


                            <div className='card    rounded-9 bggtimer '>
                                <div className='card   border border-muted rounded-9 bggtimer'>

                                    <img src={item16} className='rounded-9 p-3'></img>

                                    <div className='bg-dark col-sm-12 col-lg-6 col-md-8 mx-auto rounded-9 car-tim  hover-overlay  border border-muted'>
                                        <a ><h6 className='my-auto  text-light '> <i class="fas fa-clock p-2"></i> <Countdown date={Date.now() + 550000000}></Countdown></h6></a>
                                        {/* hover function for countdown */}
                                        <div class="mask  rounded-9 bgbtt-gra">
                                            <a ><h6 className='my-auto  text-light'><i class="fas fa-clock p-2"></i><Countdown date={Date.now() + 550000000}></Countdown></h6></a>

                                        </div>
                                    </div>


                                    <h5 className=' fw-bolder mx-3 text-light'>Crimson Planks</h5>


                                    <div className=' p-3'> <img class="avatar avatar-32 bg-primary rounded-circle text-white p-1"
                                        src={a3} /><a href="">

                                            <span class="badge rounded-pill badge-notification bg-primary mt-3"><i class="fas fa-check"></i>  </span>
                                            <span className='fw-bolder mx-3'> @daGreenGoo</span>
                                        </a>
                                    </div>

                                </div>
                                <span class="badge rounded-pill badge-notification bg-dark mt-3  p-3 align-self-end  hover-overlay border border-muted" > <i class="fas fa-heart"></i>  60 </span>

                            </div>
                            <div className='container'>
                                <div className='row mt-3 fw-bold text-light'>
                                    <div className='col-6'>
                                        <h6>RESERVE PRICE</h6>
                                        <h5>1.36 ETH</h5>

                                    </div>
                                    <div className='col-6'>
                                        <h6>SHARE</h6>
                                        <h6><i class="fab fa-facebook-square "><i class="fab fa-twitter mx-3"></i></i><i class="fab fa-instagram"></i></h6>

                                    </div>

                                </div>

                            </div>






                        </div>

                    </div>
                </div>












            </div>

  
            <div class=" text-center ">

         

            <a href="/"><button className="bnn632-hover bn19">View All Artwork</button></a>

          
 
  </div>






        </div>
    )
}

export default Newest_item
