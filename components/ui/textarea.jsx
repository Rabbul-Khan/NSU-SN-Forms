import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border-2 border-slate-400 bg-white px-3 py-2 text-sm ring-offset-white drop-shadow transition-all placeholder:text-slate-500 focus:border-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E40046] focus-visible:ring-offset-2 invalid:focus-visible:ring-[#E40046] disabled:cursor-not-allowed disabled:opacity-50 dark:border-[#909090]  dark:bg-[#272727]  dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
