import Footer from "./Footer"
import Header from "./Header"
import Head from "next/head"
import MobileHeader from "./MobileHeader"
import { useWindowSize } from "../utils/helpers"
import React, { useState, useEffect } from 'react'

export default function Layout({ children }) {
  const size = useWindowSize()
  const [variable , setVariable] = useState(true)  
  useEffect(()=>{
    const section = document.querySelector('section')
    setTimeout(() => {
      section.classList.remove('scale-in')
    }, 3000);  
  })  
  function abortAnimation(e){
    e.preventDefault()
    if(variable===false)return 
    setVariable(false)
  }
    return (
      <>
        <Head>
          <meta property="og:description" 
                content="Mon portfolio." />
          <meta property="og:image" content="/logo.svg"/>
          <meta property="og:url" content="https://portfoliorb.herokuapp.com" />
        </Head>
        {/* {variable?<Lines/>:null} */}
        {size.width>800?
        <Header />:
        <MobileHeader/>}
        <main className="bg-gray-100">{children}</main>
        <Footer/>
      </>
    )
  }