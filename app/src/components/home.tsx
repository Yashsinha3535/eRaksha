import React from 'react'
import "../styles/homePage.css"
import Cartoon from '../Cartoon-Web.png'

const home = () => {
  return (
    <>
    
        <div className='home_TEXT'>
            <h1><span className='home_TEXT_TITLE_HI'>Hi</span> There!</h1>
            <p>As the Technologies are being evolved and New Devices are also being innovated, Threats has been evolving day by day too. <br/> You don't know, you might be watching YouTube or Playing games on your Devices meanwhile, someone with <span style={{color: '#ff0000'}}>vigilantic</span> mind might be<br/>hacking your vulnerable device in the background without you even knowing it's happening. Or in the other hand, You can get <br/>a support call from a company regarding your company but it might be a scam call trying to steal your account. So it's <br/>important to know your threats in the Cyber World</p>

            <p><br />To Take Your First Step Into Protecting Yourself And <br/>Your Family Members from These Dangerous Threats <br/></p>
            <h2>Click On The Button Below To Directly Head to Guide System Or Continue to Scroll to Explore More!</h2>
            <a href='/'>READ THE GUIDE</a>


          <div className="home_cartoon">
            <img src={Cartoon} alt="" />
          </div>



        </div>




        



    </>
  )
}

export default home