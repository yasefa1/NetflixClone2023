import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyrightIcon from '@mui/icons-material/Copyright';
import "./footer.css"
function Footer() {
  return (
    <div className='footer_outer_container'>
      
    <div className='footer_inner_container'>

      <div className='footer_icon'>
        <ul>
          <li>< FacebookIcon/></li>
          
          <li><InstagramIcon/></li>
          
          <li><YouTubeIcon /></li>
        </ul>

      </div >

      <div className='footer_data'>
        
      <div >
        <ul>
          <li>Audio Description</li>
          
          <li>Investor Relation</li>
          <li>Privacy</li>
          
          <li>Contact Us</li>
          

        </ul>

      </div>


      <div >
        <ul>
          <li>Help Center</li>
          
          <li>Jobs</li>
          <l>Legal Notices</l>
          <li>Do Not Sell or Share My personal </li>
        </ul>

      </div>

      <div >
        <ul>
          <li>Media Center</li>
          <li>Terms of User</li>
          <li>Corporate Information</li>
          
         
        </ul>
      </div>
      
      <div >
        <ul>
          <li>Gift Card</li>
          <li>Netflix Shop</li>
          <li>Cookies Preferences</li>
          <li>Ad Choices</li>
          
        </ul>
      </div>


      </div>

      <div className='service_code'>
        <p>Service Code</p>
      </div>
      
      <div className='coppy_write'>
       <CopyrightIcon/> 1997-2024 Netflix,INC.
      </div>
    </div>
    </div>
  )
}

export default Footer