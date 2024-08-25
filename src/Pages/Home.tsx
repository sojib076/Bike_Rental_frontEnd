import Banner from '@/components/Home/Banner';

import FeaturedBikes from '@/components/Home/FeaturedBikes';

import Testimonials from '@/components/Home/Testimonials';

import Welcome from '@/components/Home/Welcome';
import Contactus from './Contactus';


const Home = () => {


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