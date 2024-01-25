"use client";

import { addUser } from "@/lib/action";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-5" >
      <h1 className="text-3xl font-bold text-gray-300 mb-5 ">Add New User</h1>
      <input className="p-2 text-lg bg-cyan-950" type="text" name="username" placeholder="username" />
      <input className="p-2 text-lg bg-cyan-950" type="text" name="email" placeholder="email" />
      <input className="p-2 text-lg bg-cyan-950" type="password" name="password" placeholder="password" />
      <input className="p-2 text-lg bg-cyan-950" type="text" name="img" placeholder="img" />
      <select className="p-2 text-lg bg-cyan-950" name="isAdmin">
        <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button  className="bg-blue-700 p-3  text-white hover:bg-blue-800">Add</button>
      {state?.error}
    </form>
  );
};

export default AdminUserForm;