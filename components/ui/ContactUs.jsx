import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { Button } from "./button";
import { toast } from "sonner";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useTheme } from "@/components/ui/theme-provider";

export const ContactUs = () => {
  const form = useRef();
  const { theme } = useTheme();

  console.log(theme);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_me9rx0l",
        "template_e0h96qw",
        form.current,
        "aJz1bNkxownFkofBi",
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          toast.success("Your form has been submitted");
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div className="flex min-h-[inherit] min-w-full flex-col items-center justify-center gap-10 bg-[#E40046] py-10 duration-700 animate-in fade-in zoom-in dark:bg-[#2c2c2c] dark:drop-shadow-red sm:min-h-fit sm:min-w-[475px] sm:rounded-xl sm:p-5 sm:shadow-lg sm:drop-shadow-red md:min-w-[550px] lg:min-w-[850px] lg:flex-row xl:w-[1000px]">
      <ModeToggle />

      {theme === "dark" ? (
        <img
          src="Logo-Red-icon-white-text.svg"
          alt="NSU SN logo"
          className="max-w-80 animate-slide-in-left sm:pt-5 md:max-w-96 lg:pl-5 lg:pt-0 xl:max-w-[28rem]"
        />
      ) : (
        <img
          src="Logo.svg"
          alt="NSU SN logo"
          className="max-w-80 animate-slide-in-left sm:pt-5 md:max-w-96 lg:pl-5 lg:pt-0 xl:max-w-[28rem]"
        />
      )}

      <Card className="max-h-min min-w-full dark:bg-[#333333] dark:drop-shadow-2xl sm:grow lg:min-w-fit">
        <CardHeader>
          <CardTitle className="tracking animate-slide-in-left font-primary  text-4xl font-bold text-[#E40046] dark:text-[#E40046] dark:drop-shadow lg:text-5xl">
            Get in Touch!
          </CardTitle>
          {/* <CardDescription className="text-sm text-[#1D1B1B] lg:text-base">
            Feel free to reach out to us using the form below
          </CardDescription> */}
        </CardHeader>

        <CardContent>
          <form
            ref={form}
            onSubmit={sendEmail}
            id="contactForm"
            className="font-secondary grid w-full items-center gap-5"
          >
            <div className="grid gap-2">
              <Label>Name</Label>
              <Input
                required
                type="text"
                name="user_name"
                placeholder="John Doe"
                className=""
              />
            </div>

            <div className="grid gap-2">
              <Label>Email</Label>
              <Input
                required
                type="email"
                name="user_email"
                placeholder="john.doe@gmail.com"
              />
            </div>

            <div className="grid gap-2">
              <Label>
                Subject{" "}
                <span className="text-slate-500 dark:text-slate-300">
                  (optional)
                </span>
              </Label>
              <Input
                type="text"
                name="subject"
                placeholder="Provide a concise subject..."
              />
            </div>

            <div className="grid gap-2">
              <Label>Message</Label>
              <Textarea
                required
                name="message"
                placeholder="Type your message here..."
              />
            </div>

            <Button
              type="submit"
              className="text-primary before:bg-primary hover:shadow-[primary dark:bg-primary dark:hover:text-[primary group relative mr-auto mt-5 h-[50px] w-full overflow-hidden border-2 bg-white text-base shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:duration-700 before:ease-out hover:scale-105 hover:text-[white] hover:before:h-[35rem]  hover:before:w-[35rem] active:scale-95 dark:text-white dark:before:bg-white dark:hover:shadow-lg lg:w-44 lg:hover:before:h-56 lg:hover:before:w-56"
            >
              <span className="relative z-10">Send Message</span>

              {theme === "dark" ? (
                <>
                  <img
                    src="LogoIcon-White.svg"
                    alt=""
                    className="h-5 w-5 pl-2 group-hover:hidden"
                  />
                  <img
                    src="LogoIcon-Red.svg"
                    alt=""
                    className="z-10 hidden h-5 w-5 pl-2 group-hover:inline "
                  />
                </>
              ) : (
                <>
                  <img
                    src="LogoIcon-Red.svg"
                    alt=""
                    className="h-5 w-5 pl-2 group-hover:hidden"
                  />
                  <img
                    src="LogoIcon-White.svg"
                    alt=""
                    className="z-10 hidden h-5 w-5 pl-2 group-hover:inline "
                  />
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
