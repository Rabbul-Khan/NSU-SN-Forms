import { ContactUs } from "../components/ui/ContactUs";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ui/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-w-screen text-dark-primary  dark:bg-dark-primary relative flex min-h-screen items-center justify-center bg-white bg-[url('/background.svg')] sm:p-0 sm:py-5">
        <ContactUs />
        <Toaster richColors />
      </div>
    </ThemeProvider>
  );
}

export default App;
