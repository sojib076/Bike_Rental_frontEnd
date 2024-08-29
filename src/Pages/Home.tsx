import Banner from '@/components/Home/Banner';

import FeaturedBikes from '@/components/Home/FeaturedBikes';

import Testimonials from '@/components/Home/Testimonials';

import Welcome from '@/components/Home/Welcome';
import Contactus from './Contactus';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import HelpSection from '@/components/Home/HelpSection';


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
            <HelpSection
            title="Get Discount"
            description="Get discount on your By spaining the wheel , every time you spin the wheel you get a discount on your next ride"
            buttonText="Spin the wheel
            "
            backgroundImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRufbmc6jOs9dDUUB4h40zC0GUezdVy3QwbZA&s'

            />
        
        </div>
    );
};

export default Home;