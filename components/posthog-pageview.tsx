"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { captureEvent } from "@/lib/analytics";

export function PostHogPageview() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();

  useEffect(() => {
    captureEvent("$pageview", {
      $current_url: window.location.href,
      pathname,
      search: search || undefined,
    });
  }, [pathname, search]);

  return null;
}
