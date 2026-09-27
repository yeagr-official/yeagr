"use client";

import { useEffect, useRef } from "react";
import { captureEvent, type AnalyticsProperties } from "@/lib/analytics";

type PageEventProps = {
  eventName: string;
  properties?: AnalyticsProperties;
};

export function PageEvent({ eventName, properties = {} }: PageEventProps) {
  const captured = useRef(false);

  useEffect(() => {
    if (captured.current) {
      return;
    }

    captured.current = true;
    captureEvent(eventName, properties);
  }, [eventName, properties]);

  return null;
}
