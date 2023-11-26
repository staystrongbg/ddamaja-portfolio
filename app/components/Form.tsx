'use client';

import { useRef, useState } from 'react';
import { sendEmail } from '../lib/actions';
import Button from './Button';
import emailjs from '@emailjs/browser';
const Form = () => {
  const [responseResult, setResponseResult] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const resetForm = () => {
    formRef.current?.reset();
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formRef.current?.elements);

    emailjs
      .sendForm(
        'service_zzd160n',
        'template_v9zm3r5',
        formRef.current as HTMLFormElement,
        'user_c6RYBq55w7YHC8Ig0xPNf'
      )
      .then(
        (result) => {
          setResponseResult('Thank you for your message!');
          setTimeout(() => {
            setResponseResult('');
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setResponseResult('Something went wrong, please try again later!');
          setTimeout(() => {
            setResponseResult('');
          }, 3000);
        }
      );
    resetForm();
  };
  return (
    <form
      ref={formRef}
      // this approach is using server actions and resend library via sendemail fn
      // action={async (formData) => {
      //   formRef.current?.reset();
      //   await sendEmail(formData);
      // }}
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 w-[600px] h-fit border border-purple-200  dark:border-purple-900 rounded-lg shadow-lg
"
    >
      <input
        type="text"
        placeholder="Subject"
        name="user_subject"
        className="px-4 py-2  border-b border-purple-200   focus:bg-purple-950/10 dark:border-purple-900 bg-transparent outline-none placeholder:text-gray-700 dark:text-fuchsia-400"
      />
      <input
        type="text"
        placeholder="Name"
        name="user_name"
        className="px-4 py-2   border-b border-purple-200  focus:bg-purple-950/10 dark:border-purple-900 bg-transparent outline-none placeholder:text-gray-700 dark:text-fuchsia-400"
      />
      <input
        type="email"
        placeholder="Email"
        name="user_email"
        className="px-4 py-2   border-b border-purple-200  focus:bg-purple-950/10 dark:border-purple-900 bg-transparent outline-none placeholder:text-gray-700 dark:text-fuchsia-400"
      />
      <textarea
        placeholder="Message"
        name="message"
        className="px-4 py-2 w-full min-h-[200px]  border focus:bg-purple-950/10 border-purple-200 dark:border-purple-900 bg-transparent rounded-lg outline-none placeholder:text-gray-700 dark:text-fuchsia-400"
      ></textarea>
      {/* this has to eb its own client component inside form element */}
      <Button />
      {responseResult && (
        <p className="text-center text-gray-700 dark:text-fuchsia-400">
          {responseResult}
        </p>
      )}
    </form>
  );
};

export default Form;
