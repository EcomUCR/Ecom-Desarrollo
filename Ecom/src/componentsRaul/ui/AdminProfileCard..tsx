interface ProfileCardProps{
    uuid:string;
    username:string;
    email:string;
    type:string;
    lastConnection:string;
    state:boolean;
}
{/*Hay que implementar las props con props:ProfileCardProps para que se lleven por default*/}
export default function AdminProfileCard(){
    return(
        <div className="flex w-full py-2 px-10 bg-main-dark/10 rounded-full hover:bg-main-dark/20 ">
            <p className="w-1/12">1.1</p>
            <p className="w-2/12">@example_1</p>
            <p className="w-3/12">example@gamil.com</p>
            <p className="w-2/12">Seller</p>
            <p className="w-2/12">12/10/2025 12:51:00</p>
            <p className="w-1/12">[  o]</p>{/*Este se tiene que cambiar a un switch */}
            <p className="w-1/12 text-center">*</p>{/*Este se tiene que cambiar a ButtonComponent */}
        </div>
    );
}