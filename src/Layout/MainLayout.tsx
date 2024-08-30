

import Footer from '@/components/HeaderFooter/Footer';
import Header from '@/components/HeaderFooter/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
        <Header />
            <Outlet />
            <Footer />
        
        </div>
    );
};

export default MainLayout;