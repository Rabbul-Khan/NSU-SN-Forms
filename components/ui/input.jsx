import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-lg border-2 border-slate-500 bg-white px-3 py-2  text-sm  shadow-sm ring-offset-white transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus:border-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E40046] focus-visible:ring-offset-2 invalid:focus-visible:ring-[#E40046] disabled:cursor-not-allowed disabled:opacity-50 dark:border-[#909090]  dark:bg-[#272727] dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
