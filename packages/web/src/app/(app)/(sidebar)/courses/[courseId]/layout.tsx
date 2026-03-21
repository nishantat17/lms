"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDynamicRoute } from "@/lib/dynamic-route";
import Link from "next/link";
import { useTransition } from "react";
import {
  useRouter,
  useSelectedLayoutSegment,
  useParams,
} from "next/navigation";
import { cn } from "@/lib/utils";

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { courseId } = useParams();
  const segment = useSelectedLayoutSegment();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const root = `/courses/${courseId}`;

  const tabs = [
    { label: "Course Content", value: "course-content", href: `${root}` },
    { label: "Engagement", value: "engagement", href: `${root}/engagement` },
    { label: "Reviews", value: "reviews", href: `${root}/reviews` },
  ];

  return (
    <>
      <div className="max-w-5xl mx-auto">
        <Tabs value={segment ?? "course-content"}>
          <TabsList variant="line">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                onClick={() => {
                  startTransition(() => {
                    router.push(tab.href);
                  });
                }}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      <div
        className={cn(
          "transition-opacity duration-200",
          isPending && "opacity-50 pointer-events-none",
        )}
      >
        <main className="max-w-5xl mx-auto py-10 px-4">{children}</main>
      </div>
    </>
  );
}
