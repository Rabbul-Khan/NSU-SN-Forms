import { ContactUs } from "../components/ui/ContactUs";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="min-w-screen flex min-h-screen items-center justify-center bg-[#FEF6FC] py-5 font-primary text-[#333333] sm:bg-gradient-to-r sm:from-[#fbc2eb] sm:to-[#a6c1ee] sm:p-0">
      <ContactUs />
      <Toaster richColors />
    </div>
  );
}

export default App;
