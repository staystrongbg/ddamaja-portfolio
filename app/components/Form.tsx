import { sendEmail } from "../lib/actions";
import Button from "./Button";

const Form = () => {
  return (
    <form
      action={sendEmail}
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
        name="user_message"
        className="px-4 py-2 w-full min-h-[200px]  border focus:bg-purple-950/10 border-purple-200 dark:border-purple-900 bg-transparent rounded-lg outline-none placeholder:text-gray-700 dark:text-fuchsia-400"
      ></textarea>
      <Button>Send</Button>
    </form>
  );
};

export default Form;
