import { useState } from 'react';
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";
import NavBarSeller from "../ui/NavBarSeller";

import banner from '../../img/resourcesRaul/banner.png';
import HomeSeller from "../ui/SellerHomeComponent";
import SellerOffers from "../ui/SellerOffersComponent";
import SellerContactComponent from "../ui/SellerContactComponent";
import SellerReviewsComponent from '../ui/SellerReviewsComponent';

export default function SellerPage() {
    const [view, setView] = useState<'home' | 'offers' | 'contact' | 'reviews'>('home');

    return (
        <div className="flex flex-col w-full">
            <NavBar />
            <header className="flex flex-col justify-center w-full px-5 py-5 gap-3">
                <img src={banner} alt="" className="w-full h-auto object-cover rounded-2xl" />
                <NavBarSeller setView={setView} currentView={view} />
            </header>

            {view === 'home' && <HomeSeller />}
            {view === 'offers' && <SellerOffers />}
            {view === 'contact' && <SellerContactComponent />}
            {view === 'reviews' && <SellerReviewsComponent />}

            <Footer />
        </div>
    );
}
