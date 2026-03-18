import { Separator } from "@/components/ui/separator";
import CourseCard from "./_components/course-card";

export default function Test() {
  return (
    <div>
      <main className="max-w-5xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold">Courses</h1>
        <Separator className="my-4" />
        <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </section>
      </main>
    </div>
  );
}
