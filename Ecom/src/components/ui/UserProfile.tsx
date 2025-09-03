import { Button } from "../ui/button";
import perfil from "../../img/perfil.png";

import PencilIcon from "../../img/editIcon.png";
import { Collapsible, CollapsibleContent } from "../ui/collapsible"
import { Checkbox } from "../ui/checkbox"
import { useState } from "react";
import ButtonComponent from "./ButtonComponent";

function UserProfile() {

  const [open, setOpen] = useState(false)
  return (
    <div className="flex w-full flex-col gap-6 p-10 bg-white min-h-screen h-full font-quicksand">
      <div className="">
        <h2 className="text-2xl mb-6">Información de la cuenta</h2>
        <div className="flex justify-center mb-8">
          <div className="relative">
            <img
              src={perfil}
              alt="Profile"
              className="rounded-full object-cover max-w-[250px] max-h-[250px]"
            />
            <Button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md">
              <img src={PencilIcon} alt="Edit" className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullname">Nombre completo <span className="text-red-500">*</span></label>
            <input
              type="text"
              id="fullname"
              className="mt-1 block w-full rounded-md bg-white-main p-2"
            />
          </div>
          <div>
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md bg-white-main p-2"
            disabled
            />
          </div>
          <div>
            <label htmlFor="username">Nombre de usuario<span className="text-red-500">*</span></label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full rounded-md bg-white-main p-2"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-10">
          <Collapsible open={open} onOpenChange={setOpen}>
            <div className="flex items-center space-x-2 rounded-sm">
              <Checkbox id="changePassword" className="w-4 h-4 bg-white-main border border-purple-main rounded-sm text-gray-main" checked={open} onCheckedChange={(checked) => setOpen(!!checked)} />
              <label htmlFor="changePassword">Cambiar contraseña</label>
            </div>
            <CollapsibleContent className="mt-8 space-y-2">
              <form className="space-y-2 rounded-lg">
                <div>
                  <label htmlFor="old">Contraseña actual<span className="text-red-500">*</span></label>
                  <input id="old" type="password" className="mt-1 block w-full rounded-md bg-white-main p-2" />
                </div>
                <div>
                  <label htmlFor="new">Nueva contraseña<span className="text-red-500">*</span></label>
                  <input id="new" type="password" className="mt-1 block w-full rounded-md bg-white-main p-2" />
                </div>
                <div>
                  <label htmlFor="confirm">Confirmar contraseña<span className="text-red-500">*</span></label>
                  <input id="confirm" type="password" className="mt-1 block w-full rounded-md bg-white-main p-2" />
                </div>
              </form>
            </CollapsibleContent>
          </Collapsible>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-10">
          <ButtonComponent style="w-full p-2 bg-purple-main text-white rounded-md" text="Guardar" />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
