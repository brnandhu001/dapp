import React from 'react'
import "./Explore.css"


import Countdown from 'react-countdown';

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

import a1 from "../im/ava.png"


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





import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footerr from '../Footer/Footerr';

function Explore() {


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 10
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 8
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>


            <div className=' '>




                <div className='mx-5 mt-5 '>

                    <h1 class="fw-bold  text-capitalize text-light display-5"><span className='headtextt'>Explore</span>Artworks</h1>




                </div>

                <div className='p-5'>
                    <Carousel responsive={responsive} >





                        <div className='p-1'><button className='p-2  text-light button  rounded-9 btn-block'> <span class="emoji">&#11088; All items</span></button>


                        </div>

                        <div className='p-1'><button className='p-2  text-light button  rounded-9 btn-block'> <span class="emoji">&#128142; Featured</span></button>


                        </div>


                        <div className='p-1'><button className='p-2  text-light button  rounded-9 btn-block'> <span class="emoji">&#128142;</span> 3d Artwor</button>


                        </div>

                        <div className='p-1'><button className='p-2  text-light button  rounded-9 btn-block '> <span class="emoji">&#127750;</span>illustrations</button>


                        </div>

                        <div className='p-1'><button className='p-2  text-light button  rounded-9 btn-block '> <span class="emoji">&#127918;</span>Gaming</button>


                        </div>




                        <div className='p-1'><button className='p-2  text-light button  rounded-9   btn-block'><span class="emoji">&#128247;</span> photography</button>


                        </div>

                        <div className='p-1'><button className=' p-2  text-light button  rounded-9   btn-block'><span class="emoji">&#9830;</span> MotionGraphics</button>


                        </div>

                        <div className='p-1'><button className='p-2  text-light button  rounded-9   btn-block'><span class="emoji">&#128163;</span> pop culture</button>


                        </div>

                        <div className='p-1'><button className=' p-2  text-light button  rounded-9   btn-block'><span class="emoji">&#128516;</span> Memes</button>


                        </div>
                        <div className='p-1'><button className='p-2  text-light button  rounded-9   btn-block'><span class="emoji">&#128691;</span> NFSF</button>


                        </div>

                        <div className='p-1'><button className=' p-2  text-light button  rounded-9   btn-block'><span class="emoji">&#129309;</span> Looping artwork</button>


                        </div>



































                    </Carousel>

                </div>

                <div className='mx-5 '>
                    <div className='col-lg-12 border border-dark rounded-9  p-4'>
                        <div className='row'>
                            <div className='col-lg-2'>


                                <div class=" ">

                                    <select class="custom-select  btn  button  rounded-9 text-light fw-bolder bg-dark col-lg-12" id="inputGroupSelect03">

                                        <option selected value="1">Newest to Oldes</option>
                                        <option value="oldest-to-newest">Oldest to Newest</option>
                                        <option value="3">Most Popular</option>

                                    </select>
                                </div>

                            </div>

                            <div className='col-lg-2'>


                                <div class=" ">

                                    <select class="custom-select  btn  button  rounded-9 text-light fw-bolder bg-dark border col-lg-12" id="inputGroupSelect03">

                                        <option selected value="Auctions Only">Auctions Only</option>
                                        <option value="Buy Now">Buy Now</option>
                                        <option value="all-artworks">All Artworks</option>

                                    </select>
                                </div>

                            </div>

                            <div className='col-lg-2'>


                                <div class=" ">

                                    <select class="custom-select  btn  button  rounded-9 text-light fw-bolder bg-dark  col-lg-12" id="inputGroupSelect03">

                                        <option value="verified-creators" selected>Verified Creators</option>
                                        <option value="all-creators">All Creators</option>
                                    </select>
                                </div>

                            </div>

                            <div className='col-lg-2'>


                                <div class=" ">

                                    <select class="custom-select  btn  button  rounded-9 text-light fw-bolder bg-dark col-lg-12" id="inputGroupSelect03">
                                        <option value="ending-soon" selected>Ending Soon</option>
                                        <option value="anytime">Anytime</option>

                                    </select>
                                </div>

                            </div>

                            <div className='col-lg-2'>


                                <div class=" ">

                                    <select class="custom-select  btn  button  rounded-9 text-light fw-bolder bg-dark col-lg-12" id="inputGroupSelect03">

                                        <option value="lowest-to-highest" selected>Lowest to Highest $</option>
                                        <option value="highest-to-lowest">Highest to Lowest $</option>

                                    </select>
                                </div>

                            </div>



                            <div className='col-lg-2'>
                                <button type="submit" className="  col-lg-8  text-light rounded-9 btn myButton1">Filter</button>
                            </div>



                        </div>






                    </div>
                </div>











            </div>

            {/* cards */}


            <div>

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


                <div class=" text-center fw-bolder">



                    <a href='' className='mx-2'>01</a>
                    <a href='' className='mx-2'>02</a>
                    <a href='' className='mx-2'>03</a>
                    <a href='' className='mx-2'>04</a>
                    <a href='' className='mx-2'>...</a>
                    <a href='' className='mx-2'>16</a>
                    <a href='' className='mx-2'>Next</a>


                </div>







            </div>

           
            <div className='my-5'>

                <Footerr />

            </div>

        </div>
    )
}

export default Explore
