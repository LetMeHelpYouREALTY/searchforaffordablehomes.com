import Image from "next/image";
import { SITE_BRAND } from "@/lib/affordable-homes-content";

type AgentPortraitProps = {
  size?: number;
  className?: string;
  priority?: boolean;
};

/**
 * Circular gold-border portrait of Dr. Jan Duffy — brand mark for sections.
 */
export default function AgentPortrait({
  size = 120,
  className = "",
  priority = false,
}: AgentPortraitProps) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full border-2 border-amber-500 bg-slate-950 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/agent/dr-jan-duffy-portrait.png"
        alt={`${SITE_BRAND.agent}, ${SITE_BRAND.name}`}
        width={size}
        height={size}
        className="h-full w-full object-cover"
        priority={priority}
      />
    </div>
  );
}
