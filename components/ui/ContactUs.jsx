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

export const ContactUs = () => {
  const form = useRef();

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
    <div className="flex flex-col items-center justify-center bg-[#FEF6FC] duration-700 animate-in fade-in zoom-in sm:rounded-xl sm:p-5 sm:shadow-lg lg:flex-row xl:w-[1000px]">
      <img
        src="contact.svg"
        alt="Illustrated image of a woman holding an envelope. A mobile and a phone is in the background."
        className="max-w-80 sm:pt-5 md:max-w-96 lg:pt-0 xl:max-w-[28rem]"
      />

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl lg:text-4xl">Get in Touch!</CardTitle>
          <CardDescription className="text-sm lg:text-base">
            Feel free to reach out to us using the form below
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            ref={form}
            onSubmit={sendEmail}
            id="contactForm"
            className="grid w-full items-center gap-5"
          >
            <div className="grid gap-2">
              <Label>Name</Label>
              <Input
                required
                type="text"
                name="user_name"
                placeholder="John Doe"
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
              className="relative ml-auto mt-5 h-[50px] w-full overflow-hidden bg-[#fbc2eb] text-base text-[#333333] shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#a6c1ee] before:duration-700 before:ease-out hover:scale-105 hover:shadow-[#a6c1ee] hover:before:h-96 hover:before:w-96 active:scale-95 lg:w-44  lg:hover:before:h-56 lg:hover:before:w-56"
            >
              <span className="relative z-10">Send Message</span>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
