import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import perfil from "../../img/perfil.png";
import PencilIcon from "../../img/editIcon.png";
import { Collapsible, CollapsibleContent } from "../ui/collapsible";
import { Checkbox } from "../ui/checkbox";
import ButtonComponent from "./ButtonComponent";

import type { MeResponse } from "../types/User";

function UserProfile() {
  const [data, setData] = useState<MeResponse | null>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  // Load user profile
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch("api/me", {
      headers: {
        Authorization: `Bearer ${token}`, // ✅ correct
        Accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then((d: MeResponse) => setData(d))
      .catch(() => setData(null));
  }, []);

  // Handle file selection
  const onPickFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAvatarFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  // Upload avatar
  const uploadAvatar = async () => {
    if (!avatarFile) return;
    const token = localStorage.getItem("token");
    const fd = new FormData();
    fd.append("avatar", avatarFile);

    const res = await fetch("api/client/avatar", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: fd,
    });

    const json = await res.json();
    if (res.ok) {
      setData((prev) =>
        prev
          ? {
              ...prev,
              client: prev.client
                ? { ...prev.client, avatar_url: json.avatar_url }
                : prev.client,
            }
          : prev
      );
      setPreviewUrl(null);
      setAvatarFile(null);
    } else {
      console.error(json);
      alert(json.message || "Upload failed");
    }
  };

  // Remove avatar
  const removeAvatar = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch("api/client/avatar", {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    const json = await res.json();
    if (res.ok) {
      setData((prev) =>
        prev
          ? {
              ...prev,
              client: prev.client
                ? { ...prev.client, avatar_url: null }
                : prev.client,
            }
          : prev
      );
    } else {
      console.error(json);
      alert(json.message || "Delete failed");
    }
  };

  return (
    <div className="flex w-full flex-col gap-6 p-10 bg-white min-h-screen h-full font-quicksand">
      <div>
        <h2 className="text-2xl mb-6">Información de la cuenta</h2>

        {/* Profile Picture */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <img
              src={previewUrl || data?.client?.avatar || perfil}
              alt="Profile"
              className="rounded-full object-cover max-w-[250px] max-h-[250px]"
            />
            <label className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md cursor-pointer">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={onPickFile}
              />
              <img src={PencilIcon} alt="Edit" className="w-5 h-5" />
            </label>
          </div>
        </div>

        {/* Avatar actions */}
        <div className="flex justify-center gap-3 mb-8">
          <button
            disabled={!avatarFile}
            onClick={uploadAvatar}
            className="px-4 py-2 bg-purple-main text-white rounded-md disabled:opacity-50"
          >
            Subir
          </button>

          {data?.client?.avatar && (
            <button
              onClick={removeAvatar}
              className="px-4 py-2 bg-gray-200 rounded-md"
            >
              Eliminar
            </button>
          )}
        </div>

        {/* User Info Fields */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullname">
              Nombre completo <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullname"
              defaultValue={data?.client?.first_name || ""}
              className="mt-1 block w-full rounded-md bg-white-main p-2"
            />
          </div>
          <div>
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              defaultValue={data?.user?.email || ""}
              className="mt-1 block w-full rounded-md bg-white-main p-2"
              disabled
            />
          </div>
          <div>
            <label htmlFor="username">
              Nombre de usuario <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="username"
              defaultValue={data?.client?.username || ""}
              className="mt-1 block w-full rounded-md bg-white-main p-2"
            />
          </div>
        </div>

        {/* Change Password */}
        <div className="grid grid-cols-2 gap-6 mt-10">
          <Collapsible open={open} onOpenChange={setOpen}>
            <div className="flex items-center space-x-2 rounded-sm">
              <Checkbox
                id="changePassword"
                className="w-4 h-4 bg-white-main border border-purple-main rounded-sm text-gray-main"
                checked={open}
                onCheckedChange={(checked) => setOpen(!!checked)}
              />
              <label htmlFor="changePassword">Cambiar contraseña</label>
            </div>
            <CollapsibleContent className="mt-8 space-y-2">
              <form className="space-y-2 rounded-lg">
                <div>
                  <label htmlFor="old">
                    Contraseña actual<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="old"
                    type="password"
                    className="mt-1 block w-full rounded-md bg-white-main p-2"
                  />
                </div>
                <div>
                  <label htmlFor="new">
                    Nueva contraseña<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="new"
                    type="password"
                    className="mt-1 block w-full rounded-md bg-white-main p-2"
                  />
                </div>
                <div>
                  <label htmlFor="confirm">
                    Confirmar contraseña<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="confirm"
                    type="password"
                    className="mt-1 block w-full rounded-md bg-white-main p-2"
                  />
                </div>
              </form>
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Save Button */}
        <div className="grid grid-cols-2 gap-6 mt-10">
          <ButtonComponent
            style="w-full p-2 bg-purple-main text-white rounded-md"
            text="Guardar"
          />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
