import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium tracking-wide uppercase ring-offset-background transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-[hsl(var(--navy-mid))] shadow-quiet hover:shadow-soft",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[hsl(var(--navy-deep))]",
        ghost:
          "hover:bg-muted hover:text-foreground normal-case tracking-normal",
        link:
          "text-secondary underline-offset-4 hover:underline normal-case tracking-normal",
        hero:
          "bg-primary text-primary-foreground hover:bg-[hsl(var(--navy-mid))] shadow-soft hover:shadow-card",
        heroOutline:
          "border border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground",
        cta:
          "bg-primary text-primary-foreground hover:bg-[hsl(var(--teal-deep))] shadow-soft",
      },
      size: {
        default: "h-11 px-6 py-2 text-xs",
        sm: "h-9 rounded-sm px-4 text-[11px]",
        lg: "h-12 rounded-sm px-8 text-xs",
        xl: "h-14 rounded-sm px-10 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
