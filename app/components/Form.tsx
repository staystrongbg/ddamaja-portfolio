// 'use server';
const Form = () => {
  const sendEmail = async (formData: FormData) => {
    const subject = formData.get('subject');
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
  };
  return (
    <form
      action={sendEmail}
      className="flex flex-col gap-4 p-4 w-[600px] h-fit border border-purple-300  dark:border-purple-900 rounded-lg shadow-lg
"
    >
      <input
        type="text"
        placeholder="Subject"
        name="subject"
        className="px-4 py-2  border-b border-purple-300   focus:bg-purple-950/10 dark:border-purple-900 bg-transparent outline-none placeholder:text-gray-700 dark:text-fuchsia-400"
      />
      <input
        type="text"
        placeholder="Name"
        name="name"
        className="px-4 py-2   border-b border-purple-300  focus:bg-purple-950/10 dark:border-purple-900 bg-transparent outline-none placeholder:text-gray-700 dark:text-fuchsia-400"
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        className="px-4 py-2   border-b border-purple-300  focus:bg-purple-950/10 dark:border-purple-900 bg-transparent outline-none placeholder:text-gray-700 dark:text-fuchsia-400"
      />
      <textarea
        placeholder="Message"
        name="message"
        className="px-4 py-2 w-full min-h-[200px]  border focus:bg-purple-950/10 border-purple-300 dark:border-purple-900 bg-transparent rounded-lg outline-none placeholder:text-gray-700 dark:text-fuchsia-400"
      ></textarea>
      <button className="py-2 px-4 rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 text-700 text-white w-fit font-bold ">
        Send
      </button>
    </form>
  );
};

export default Form;
