import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";


export default function CoursesPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 md:px-6 lg:px-8">
      <section>
        <h1 className="text-3xl font-bold md:text-4xl">
          Explore Courses
        </h1>

        <p className="mt-3 max-w-2xl text-gray-600">
          Learn practical skills through interactive online classes.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">
          Available Courses
        </h2>

        
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {courses.map((course) => (
                    <CourseCard
                      key={course.id}
                      id={course.id}
                      title={course.title}
                      description={course.description}
                      level={course.level}
                    />
                  ))}
            </div>
       
      </section>
    </main>
  );
}

                
