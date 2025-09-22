import { useState } from "react";
import Footer from "../../../components/layout/Footer"
import NavBar from "../../../components/layout/NavBar"
import SellerProductsList from "../../seller/components/SellerProductsList";
import SideBar from "../../../components/navigation/SideBar"
import TransactionHistory from "../../users/pages/TransactionHistory";
import UserProfile from "../../users/pages/UserProfile";

export default function UserPage() {
    const [selected, setSelected] = useState("profile"); // por defecto profile
    {/*El valor de "User o Seller debe entrar por parámetros para que se cargue la vista correcta" */}

    return (
        <div>
            <NavBar />
            <section className="flex px-10 py-10">
                <div className="w-[25%]">
                    <SideBar type="seller" onSelect={setSelected} selected={selected} />
                </div>
                <div className="w-[75%]">
                    {selected === "profile" && <UserProfile type="seller" />}
                    {selected === "transactions" && <TransactionHistory />}
                    {selected === "products" && <SellerProductsList />}
                </div>
            </section>
            <Footer />
        </div>
    );
}
