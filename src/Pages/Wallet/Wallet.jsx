


import React from 'react';

import './wallet.css';
import meta from "../im/meta.svg"
import torus from "../im/torus.svg"
import fort from "../im/fort.svg"
import walletconnect from "../im/walletconnect.svg"

import { useWallet, UseWalletProvider } from 'use-wallet'
import { FortmaticConnector } from '@web3-react/fortmatic-connector'
import WalletConnect from '@walletconnect/client';


import { auth } from "../Login/Fire"


import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Signup, useAuth, Logout, Login, firebaseConfig } from '../Login/Fire'
import { useRef, useState,useEffect } from 'react'
import p1 from "../im/profile-cover-1.png"



import {useHistory } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth";



function Appp() {


  
  const [user, loading, error] = useAuthState(auth);


  const [loadingg, setloading] = useState(false)

  const currentUser = useAuth();


  const history=useHistory()



  
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



  const wallet = useWallet()
  const blockNumber = wallet.getBlockNumber()
  return (

    <div>
      {wallet.status === 'connected' ? (
        <div className=' p-5'>




          <div className='container p-5 text-center bg- black'>
            <div>
             <h1 className='text-success'>Account: {wallet.account}</h1> 
            </div>
            <div>
            <h1 className='text-primary'>Balance: {wallet.balance}</h1> </div>
            <button className='btn  btn-danger' onClick={() => wallet.reset()}>disconnect</button>
          </div>




        </div>

      ) : (
        <div className="maincontainer  ">
          <div class="container-fluid ">
            <div class="row no-gutter bg-#121419">

              <div class="col-md-3 d-none d-md-flex bg-image"></div>

              <div class="col-md-9  ">
                <div class="login d-flex align-items-center py-1">

                  <div class="container  ">
                    <div class="row  ">
                      <div class="col-lg-8 col-xl-6  align-self-start mb-11 ">
                        <h1 className='font-weight-bold text-white '>sign in with your wallet</h1>
                        <h5 className='text-muted p-1'>Sign in with one of available wallet providers or create a new wallet.<span className='text-primary'>What is a wallet?</span> </h5>


                        <div onClick={() => wallet.connect()} class="col-lg-10  col-md-12  text-center d-flex justify-content-between mt-4 bg-primary rounded-9 border border-1">

                          <div className=' p-lg-2 '>
                            <img src={meta} alt="placeholder 960" class="img-fluid mb-2   ml-2 d-inline px-md-2" />
                            <h4 className='d-inline px-lg-5  px-md-1  text-white   font-weight-bolder '>sign with  metamask</h4>


                          </div>
                        </div>
                        <div onClick={() => wallet.connect('torus')} class=" col-lg-10  col-md-12  text-center d-flex justify-content-between mt-4 border border-1 rounded-9">

                          <div className=' p-lg-2 '>
                            <img src={torus} alt="placeholder 960" class="img-fluid  d-inline mb-2 px-md-2" />
                            <h4 className='d-inline px-lg-5  px-md-1   text-white  font-weight-bolder '>Torus</h4>


                          </div>
                        </div>
                        <div onClick={() => wallet.connect('fortmatic')} class=" col-lg-10 col-md-12  text-center d-flex justify-content-between mt-4 border border-1 rounded-9 ">

                          <div className=' p-lg-2 '>
                            <img src={fort} alt="placeholder 960" class="img-fluid mb-2 d-inline px-md-2" />
                            <h4 className='d-inline px-lg-5  px-md-1   text-white  font-weight-bolder'> Fortmatic</h4>


                          </div>
                        </div>
                        <div onClick={() => wallet.connect('walletconnect')} class=" col-lg-10 col-md-12 text-center d-flex  mt-4 border border-1 rounded-9">

                          <div className='  p-lg-2  '>
                            <img src={walletconnect} alt="placeholder 960" class="img-fluid mb-2 d-inline px-md-2 px-sm-2" />
                            <h4 className='d-inline px-lg-5  px-md-1  text-white  font-weight-bolder '>Mobile wallet</h4>


                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}









// Wrap everything in <UseWalletProvider />
export default () => (
  <UseWalletProvider
    chainId={1}
    connectors={{
      // This is how connectors get configured
      portis: { dAppId: 'my-dapp-id-123-xyz' },

      fortmatic: new FortmaticConnector({ apiKey: 'pk_live_F41C656E428A76F3', chainId: 4 }),
      walletconnect: { rpc: { 1: 'https://rpc-mainnet.maticvigil.com/' } },
    }}
  >
    <Appp />
  </UseWalletProvider>
)
