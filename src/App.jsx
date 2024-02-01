import { NavigationMenuDemo } from "@/components/ui/navbar";
import { ContactUs } from "../components/ui/ContactUs";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ui/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-w-screen relative flex min-h-screen items-center justify-center bg-[#FFFAFB] bg-[url('/background.svg')] font-primary text-[#333333] dark:bg-[#171717] sm:p-0 sm:py-5">
        <ContactUs />
        <Toaster richColors />
      </div>
    </ThemeProvider>
  );
}

export default App;
