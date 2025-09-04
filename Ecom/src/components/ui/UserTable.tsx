import React, { useState } from "react";
import StatusSwitch from "./StatusSwitch";
import { IconReceipt2, IconSettings, IconUser } from "@tabler/icons-react";

const UserTable: React.FC = () => {
    const [users] = useState([
        {
            uuid: "1.1",
            username: "@example_1",
            email: "example1@gmail.com",
            type: "User",
            lastConnection: "12/10/2025 12:51:00",
            status: true,

        },
        {
            uuid: "2.1",
            username: "@example_2",
            email: "example2@gmail.com",
            type: "Seller",
            lastConnection: "12/10/2025 12:51:00",
            status: false,

        },
        {
            uuid: "1.2",
            username: "@example_3",
            email: "example3@gmail.com",
            type: "User",
            lastConnection: "12/10/2025 12:51:00",
            status: true,

        },
        {
            uuid: "1.3",
            username: "@example_4",
            email: "example4@gmail.com",
            type: "User",
            lastConnection: "12/10/2025 12:51:00",
            status: true,

        }
    ]);




    return (
        <div className="overflow-x-auto shadow-md rounded-lg">

            <table className="min-w-full text-sm text-left border-separate border-spacing-y-2">
                <thead className="uppercase text-xs">
                    <tr className="bg-gray-200 rounded-t-lg">
                        <th className="px-4 py-2 rounded-tl-lg">UUID</th>
                        <th className="px-4 py-2">Username</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Type</th>
                        <th className="px-4 py-2">Last Connection</th>
                        <th className="px-4 py-2 rounded-tr-lg">Status</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((u, idx) => (
                        <tr
                            key={idx}
                            className="bg-gray-100 hover:bg-gray-200 rounded"
                        >
                            <td className="px-4 py-2">{u.uuid}</td>
                            <td className="px-4 py-2">{u.username}</td>
                            <td className="px-4 py-2">{u.email}</td>
                            <td className="px-4 py-2 flex items-center gap-2">
                                {u.type}
                                {u.type === "User" ? <IconUser className="w-4 h-4 text-gray-500" /> : null}
                                {u.type === "Seller" ? <IconReceipt2 className="w-4 h-4 text-gray-500" /> : null}
                            </td>
                            <td className="px-4 py-2">{u.lastConnection}</td>
                            <td className="px-4 py-2 flex items-center gap-2">
                                <StatusSwitch initial={u.status} />
                                <IconSettings className="w-4 h-4 text-gray-500" />
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
                    <span className="px-3 py-1 rounded-full bg-blue-main text-white">1</span>
                    <span className="px-3 py-1 rounded-full bg-white-main">2</span>
                    <span className="px-3 py-1 rounded-full bg-white-main">3</span>
                    <span className="px-3 py-1 rounded-full bg-white-main">...</span>
                    <span className="px-3 py-1 rounded-full bg-white-main">6</span>
                </div>
            </div>
        </div>
    );
};

export default UserTable;
