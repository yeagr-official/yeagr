"use client";

import posthog from "posthog-js";

export type AnalyticsProperties = Record<
  string,
  boolean | number | string | null | undefined
>;

export function isPostHogConfigured() {
  return Boolean(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN);
}

export function captureEvent(
  eventName: string,
  properties: AnalyticsProperties = {},
) {
  if (typeof window === "undefined" || !isPostHogConfigured()) {
    return;
  }

  posthog.capture(eventName, {
    product: "yeagr",
    ...properties,
  });
}
