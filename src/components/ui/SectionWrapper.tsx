// Phase 3 — Section Wrapper (handles padding + scroll reveal)
import { cn } from "@/lib/utils";
export default function SectionWrapper({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("py-24 px-6 md:px-12 lg:px-24", className)}>
      {children}
    </section>
  );
}
