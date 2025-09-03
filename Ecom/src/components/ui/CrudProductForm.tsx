import { Button } from "./button";
import backArrowIcon from '../../img/backArrow.png';
import uploadIcon from '../../img/UploadIcon.png';
import mainProductImage from '../../img/sombrasClaro.png';
import image1 from '../../img/productSide.png';
import image2 from '../../img/sombrasFront.png';
import image3 from '../../img/productFar.png';

const CrudProductForm = () => {
    return (
        <div className=" p-8 ">
            <div className=" p-8">


                <div className="flex items-center space-x-2 text-gray-700 mb-6">
                    <Button className="flex items-center bg-white border px-3 py-2 rounded-md shadow-sm text-black">
                        <img src={backArrowIcon} alt="Volver" className="w-4 h-4 mr-2" />
                        <span className="text-black">Volver</span>
                    </Button>

                    <h1 className="text-4xl font-semibold border-b-2 border-purple-main">
                        Nuevo Producto
                    </h1>
                    <span className="text-black text-2xl "> - Unstable Games</span>
                </div>

                <div className="flex justify-between">

                    <div className="w-1/2 pr-12 flex flex-col space-y-6">

                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Nombre*</label>
                            <input
                                type="text"
                                placeholder="Criaturas de las sombras-Expansión roca fundida"
                                className="w-full px-4 py-3 border rounded-md text-gray-700"
                            />
                        </div>


                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Categorías*</label>
                            <div className="flex items-center space-x-2 w-2/3">
                                <select className="flex-1 px-3 py-2 border rounded-md text-gray-700">
                                    <option>Juegos</option>
                                    <option>Gaming</option>
                                    <option>Deportes</option>
                                    <option>Hogar</option>
                                    <option>Comida</option>
                                    <option>Ropa</option>
                                    <option>Herramientas</option>
                                    <option>Decoración</option>
                                    <option>Otros</option>
                                </select>
                                <button className="bg-gray-200 text-gray-700 p-2 rounded-md">+</button>
                            </div>
                        </div>


                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Sobre este producto*</label>
                            <textarea
                                rows={5}
                                className="w-full px-3 py-2 border rounded-md text-gray-700"
                                placeholder="Esta expansión de Gaming Shadows presenta 2 nuevos personajes..."
                            ></textarea>
                        </div>


                        <div className="flex flex-col w-full mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2 self-start">Imagen*</label>
                            <label
                                htmlFor="file-upload"
                                className="bg-gray-100 rounded-md p-20 flex flex-col items-center justify-center cursor-pointer w-full"
                            >
                                <img src={uploadIcon} alt="Subir imagen" className="w-8 h-8 mb-2" />
                                <span className="text-gray-500 text-sm border border-blue-main rounded-md px-2 py-1">
                                    Subir imagen
                                </span>
                            </label>
                            <input id="file-upload" type="file" className="hidden" />
                        </div>



                        <div className="flex justify-center space-x-4 mt-4">
                            <div className="border-2 border-blue-main rounded-md p-1">
                                <img src={image1} alt="Product image 1" className="w-20 h-20 object-cover rounded-md" />
                            </div>
                            <div className="border-2 border-blue-main rounded-md p-1">
                                <img src={image2} alt="Product image 2" className="w-20 h-20 object-cover rounded-md" />
                            </div>
                            <div className="border-2 border-blue-main rounded-md p-1">
                                <img src={image3} alt="Product image 3" className="w-20 h-20 object-cover rounded-md" />
                            </div>
                        </div>
                    </div>


                    <div className="w-1/2 pl-12 flex flex-col items-center">

                        <div className="grid grid-cols-2 gap-6 mb-8 w-full">
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Precio*</label>
                                <input
                                    type="text"
                                    placeholder="10000"
                                    className="w-full px-3 py-2 border rounded-md text-gray-700"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Precio oferta</label>
                                <input
                                    type="text"
                                    placeholder="8000"
                                    className="w-full px-3 py-2 border rounded-md text-gray-700"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Cantidad disponible*</label>
                                <input
                                    type="text"
                                    placeholder="5"
                                    className="w-full px-3 py-2 border rounded-md text-gray-700"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Estado*</label>
                                <select className="w-full px-3 py-2 border rounded-md text-gray-700">
                                    <option>Activo</option>
                                    <option>Inactivo</option>
                                </select>
                            </div>
                        </div>


                        <div className="flex flex-col items-center w-64">

                            <h2 className="text-xl font-bold mb-2 self-start ml-2">Prevista</h2>


                            <div className="bg-gray-100 p-6 rounded-md shadow-inner flex flex-col items-center text-center w-full">
                                <img src={mainProductImage} alt="Preview" className="w-40 h-auto mb-4 rounded-md" />
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                    Criaturas de los sombras + Expansión roca fundida
                                </h3>
                                <p className="text-gray-500 text-sm mb-2">Unstable Games</p>


                                <p className="text-gray-300 text-sm line-through mb-1">$6.000</p>

                                <p className="text-purple-main text-xl font-bold">$5.000</p>
                            </div>
                        </div>



                        <div className="mt-8 space-y-4 flex flex-col items-center w-full">
                            <Button className="w-3/4 bg-yellow-main  text-white font-bold py-2 px-6 rounded-md ">
                                Guardar y Publicar
                            </Button>
                            <Button className="w-3/4 bg-red-400  text-white font-bold py-2 px-6 rounded-md ">
                                Eliminar producto
                            </Button>
                            <Button className="w-3/4 bg-gray-800  text-white font-bold py-2 px-6 rounded-md ">
                                Cancelar cambios
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CrudProductForm;
