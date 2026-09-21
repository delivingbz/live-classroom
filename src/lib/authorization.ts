import { redirect } from "next/navigation";
import { getCurrentUser } from "@/src/lib/auth";
type Role = "student" | "instructor" | "admin";

export async function requireRole(role: Role) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  if (user.role !== role) {
    redirect("/dashboard");
  }

  return user;
}