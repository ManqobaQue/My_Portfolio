
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const chipVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-secondary/20",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        skill:
          "bg-primary/5 text-primary hover:bg-primary/10 border border-primary/10 backdrop-blur-sm",
      },
      size: {
        default: "h-7 text-xs px-3",
        sm: "h-6 text-xs px-2",
        lg: "h-8 text-sm px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ChipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {}

function Chip({ className, variant, size, ...props }: ChipProps) {
  return (
    <div className={cn(chipVariants({ variant, size }), className)} {...props} />
  );
}

export { Chip, chipVariants };
