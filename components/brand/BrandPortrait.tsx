import Image from "next/image";

type BrandPortraitSize = "xs" | "sm" | "md" | "lg" | "xl";

const SIZE_MAP: Record<BrandPortraitSize, { px: number; className: string }> = {
  xs: { px: 40, className: "h-10 w-10" },
  sm: { px: 56, className: "h-14 w-14" },
  md: { px: 80, className: "h-20 w-20" },
  lg: { px: 128, className: "h-32 w-32" },
  xl: { px: 192, className: "h-48 w-48" },
};

type BrandPortraitProps = {
  size?: BrandPortraitSize;
  className?: string;
  priority?: boolean;
  alt?: string;
};

/**
 * Dr. Jan Duffy brand portrait — used in heroes, section headers, and CTAs.
 */
export default function BrandPortrait({
  size = "md",
  className = "",
  priority = false,
  alt = "Dr. Jan Duffy, Las Vegas REALTOR® helping buyers find affordable homes",
}: BrandPortraitProps) {
  const { px, className: sizeClass } = SIZE_MAP[size];

  return (
    <Image
      src="/images/agent/dr-jan-duffy-portrait.png"
      alt={alt}
      width={px}
      height={px}
      priority={priority}
      className={`${sizeClass} rounded-full object-cover ring-2 ring-[#1e4fd6]/ring-offset-2 ${className}`}
    />
  );
}
