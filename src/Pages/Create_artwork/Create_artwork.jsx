import React from 'react'
import './creater.css'


import { auth } from "../Login/Fire"


import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Signup, useAuth, Logout, Login, firebaseConfig } from '../Login/Fire'
import { useRef, useState, useEffect } from 'react'
import p1 from "../im/profile-cover-1.png"



import { useHistory } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth";
import Footerr from '../Footer/Footerr';



import { connectWallet, getCurrentWalletConnected, mintNFT } from "../../utils/interact";










function Create_artwork(props) {


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




    // minting

    //State variables
    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [url, setURL] = useState("");

    useEffect(async () => { //TODO: implement

    }, []);

    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet();
        setStatus(walletResponse.status);
        setWallet(walletResponse.address);
    };

    const onMintPressed = async () => {
        const { status } = await mintNFT(url, name, description);
        setStatus(status);
    };

    function addWalletListener() {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
                if (accounts.length > 0) {
                    setWallet(accounts[0]);
                    setStatus("👆🏽 Write a message in the text-field above.");
                } else {
                    setWallet("");
                    setStatus("🦊 Connect to Metamask using the top right button.");
                }
            });
        } else {
            setStatus(
                <p>
                    {" "}
                    🦊{" "}
                    <a target="_blank" href={`https://metamask.io/download.html`}>
                        You must install Metamask, a virtual Ethereum wallet, in your
                        browser.
                    </a>
                </p>
            );
        }
    }


    useEffect(async () => {
        const { address, status } = await getCurrentWalletConnected();
        setWallet(address)
        setStatus(status);
        addWalletListener();
    }, []);




















    return (


        <div   >





            <div className='row p-4'   >
                <div className='col-lg-3 bg-#121419'>


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
                    <div class="fw-bold  text-capitalize  mt-5">
                        
                    <button id="walletButton"  className="bnn632-hover bn19 " onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>

                        <h1 class="fw-bold  text-capitalize text-light "><span className='headtextt'>Upload</span> Artwork</h1>
                        <h4 class="fw-bold  text-capitalize  text-light mt-5">Upload & Preview</h4>

                        <h6 class="fw-bold  text-capitalize  text-light mt-5">Upload File</h6>
                        <div className=''>
                            <div className='row  justify-content-around'>
                                <div className='col-lg-8  '>

                                    <h6 class="fw-bold  text-capitalize  text-light mt-5">Upload File</h6>
                                    <div className='text-center rounded-9 border-dark bor '>

                                        <h4 class="fw-bold  text-capitalize  text-light mt-5"><i class="fas fa-upload "></i></h4>

                                        <h6 class="fw-bold  text-capitalize  text-light ">Max 120MB, PNG, JPEG, MP3, MP4</h6>
                                        {/* <a href="/"><button className="bnn632-hover bn19">Browse files</button></a> */}


                                        <input type="file" id="img" name="img" accept="image/*" class=" btn btn-primary rounded-9 mb-5 " aria-describedby="inputGroupFileAddon04" aria-label="Upload" onChange={(event) => setURL(event.target.value)} />



                                    </div>




                                </div>
                                <div className='col-lg-3 '>
                                    <h6 class="fw-bold  text-capitalize  text-light mt-5">Upload preview</h6>
                                    <div className='text-center rounded-9 border-dark border   hh'  >



                                    </div>



                                </div>

                            </div>

                        </div>

                        <div>

                            <h4 class="fw-bold  text-capitalize  text-light mt-5">Purchase Type</h4>
                            {/* <div className='row   '>
                                <div className='col-lg-4   mt-5 '>
                                    <div className='col-12 border border-3 border-primary rounded-9 p-3 '>

                                        <h6 className='mt-2' >
                                            <a href=""><i class="fas fa-dollar-sign mx-3"></i>Fixted Price</a>
                                        </h6>

                                        <h6 className='mx-5 text-light'>
                                            Set a fixed price for people to buy your work instantly
                                            Open for Bids
                                        </h6>
                                    </div>
                                </div>
                                <div className='col-lg-4   mt-5 '>
                                    <div className='col-12 border border-dark rounded-9 p-3'>

                                        <h6 className='mt-2' >
                                            <a href=""><i class="far fa-clock mx-3"></i>Timed Auction</a>
                                        </h6>

                                        <h6 className='mx-5 text-light'>
                                            Set a fixed price for people to buy your work instantly
                                            Open for Bids
                                        </h6>
                                    </div>
                                </div>
                                <div className='col-lg-4   mt-5 '>
                                    <div className='col-12 border  border-dark  rounded-9 p-3'>

                                        <h6 className='mt-2' >
                                            <a href=""><i class="far fa-comment-alt mx-3"></i>Open for aBids</a>
                                        </h6>

                                        <h6 className='mx-5 text-light'>

                                            Set a fixed price for people to buy your work instantly
                                            Timed Auction

                                        </h6>
                                    </div>
                                </div>




                            </div> */}




                            {/* <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked />

                            <label class="col-lg-4   mt-5" for="option1">
                                <div className='   '>
                                    <div className='col-11 border rounded-9 p-3 '>

                                        <h6 className='mt-2' >
                                           <a href=""><i class="fas fa-dollar-sign mx-3"></i>Fixted Price</a>
                                        </h6>

                                        <h6 className='mx-5 text-light'>
                                            Set a fixed price for people to buy your work instantly
                                            Open for Bids
                                        </h6>
                                    </div>
                                </div></label>

                            <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" checked />
                            <label class="col-lg-4  mt-5" for="option2">
                                <div className='   '>
                                    <div className='col-11 border border-dark rounded-9 p-3 '>

                                        <h6 className='mt-2' >
                                            <a href=""><i class="fas fa-dollar-sign mx-3"></i>Fixted Price</a>
                                        </h6>

                                        <h6 className='mx-5 text-light'>
                                            Set a fixed price for people to buy your work instantly
                                            Open for Bids
                                        </h6>
                                    </div>
                                </div></label>
                            <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" checked />
                            <label class="col-lg-4  mt-5" for="option3">
                                <div className='   '>
                                    <div className='col-11 border  border-dark  rounded-9 p-3'>

                                        <h6 className='mt-2' >
                                            <a href=""><i class="far fa-comment-alt mx-3"></i>Open for aBids</a>
                                        </h6>

                                        <h6 className='mx-5 text-light'>

                                            Set a fixed price for people to buy your work instantly
                                            Timed Auction

                                        </h6>
                                    </div>
                                </div>
                            </label> */}
                            <div className='row'>
                                <div className='col-lg-4 '>
                                    <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined1" autocomplete="off" />
                                    <label class="btn btn-outline-primary col-lg-12 rounded-9 mt-3" for="danger-outlined1">


                                        <h6 className='text-start text-light' >
                                            <h6><i class="fas fa-dollar-sign mx-3"></i>Fixted Price</h6>
                                        </h6>

                                        <h6 className='text-start text-light mx-4'>

                                            <h6 className='p-1'>Set a fixed price for people to buy your work instantly
                                                Timed Auction</h6>

                                        </h6>
                                    </label>

                                </div>

                                <div className='col-lg-4 '>
                                    <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined2" autocomplete="off" />
                                    <label class="btn btn-outline-primary col-lg-12 rounded-9 mt-3" for="danger-outlined2">


                                        <h6 className='text-start' >
                                            <h6 className='text-light'><i class="far fa-clock mx-3"></i>Timed Auction</h6>
                                        </h6>

                                        <h6 className='text-start text-light mx-4'>

                                            <h6 className='p-1'>Set a fixed price for people to buy your work instantly
                                                Timed Auction</h6>

                                        </h6>
                                    </label>

                                </div>
                                <div className='col-lg-4 '>
                                    <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined3" autocomplete="off" />
                                    <label class="btn btn-outline-primary col-lg-12 rounded-9 mt-3" for="danger-outlined3">






                                        <h6 className='text-start text-light' >
                                            <h6><i class="far fa-comment-alt mx-3"></i>Open for aBids</h6>
                                        </h6>

                                        <h6 className='text-start text-light mx-4'>

                                            <h6 className='p-1'>Set a fixed price for people to buy your work instantly
                                                Timed Auction</h6>

                                        </h6>
                                    </label>

                                </div>


                            </div>
                        </div>
                        {/* main details */}

                        <div>

                            <h4 class="fw-bold  text-capitalize  text-light mt-5">Main Details</h4>


                            <div className='row text-light'>

                                <div className='col-lg-4   mt-5 '>
                                    <div className='col-lg-12  '>
                                        <label for="">Artwork Name</label>

                                        <input type="text" id="fname" name="fname" class="col-12 bgg text-light p-3 rounded-9 border border-dark" placeholder='Breathing Nature' onChange={(event) => setName(event.target.value)} />



                                        {/* <input type="text" className='col-12 bg-black text-light p-3 rounded-9 border border-dark ' id="" name="fname" value="Breathing Nature" /> */}
                                    </div>
                                </div>


                                <div className='col-lg-4   mt-5 '>
                                    <div className='col-12  '>

                                        <label for="">Price</label>

                                        <input type="number" id="typeNumber" class="col-12 bgg text-light p-3 rounded-9 border border-dark" step="0.5" placeholder='0' min="0" />



                                    </div>
                                </div>
                                <div className='col-lg-4   mt-5 '>

                                    <div class="form-group text-light">
                                        <label for="exampleFormControlSelect1">

                                            blockchain</label>
                                            <br></br>
                                        <select class=" col-lg-12 bgg rounded-9 p-3 border border-dark text-light " id="exampleFormControlSelect1">

                                            <option className='bgg'>ethereum</option>
                                            <option className='bgg'>polygon</option>


                                        </select>
                                    </div>





                                </div>






                            </div>



                            <div class="form-outline mt-5">
                                <label class="form-label text-light" for="textAreaExample"><h4>Description</h4></label>
                                <textarea class="form-control border rounded-9 border-dark text-light p-3" id="textAreaExample" rows="4" onChange={(event) => setDescription(event.target.value)}></textarea>




                            </div>

                            <a><button className="bnn632-hover bn19 " onClick={onMintPressed}>Create iteam</button></a>

                            <p id="status">
                                {status}
                            </p>

                        </div>

                    </div>
                </div>


            </div>

            <Footerr />



        </div >
    )
}

export default Create_artwork


