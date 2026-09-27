import posthog from "posthog-js";

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
const posthogHost =
  process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

const loadedPostHog = posthog as typeof posthog & { __loaded?: boolean };

if (typeof window !== "undefined" && posthogKey && !loadedPostHog.__loaded) {
  loadedPostHog.init(posthogKey, {
    api_host: posthogHost,
    defaults: "2026-01-30",
    capture_pageview: false,
    capture_pageleave: true,
    autocapture: true,
  });
}
