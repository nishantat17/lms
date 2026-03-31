import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Pen, PlayIcon } from "@hugeicons/core-free-icons";
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
          Edit Course
        </Button>
      </div>
      <Separator className="mb-4" />
      <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-2">
        <article>
          <div className="h-100 bg-blue-200 mb-8 rounded-lg shadow-sm"></div>
          <div>
            <h2 className="text-2xl mb-2">Overview</h2>
            <p>
              This content will be in rich text. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Minus, dolorem? Architecto, in dignissimos atque labore recusandae nisi ea
              laboriosam ipsam cum voluptate aspernatur omnis doloremque adipisci nobis. Asperiores,
              fugiat corrupti.
            </p>
          </div>
        </article>
        <aside className="grow-0">
          <div className="bg-neutral-50 rounded-md p-4">
            <h3 className="text-xl font-semibold mb-4 mt-2">Curriculum</h3>
            <ul className="flex flex-col gap-4">
              <li className="w-full">
                <Tooltip>
                  <TooltipTrigger className={""}>
                    <Button variant="outline" size="lg" className="flex items-center gap-1 w-full">
                      <HugeiconsIcon icon={PlayIcon} color="blue" size={36} fill="blue" />
                      <span className="line-clamp-1 font-medium text-blue-700 inline-block max-w-[20ch] text-ellipsis">
                        Video name is too long fknjnfjenfiojffkfnkfkfnkjnjnfjfn
                      </span>
                      <span className="text-xs font-medium ml-auto text-gray-500">08:32</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add to library</p>
                  </TooltipContent>
                </Tooltip>
              </li>
              <li className="flex items-center gap-1">
                <HugeiconsIcon icon={PlayIcon} color="green" size={32} />
                <span className="line-clamp-1">Video name is too long fknjnfjenfiojf</span>
                <span className="text-sm font-medium ml-auto text-gray-500">08:32</span>
              </li>
              <li className="flex items-center gap-1">
                <HugeiconsIcon icon={PlayIcon} color="green" size={32} />
                <span className="line-clamp-1">Video name is too long fknjnfjenfiojf</span>
                <span className="text-sm font-medium ml-auto text-gray-500">08:32</span>
              </li>
              <li className="flex items-center gap-1">
                <HugeiconsIcon icon={PlayIcon} color="green" size={32} />
                <span className="line-clamp-1">Video name is too long fknjnfjenfiojf</span>
                <span className="text-sm font-medium ml-auto text-gray-500">08:32</span>
              </li>
              <li className="flex items-center gap-1">
                <HugeiconsIcon icon={PlayIcon} color="green" size={32} />
                <span className="line-clamp-1">Video name is too long fknjnfjenfiojf</span>
                <span className="text-sm font-medium ml-auto text-gray-500">08:32</span>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}
