import { notFound } from "next/navigation";
import { courses } from "@/data/courses";

type EnrollPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EnrollPage({
  params,
}: EnrollPageProps) {
  const { id } = await params;

  const course = courses.find(
    (course) => course.id === Number(id)
  );

  if (!course) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 md:px-6 lg:px-8">
      <h1 className="text-3xl font-bold md:text-4xl">
        Enroll in Course
      </h1>

      <section className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
        <span className="text-sm font-medium text-gray-500">
          {course.level}
        </span>

        <h2 className="mt-2 text-2xl font-bold">
          {course.title}
        </h2>

        <p className="mt-3 text-gray-600">
          {course.description}
        </p>

        <button className="mt-6 rounded-lg bg-black px-5 py-3 font-medium text-white transition hover:bg-gray-800">
          Confirm Enrollment
        </button>
      </section>
    </main>
  );
}