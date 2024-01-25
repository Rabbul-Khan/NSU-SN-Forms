import { ContactUs } from "../components/ui/ContactUs";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-[#fbc2eb] to-[#a6c1ee] font-primary">
      <ContactUs />
      <Toaster richColors />
    </div>
  );
}

export default App;
