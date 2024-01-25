import { getUsers } from "@/lib/data";
import Image from "next/image";
import { deleteUser } from "@/lib/action";

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div >
      <h1 className="text-3xl font-bold text-gray-300 mb-5">Users :</h1>
      {users.map((user) => (
        <div  className="flex justify-between p-3 items-center" key={user.id}>
          <div className="flex items-center gap-5" >
            <Image
              src={user.img || "/noavatar.png"}
              alt=""
              width={50}
              height={50}
              className="rounded-[50%] "
            />
            <span>{user.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button className="bg-red-800 px-3 rounded-lg  hover:bg-red-500" >Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;