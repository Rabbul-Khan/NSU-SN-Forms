import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Input } from './input';
import { Label } from './label';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_niilrbe',
        'template_oynokhb',
        form.current,
        'iIdd-YSULKO9834ya'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="user_name">Name</Label>
        <Input type="text" id="user_name" placeholder="John Doe" className="" />
      </div>
      {/* <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Subject</label>
      <input type="subject" name="subject" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" /> */}
    </form>
  );
};
