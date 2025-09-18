import { IconArrowBackUp } from "@tabler/icons-react";
import ButtonComponent from "../ui/ButtonComponent";
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";
import ProductCard from "../ui/ProductCard";

import audifonos from "../../img/resourcesRaul/audifonos.jpg";

export default function CrudProductPage() {
    return (
        <div>
            <NavBar />
            <section className="flex flex-col mx-10 font-quicksand gap-5 my-10">
                <div className="flex items-center gap-5">
                    <ButtonComponent icon={<IconArrowBackUp />} text="Volver" style="flex text-sm px-2 items-center gap-2 rounded-full" /*onClick={() => window.history.back()}*/ />{/*Creo que esto se puede utilizar para volver a la ultima ventana, pero no estoy seguro*/}
                    <h1 className="text-3xl font-bold">Nuevo Producto</h1>
                    <p className="text-2xl">-</p>
                    <p className="text-xl"> Unstable Games</p>
                </div>
                <form action="">
                    <div className="mx-30 flex flex-col gap-5 py-10">
                        <div className="w-full flex justify-between">
                            <input type="text" name="" id="" placeholder="Nombre" className="bg-main-dark/20 rounded-2xl p-2" />
                            <input type="text" name="" id="" placeholder="Precio" className="bg-main-dark/20 rounded-2xl p-2" />
                            <input type="text" name="" id="" placeholder="Precio de oferta" className="bg-main-dark/20 rounded-2xl p-2" />
                        </div>
                        <div className="w-full flex justify-between">
                            <input placeholder="Categoria" type="text" name="" id="" className="bg-main-dark/20 rounded-2xl p-2" />
                            <input type="number" name="" id="" placeholder="Stock" className="bg-main-dark/20 rounded-2xl p-2" />
                            <input type="text" placeholder="Estado" id="" className="bg-main-dark/20 rounded-2xl p-2" />
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="flex flex-col gap-5 mx-30">
                            <textarea placeholder="Sobre este producto" name="" id="" cols={30} rows={5} className="bg-main-dark/20 rounded-xl px-3 py-2" />
                            <input type="image" name="" id="" placeholder="Imagen" className="bg-main-dark/20 rounded-2xl p-2" />
                        </div>
                        <div className="flex flex-col items-center justify-center w-1/2 mt-10">
                            <label htmlFor="" className="flex items-center gap-2">Destacar producto
                                <input placeholder="" type="checkbox" name="" id="" />
                            </label>
                            <ProductCard shop="Razer" title="Audifonos Razer x Pokemon | Edición Gengar" price="100.000" discountPrice="50.000" img={audifonos} edit={false} />
                            <div className="flex flex-col gap-5 py-10 w-full">
                                <ButtonComponent text="Guardar" style="w-full text-white text-lg p-2 items-center rounded-full bg-contrast-main" />
                                <ButtonComponent text="Eliminar producto" style="w-full text-white text-lg p-2 items-center rounded-full bg-contrast-secondary" />
                                <ButtonComponent text="Cancelar" style="w-full text-white text-lg p-2 items-center rounded-full bg-main-dark" />

                            </div>
                        </div>
                    </div>
                </form>
            </section >
            <Footer />
        </div >
    )
}