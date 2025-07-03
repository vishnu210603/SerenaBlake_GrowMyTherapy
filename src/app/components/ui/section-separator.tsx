
import { cn } from "@/app/lib/utils";

interface SectionSeparatorProps {
  className?: string;
}

export const SectionSeparator = ({ className }: SectionSeparatorProps) => {
  return (
    <div className={cn("relative py-8", className)}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-sage-200/50"></div>
      </div>
      <div className="relative flex justify-center">
        <div className="bg-background px-6">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-sage-200/30 to-warm-200/30 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-primary/60"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
