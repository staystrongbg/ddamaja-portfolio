'use client';
import { experimental_useFormStatus } from 'react-dom';
const Button = () => {
  const { pending } = experimental_useFormStatus();
  return (
    <button className="py-2 px-4 rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 text-700 text-white w-fit font-bold ">
      {pending ? 'Sending...' : 'Send'}
    </button>
  );
};

export default Button;
