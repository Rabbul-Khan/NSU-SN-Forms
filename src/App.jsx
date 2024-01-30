import { ContactUs } from "../components/ui/ContactUs";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#FEF6FC] font-primary text-[#333333] sm:bg-gradient-to-r sm:from-[#fbc2eb] sm:to-[#a6c1ee]">
      <ContactUs />
      <Toaster richColors />
    </div>
  );
}

export default App;
