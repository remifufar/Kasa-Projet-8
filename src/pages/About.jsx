import React from 'react'
import Banner from '../components/Banner/Banner'
import CollapseAbout from '../components/Collapse/CollapseContent'

import imgAboutBanner from '../Assets/ImgAbout.png'
function About() {
  return (
    <div>
      <Banner 
       src={imgAboutBanner}
      
      />
      <CollapseAbout/>
    </div>
  )
}

export default About
