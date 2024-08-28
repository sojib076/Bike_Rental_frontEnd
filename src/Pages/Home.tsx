import Banner from '@/components/Home/Banner';

import FeaturedBikes from '@/components/Home/FeaturedBikes';

import Testimonials from '@/components/Home/Testimonials';

import Welcome from '@/components/Home/Welcome';
import Contactus from './Contactus';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const Home = () => {
    useEffect(() => {
        AOS.init({
          duration: 800,
          easing: "ease-in-out",
          once: false,
        });
      }, []);


    return (
        <div >
            <Banner />
            <FeaturedBikes />
            <Testimonials/>
            <Welcome />
            <Contactus/>
        
        </div>
    );
};

export default Home;