import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Pen } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function Course() {
  return (
    <div>
      <div className="bg-sky-100 text-blue-700 font-medium w-fit px-4 py-1 text-xs rounded-full mb-4">
        {new Date().toLocaleDateString("en-IN", { dateStyle: "full" })}
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Course Title</h1>
        <Button variant="secondary" className="mb-4">
          <HugeiconsIcon icon={Pen} />
          Enroll Now
        </Button>
      </div>
      <Separator className="mb-4" />
      <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-2">
        <article>
          <div className="h-100 bg-blue-200"></div>
        </article>
        <aside>Gap 2</aside>
      </section>
    </div>
  );
}
