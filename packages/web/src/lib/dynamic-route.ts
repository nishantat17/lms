"use client";

import { useParams, usePathname } from "next/navigation";

export function useDynamicRoute() {
  const pathname = usePathname();
  const params = useParams();

  const segments = pathname.split("/").filter(Boolean);

  const dynamicValues = Object.values(params).flat(); // ['team-123']

  const cutoff = segments.findIndex((seg) => dynamicValues.includes(seg));
  const rootSegments =
    cutoff >= 0 ? segments.slice(0, cutoff + 1) : segments.slice(0, 2);

  return `/${rootSegments.join("/")}`;
}
