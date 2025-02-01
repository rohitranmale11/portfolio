
import MarqueeComponent from '@/components/user-view/MarqueeComponent'
import BannerNew from '../../components/user-view/BannerNew'
import Filter from '../../components/user-view/Filter'
import Footer from '../../components/user-view/Footer'
import Navbar from '../../components/user-view/Navbar'
//import Review from '../../components/user-view/Review'
import Stat from '../../components/user-view/Stat'
import React, { useState } from 'react'


const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen]=useState(false);
  return (
    <div>
        <Navbar  isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        <BannerNew/>
       
        <Filter/>
        <Stat/>
        <MarqueeComponent />
        <Footer/>
      
    </div>
  )
}

export default HomePage
