import Banner from '@/components/Home/Banner';

import FeaturedBikes from '@/components/Home/FeaturedBikes';
import HelpSection from '@/components/Home/HelpSection';
import Testimonials from '@/components/Home/Testimonials';

import Welcome from '@/components/Home/Welcome';


const Home = () => {


    return (
        <div >
            <Banner />
            <FeaturedBikes />
            <Testimonials/>
            <Welcome />
            <HelpSection
                backgroundImage="https://autobike.templaza.net/wp-content/uploads/2023/05/paul-kansonkho-1920.jpg"
                title="FREE SERVICE FOR PREMIUM MEMBERS"
                description="If someone’s not there to take your call, you can wait and the automated voice will prompt you to leave a message. We will get back to you as soon as possible."
                buttonText="Contact Us"
                buttonLink="/home"
                contactNumber="(+012) 33 5566 8888"
            />
        </div>
    );
};

export default Home;