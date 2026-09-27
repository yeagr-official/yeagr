"use client";

import Link, { type LinkProps } from "next/link";
import type {
  AnchorHTMLAttributes,
  MouseEvent,
  ReactNode,
} from "react";
import { captureEvent, type AnalyticsProperties } from "@/lib/analytics";

type TrackedLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps | "href"> & {
    children: ReactNode;
    eventName: string;
    eventProperties?: AnalyticsProperties;
  };

export function TrackedLink({
  children,
  eventName,
  eventProperties,
  href,
  onClick,
  ...props
}: TrackedLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    captureEvent(eventName, {
      href: typeof href === "string" ? href : href.pathname,
      link_text: typeof children === "string" ? children : undefined,
      ...eventProperties,
    });
    onClick?.(event);
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
