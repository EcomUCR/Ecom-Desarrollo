import ButtonComponent from "../ui/ButtonComponent";
import NavBar from "../ui/NavBar";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table"

/*interface Users{
    id: number;
    username: string;
    type: string;
    status: string;
}*/


export default function AdminUserPage() {
    return (
        <section className="">
            <NavBar />
            <div className="py-10 px-5 lg:px-20 ">

                <div className="flex justify-between items-center ">
                    <h1 className="font-quicksand font-bold text-xl lg:text-4xl">Lista de Usuarios</h1>
                    <ButtonComponent text="Crear nuevo usuario" style="bg-purple-main text-xs lg:text-xl p-4 font-fugaz text-white rounded-lg" />
                </div>
                <div className="flex flex-col lg:flex-row w-full space-x-2 space-y-2 lg:space-y-0 py-10">
                    <div className="w-full h-auto lg:w-2/3 bg-purple-main/50 rounded-2xl px-5">
                        <Table>
                            <TableCaption>Esto va al final de la lista</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="">ID</TableHead>
                                    <TableHead className="">Usuario</TableHead>
                                    <TableHead>Tipo</TableHead>
                                    <TableHead>Estado</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">1</TableCell>
                                    <TableCell className="font-medium">INV001</TableCell>
                                    <TableCell>Paid</TableCell>
                                    <TableCell> <input type="radio" />REVISAR COMBOBOX EN SHADCN</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <div className="bg-purple-main/50 py-5 rounded-2xl lg:w-1/3 h-auto text-white">
                        <div className="text-center space-y-2 border-b-1 border-white">
                            <h2 className="font-bold text-xl">Resetear Contraseña</h2>
                            <p>Usuario seleccionado: <span>@user</span></p>
                        </div>
                        <div className="flex flex-col items-center py-5">
                            <label htmlFor="">Nueva contraseña</label>
                            <input type="password" placeholder="" className="rounded-lg p-2 m-2 bg-white text-gray-main w-[90%] px-5" />
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <ButtonComponent text="Actualizar contraseña manualmente" style="bg-blue-main text-white-main p-2 rounded-lg m-2  w-[40vh]" />
                            <ButtonComponent text="Enviar correo de cambio de contraseña" style="bg-yellow-main text-white p-2 rounded-lg m-2  w-[40vh]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}