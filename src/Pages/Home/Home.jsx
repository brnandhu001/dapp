import React from 'react';
import './Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import s1 from "../im/slider/s1.png"
import s2 from "../im/slider/s2.png"
import s3 from "../im/slider/s3.png"

import Countdown from 'react-countdown';
import Featereditem from './Featereditem';
import Top_creaters from './Top_creaters';
import Newest_item from './Newest_item';
import Featured_Creators from './Featured_Creators';
import Latest_News from './Latest_News';
import Footerr from '../Footer/Footerr';




function Home() {




    return (
<header>
<div className=''>
        <div className='mt-5'>
            <div id="carouselExampleCaptions" class="carousel slide" data-mdb-ride="carousel">
                <div class="carousel-indicators">
                    <button
                        type="button"
                        data-mdb-target="#carouselExampleCaptions"
                        data-mdb-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-mdb-target="#carouselExampleCaptions"
                        data-mdb-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-mdb-target="#carouselExampleCaptions"
                        data-mdb-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div class="carousel-inner p-3">
                    <div class="carousel-item active">
                        <div className='row'>
                            <div className='col-2 bgg-caro-l-1'>

                            </div>
                            <div className='col-8'>
                                <img
                                    src={s1}
                                    class="d-block w-100 mx-auto"
                                    alt="Exotic Fruits"
                                />
                                <div class="carousel-caption d-none d-md-block">
                                    <div className='container '>
                                        <div className='row'>
                                            <div className='col-6'></div>
                                            <div className='col-6'>
                                                <div className='    mb-5'>
                                                    <div className='text-start fw-bold '>
                                                        <h5>well come to hostwire</h5>
                                                        <h1 class="display-5 fw-bolder">Discover the <br></br>Best art work</h1>
                                                        <button className='btn  rounded-9 bgb text-light border'>Explore now </button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                    </div>

                                </div>

                            </div>
                            <div className='col-2 bgg-caro-r-1'>

                            </div>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className='row'>
                            <div className='col-2 bgg-carol-l-2'>

                            </div>
                            <div className='col-8'>
                                <img
                                    src={s2}
                                    class="d-block w-100 mx-auto rounded-9"
                                    alt="Exotic Fruits"
                                />
                                <div class="carousel-caption d-none d-md-block">
                                    <div className='container  '>
                                        <div className='row mb-'>
                                            <div className='col-8 '>
                                            <button className='btn btn-dark btmm  rounded-9'> @DexterStack</button>


                                                <h1 className='display-3 fw-bolder'>Breathing Nature</h1>
                                                <div className='row'>
                                                    <div className='col-6 '>
                                                        <h5 className=''>CURRENTBID</h5>
                                                        <h3 className='fw-bolder '> 2.31 ETH</h3>


                                                    </div>
                                                    <div className='col-6'>
                                                        <h5 className=''>AUCTIONENDINGIN</h5>
                                                        <h3 className='fw-bolder '> <Countdown date={Date.now() + 550000000}></Countdown></h3>


                                                    </div>

                                                </div>
                                            </div>
                                            <div className='col-4  align-self-end'>
                                                <button className='btn  rounded-9 bgb text-light border'>Explore now </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className='col-2 bgg-caro-r-2'>

                            </div>

                        </div>
                    </div>
                    <div class="carousel-item ">
                        <div className='row'>
                            <div className='col-2 bgg-caro-l-3'>

                            </div>
                            <div className='col-8'>
                                <img
                                    src={s3}
                                    class="d-block w-100 mx-auto rounded-9"
                                    alt="Exotic Fruits"
                                />
                                <div class="carousel-caption d-none d-md-block">
                        
                                    <div className='container  '>
                                        <div className='row mb-4'>
                                       
                                            <div className='col-8 align-self-start'>
                                            <button className='btn btn-dark btmm  rounded-9'> @DexterStack</button>




                                     





                                                <h1 className='display-3 fw-bolder'>Lost in illustration</h1>
                                                <div className='row'>
                                                    <div className='col-6 '>
                                                        <h5 className=''>CURRENTBID</h5>
                                                        <h3 className='fw-bolder '> 2.31 ETH</h3>


                                                    </div>
                                                    <div className='col-6'>
                                                        <h5 className=''>AUCTIONENDINGIN</h5>
                                                        <h3 className='fw-bolder '> <Countdown date={Date.now() + 550000000}></Countdown></h3>


                                                    </div>

                                                </div>
                                            </div>
                                            <div className='col-4  align-self-end'>
                                                <button className='btn  rounded-9 bgb text-light border '>Explore now </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className='col-2 bgg-caro-r-3'>

                            </div>

                        </div>

                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-mdb-target="#carouselExampleCaptions"
                    data-mdb-slide="prev"
                >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next "
                    type="button"
                    data-mdb-target="#carouselExampleCaptions"
                    data-mdb-slide="next"
                >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <Featereditem/>


            <Top_creaters/>

            
            <Newest_item/>

            <Featured_Creators/>

            <Latest_News/>

            <Footerr/>




        </div >
        </div>
        </header>



    )
}

export default Home
