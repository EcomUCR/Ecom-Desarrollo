import React from "react";
import { Button } from "../ui/button";
import UserTable from "../ui/UserTable";
import NavBar from "../ui/NavBarUser";
import { IconSearch } from "@tabler/icons-react";
import ButtonComponent from "../ui/ButtonComponent";


export default class UserListPage extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="p-6 bg-white min-h-screen">
          <h1 className="text-4xl font-bold mb-4">Lista de usuarios</h1>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center border border-gray-main/50 rounded-lg overflow-hidden w-96 pl-10 text-left">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full py-2 pl-1 pr-0 focus:outline-none text-left"
                />
              </div>
              <select className="border border-gray-main/50 rounded-lg px-10 py-2 text-left">
                <option value="">Filtrar</option>
                <option value="user">User</option>
                <option value="seller">Seller</option>
              </select>
              <ButtonComponent
                style="bg-yellow-main hover:bg-yellow-500 flex items-center justify-center rounded-xl p-2"
                icon={IconSearch}
                iconStyle="w-5 h-5 text-white"
              />
            </div>
            <ButtonComponent
              style="text-white px-4 py-2 rounded-lg hover:opacity-90 bg-purple-main flex items-center gap-2"
              text="Crear nuevo usuario"
            />

          </div>
          <UserTable />
        </div>
      </>
    );
  }
}
