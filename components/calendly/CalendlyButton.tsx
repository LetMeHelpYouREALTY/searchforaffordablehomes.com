"use client";

import Script from "next/script";
import "./types";

interface CalendlyButtonProps {
  url?: string;
  text?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function CalendlyButton({
  url = "https://calendly.com/drjanduffy/showing",
  text = "Schedule a showing",
  className = "inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors",
  children,
}: CalendlyButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url });
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <a href={url} onClick={handleClick} className={className}>
        {children || text}
      </a>
    </>
  );
}
