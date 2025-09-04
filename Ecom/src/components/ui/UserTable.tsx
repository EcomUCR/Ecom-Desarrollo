import React, { useEffect, useState } from "react";
import StatusSwitch from "./StatusSwitch";
import userIcon from "../../img/UserIcon.png";
import sellerIcon from "../../img/ShopIcon.png";
import actionIcon from "../../img/toolswi.png";
import type { FullUser } from "../types/User";

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<FullUser[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch("/api/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data: FullUser[]) => setUsers(data))
      .catch((err) => console.error("Failed to fetch users", err));
  }, []);

  const getUserType = (u: FullUser) => {
    if (u.client) return "User";
    if (u.vendor) return "Seller";
    if (u.staff) return "Staff";
    return "Unknown";
  };

  const getUserIcon = (u: FullUser) => {
    if (u.client) return userIcon;
    if (u.vendor) return sellerIcon;
    if (u.staff) return actionIcon;
    return userIcon;
  };

  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="min-w-full text-sm text-left border-separate border-spacing-y-2">
        <thead className="uppercase text-xs">
          <tr className="bg-gray-200 rounded-t-lg">
            <th className="px-4 py-2 rounded-tl-lg">ID</th>
            <th className="px-4 py-2">Username / Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Last Connection</th>
            <th className="px-4 py-2 rounded-tr-lg">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="bg-gray-100 hover:bg-gray-200 rounded">
              <td className="px-4 py-2">{u.id}</td>
              <td className="px-4 py-2">
                {u.client?.username || u.vendor?.name || `${u.staff?.first_name} ${u.staff?.last_name}`}
              </td>
              <td className="px-4 py-2">{u.email}</td>
              <td className="px-4 py-2 flex items-center gap-2">
                {getUserType(u)}
                <img src={getUserIcon(u)} alt="type" className="w-4 h-4" />
              </td>
              <td className="px-4 py-2">
                {u.last_login_at
                  ? new Date(u.last_login_at).toLocaleString()
                  : "Never"}
              </td>
              <td className="px-4 py-2 flex items-center gap-2">
                <StatusSwitch initial={true} />
                <img src={actionIcon} alt="action" className="w-5 h-5" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
       <div className="flex justify-between items-center mt-4 bg-gray-200 px-1  rounded">
                <div className="text-sm">
                    Show{" "}

                    <select className="border px-1 py-0.5 rounded mx-1 bg-white">
                        <option>25</option>
                        <option>50</option>
                        <option>100</option>
                    </select>{" "}
                    per page
                </div>
                <div className="text-gray-500 text-sm">1-25 of 150</div>

                <div className="flex items-center justify-center mt-6 space-x-2">
                    <span className="px-3 py-1 rounded-full bg-sky-400 text-white">1</span>
                    <span className="px-3 py-1 rounded-full bg-white">2</span>
                    <span className="px-3 py-1 rounded-full bg-white">3</span>
                    <span className="px-3 py-1 rounded-full bg-white">...</span>
                    <span className="px-3 py-1 rounded-full bg-white">6</span>
                </div>
            </div>
    </div>
    
  );
};

export default UserTable;
