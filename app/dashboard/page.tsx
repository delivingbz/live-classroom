import { getCurrentUser } from "@/src/lib/auth";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  console.log("Authenticated user:", user);
  if (!user) {
    redirect("/login");
    }
     return (
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p>Welcome, {user.firstName}!</p>
        <div className="mt-6 rounded-xl border bg-white p-6">
                <h2 className="text-xl font-semibold">Account Information</h2>

                <div className="mt-4 space-y-2 text-sm">
                <p>
                  <span className="font-medium">Name:</span>{" "}
                    {user.firstName} {user.lastName}
                </p>

                 <p>
                     <span className="font-medium">Email:</span>{" "}
                    {user.email}
                 </p>

                <p>
                    <span className="font-medium">Role:</span>{" "}
                        {user.role}
                </p>
            </div>
        </div>
         <LogoutButton />
      </div>
    );
  }

   