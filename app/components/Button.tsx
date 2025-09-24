"use client";
import { useFormStatus } from "react-dom";

const Button = ({ children }: { children: React.ReactNode }) => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="py-2 px-4 rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 text-700 text-white w-fit font-bold "
    >
      {pending ? "Sending..." : children}
    </button>
  );
};

export default Button;
