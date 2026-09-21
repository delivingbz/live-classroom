import { requireRole } from "@/src/lib/authorization";

export default async function InstructorPage() {
  const user = await requireRole("instructor");

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        Welcome, Instructor {user.firstName}
      </h1>

      <p className="mt-2 text-gray-600">
        This page is only available to instructors.
      </p>
    </main>
  );
}