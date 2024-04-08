import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "text-dark text-xl leading-[30px] font-medium border-0 cursor-pointer max-[600px]:leading-[22px] max-[600px]:text-[15px]",
  {
    variants: {
      variant: {
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        link: "text-primary underline-offset-4 hover:underline",
        primary: `bg-indigo text-white hover:bg-eastBay max-[600px]:w-full max-[600px]:py-[10px] max-[600px]:px-[16px]`,
        secondary: `border-1 border-solid border-dark`,
        tertiary: `text-indigo `,
        light: `text-dark`,
        default: `bg-white font-normal hover:text-purple`,
        beige: `border-1 border-solid border-dark leading-7 text-gray-500 text-sm`,
        quickReply: `bg-white hover:bg-mintGreen hover:text-white border-1 border-solid border-dark leading-7 text-gray-500 text-sm`,
        table: `text-dark`,
        tablePageControl: "bg-white hover:bg-mintGreen hover:text-white border-1 border-solid border-dark leading-7 text-gray-500 text-sm"
      },
      size: {
        default: "h-[50px] py-[10px] px-[29px] rounded-[32px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
