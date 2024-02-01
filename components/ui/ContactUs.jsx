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
  const { context } = useTheme();

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
    <div className="sm:drop-shadow-red flex min-h-full min-w-full flex-col items-center justify-center gap-10 bg-[#E40046] py-10 duration-700 animate-in fade-in zoom-in dark:bg-[#222222] dark:drop-shadow-lg sm:min-w-[475px] sm:rounded-xl sm:p-5 sm:shadow-lg md:min-w-[550px] lg:min-w-[850px] lg:flex-row xl:w-[1000px]">
      <ModeToggle />

      <img
        src="Logo.svg"
        alt="Illustrated image of a woman holding an envelope. A mobile and a phone is in the background."
        className="max-w-80 sm:pt-5 md:max-w-96 lg:pl-5 lg:pt-0 xl:max-w-[28rem]"
      />

      <Card className="min-w-full  grow dark:bg-[#272727] dark:drop-shadow-lg lg:min-w-fit">
        <CardHeader>
          <CardTitle className=" text-3xl text-[#E40046] dark:text-[#E40046] lg:text-5xl">
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
            className="grid items-center w-full gap-5 "
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
                Subject <span className="text-slate-500">(optional)</span>
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
              className="relative mr-auto mt-5 h-[50px] w-full overflow-hidden border-2 bg-[#fff] text-base text-[#E40046] shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#E40046] before:duration-700 before:ease-out hover:scale-105 hover:text-[white] hover:shadow-[#E40046] hover:before:h-96 hover:before:w-96 active:scale-95 dark:bg-[#E40046]  dark:text-white dark:before:bg-[#ffffff] dark:hover:text-[#E40046] dark:hover:shadow-lg lg:w-44 lg:hover:before:h-56 lg:hover:before:w-56"
            >
              <span className="relative z-10">Send Message</span>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
