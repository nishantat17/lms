import { Separator } from "@/components/ui/separator";

export default function Course() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Course Title</h1>
      <Separator className="my-4" />
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2"></section>
    </div>
  );
}
