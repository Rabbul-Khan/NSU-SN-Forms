import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/ui/theme-provider";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant=""
          size="icon"
          className="hover:dark:bg-primary absolute right-5  top-5 border-none bg-white ring-offset-0 transition ease-in-out  hover:rotate-12 focus:border-none focus:outline-none focus-visible:ring-0 dark:bg-[#E40046] dark:ring-offset-0 dark:focus-visible:ring-0 sm:left-5"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-[#E40046] transition-all  dark:-rotate-90 dark:scale-0" />
          <Moon className=" absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-white" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
