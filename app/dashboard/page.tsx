import { getCurrentUser } from "@/src/lib/auth";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
    }
     return (
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p>Welcome, {user.email}!</p>
        <LogoutButton />
      </div>
    );
  }

   