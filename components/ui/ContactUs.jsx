import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Button } from "./button";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     'service_me9rx0l',
    //     'template_e0h96qw',
    //     form.current,
    //     'aJz1bNkxownFkofBi'
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <div className="max-w-1/2 flex w-1/2 min-w-full flex-col items-center justify-center rounded-md bg-white p-5 shadow-lg sm:min-w-min xl:flex-row">
      <div className="flex w-auto items-center justify-center xl:w-1/2">
        <img
          src="contact.svg"
          alt=""
          className="max-w-sm md:max-w-md xl:max-w-full"
        />
      </div>
      <Card className=" xl:w-1/2">
        <CardHeader>
          <CardTitle className="text-3xl">Get in Touch!</CardTitle>
          <CardDescription>
            Feel free to reach out to us using the form below
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            ref={form}
            onSubmit={sendEmail}
            id="contactForm"
            className="grid w-full max-w-sm items-center gap-3"
          >
            <div className="grid w-full max-w-sm items-center gap-2">
              <Label htmlFor="user_name">Name</Label>
              <Input
                required
                type="text"
                id="user_name"
                placeholder="John Doe"
                className="shadow-sm focus-visible:ring-[#a6c1ee] invalid:focus-visible:ring-[#e2797e]"
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-2">
              <Label htmlFor="user_email">Email</Label>
              <Input
                required
                type="email"
                id="user_email"
                placeholder="john.doe@gmail.com"
                className="shadow-sm focus-visible:ring-[#a6c1ee] invalid:focus-visible:ring-[#e2797e]"
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                placeholder="Provide a concise subject..."
                className="shadow-sm focus-visible:ring-[#a6c1ee] "
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Type your message here..."
                className="shadow-sm focus-visible:ring-[#a6c1ee] "
              />
            </div>

            <Button
              type="submit"
              className="relative ml-auto mt-2 flex h-[50px] w-40 items-center justify-center overflow-hidden bg-[#fbc2eb] text-black shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#a6c1ee] before:duration-700 before:ease-out hover:scale-105 hover:shadow-[#a6c1ee] hover:before:h-56 hover:before:w-56 active:scale-95"
            >
              <span className="relative z-10">Submit</span>
            </Button>
            {/* 
            <button class="">
              <span class="relative z-10">Circle hover</span>
            </button> */}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
