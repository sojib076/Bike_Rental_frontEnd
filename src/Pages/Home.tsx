import Banner from '@/components/Home/Banner';

import FeaturedBikes from '@/components/Home/FeaturedBikes';

import Testimonials from '@/components/Home/Testimonials';

import Welcome from '@/components/Home/Welcome';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

import NewBikesAnnouncement from '@/components/Home/NewBikesAnnouncement';
import CallToAction from '@/components/Home/CallToAction';



const Home = () => {
    useEffect(() => {
        AOS.init({
          duration: 800,
          easing: "ease-in-out",
          once: false,
        });
      }, []);


    return (
        <div
          className="overflow-x-hidden 
      bg-gray-100 dark:bg-gray-800




           
          "
        >
            <Banner />
            <FeaturedBikes />
            <NewBikesAnnouncement />
              <Welcome />
            <Testimonials/>
          
         
      

      
  
              <CallToAction/>
        </div>
    );
};

export default Home;