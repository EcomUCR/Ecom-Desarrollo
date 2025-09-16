import { useState } from "react";
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";
import SellerProductsList from "../ui/SellerProductsList";
import SideBar from "../ui/SideBar";
import TransactionHistory from "../ui/TransactionHistory";
import UserProfile from "../ui/UserProfile";

export default function UserPage() {
    const [selected, setSelected] = useState("profile"); // por defecto "profile"

    return (
        <div>
            <NavBar />
            <section className="flex px-10 py-10">
                <div className="w-[25%]">
                    <SideBar type="seller" onSelect={setSelected} selected={selected} />
                </div>
                <div className="w-[75%]">
                    {selected === "profile" && <UserProfile />}
                    {selected === "transactions" && <TransactionHistory />}
                    {selected === "products" && <SellerProductsList />}
                </div>
            </section>
            <Footer />
        </div>
    );
}
