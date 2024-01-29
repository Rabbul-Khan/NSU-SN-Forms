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
    <div className="max-w-1/2 flex h-full w-1/2 min-w-full flex-col items-center justify-center rounded-md bg-white p-5 shadow-lg sm:h-[90%] sm:min-w-min xl:w-[1000px] xl:flex-row">
      <div className="hidden max-h-full w-auto items-center justify-center xl:flex xl:w-1/2">
        <img
          src="contact.svg"
          alt=""
          className="min-w-10 max-w-80 px-10 md:max-w-md xl:max-w-xl xl:px-10"
        />
      </div>
      <Card className=" xl:w-1/2">
        <CardHeader>
          <CardTitle className="text-3xl xl:text-4xl">Get in Touch!</CardTitle>
          <CardDescription className="xl:text-md">
            Feel free to reach out to us using the form below
          </CardDescription>
        </CardHeader>

        <CardContent className="">
          <form
            ref={form}
            onSubmit={sendEmail}
            id="contactForm"
            className="grid w-full max-w-sm items-center gap-5"
          >
            <div className="grid w-full max-w-sm items-center gap-2">
              <Label htmlFor="user_name">
                Name <sup className="text-xs text-red-500">*</sup>
              </Label>
              <Input
                required
                type="text"
                id="user_name"
                placeholder="John Doe"
                className=""
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-2">
              <Label htmlFor="user_email">
                Email <sup className="text-xs text-red-500">*</sup>
              </Label>
              <Input
                required
                type="email"
                id="user_email"
                placeholder="john.doe@gmail.com"
                className=""
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                placeholder="Provide a concise subject..."
                className=""
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-2">
              <Label htmlFor="message">
                Message <sup className="text-xs text-red-500">*</sup>
              </Label>
              <Textarea
                required
                id="message"
                placeholder="Type your message here..."
                className=""
              />
            </div>

            <Button
              type="submit"
              className="relative ml-auto mt-6 flex h-[50px] w-40 items-center justify-center overflow-hidden bg-[#fbc2eb] text-black shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#a6c1ee] before:duration-700 before:ease-out hover:scale-105 hover:shadow-[#a6c1ee] hover:before:h-56 hover:before:w-56 active:scale-95"
            >
              <span className="relative z-10">Submit</span>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
