import Admin from "@/components/Admin";
import { authOptions } from "@/lib/auth";
import { Session } from "inspector";
import { getServerSession } from "next-auth";

const AdminPanel = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "admin")
    return (
      <main className="mt-10 space-y-28 p-10">
        {" "}
        You are not authorized to view the admin panel
      </main>
    );
  return <Admin />;
};

export default AdminPanel;
