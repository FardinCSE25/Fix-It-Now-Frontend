import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  href?: string;
  showText?: boolean;
  className?: string;
}

export default function Logo({
  href = "/",
  showText = true,
}: LogoProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3"
    >
      <Image
        src="/fixitnow-logo.png"
        alt="FixItNow Logo"
        width={46}
        height={46}
        priority
        className="rounded-xl"
      />

      {showText && (
        <div className="leading-tight">
          <h2 className="bg-linear-to-r from-primary to-secondary bg-clip-text text-2xl font-extrabold tracking-tight text-transparent">
            Fix It Now
          </h2>

          <p className="text-xs text-muted-foreground">
            Trusted Home Services
          </p>
        </div>
      )}
    </Link>
  );
}