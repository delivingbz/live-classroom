import {courses} from "@/data/courses";
import { notFound } from "next/navigation";
import Link from "next/link";



type CoursePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CoursePage({
  params,
}: CoursePageProps) {
  const { id } = await params;
const course = courses.find(
  (course) => course.id === Number(id)

);

    if (!course) {
    notFound();
  }


  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 md:px-6 lg:px-8">
  <div className="mb-6">
    <Link
      href="/courses"
      className="text-sm font-medium text-gray-600 transition hover:text-black"
    >
      ← Back to Courses
    </Link>
  </div>

  <section className="rounded-2xl border bg-white p-6 shadow-sm md:p-8">
    <div className="flex flex-col gap-6">
      <div>
        <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
          {course.level}
        </span>

        <h1 className="mt-4 text-3xl font-bold md:text-4xl">
          {course.title}
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
          {course.description}
        </p>
      </div>

      <div className="grid gap-4 border-t pt-6 sm:grid-cols-3">
        <div>
          <p className="text-sm text-gray-500">Level</p>
          <p className="mt-1 font-semibold">{course.level}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Course ID</p>
          <p className="mt-1 font-semibold">{course.id}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Format</p>
          <p className="mt-1 font-semibold">Live Online</p>
        </div>
      </div>

      <div className="border-t pt-6">
        <Link
          href={`/courses/${course.id}/enroll`}
          className="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 font-medium text-white transition hover:bg-gray-800 sm:w-auto"
        >
          Enroll Now
        </Link>
      </div>
    </div>
  </section>
</main>
  );
}