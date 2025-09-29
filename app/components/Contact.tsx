"use client";
import { useInView } from "react-intersection-observer";
import { useObserverContext } from "../context/intersectionObserver";
import { useEffect } from "react";
import Form from "./Form";
import Image from "next/image";
import { socialIcons } from "../lib/data";
import { useTheme } from "next-themes";
import Glow from "./common/Glow";
import { SocialIcons } from "../@types";
import ThemedImage from "./common/ThemedImage";

function Contact() {
  const { inView: contactInView, ref: contactRef, entry } = useInView();
  const { setActiveSection } = useObserverContext();
  // const { theme, resolvedTheme } = useTheme();
  useEffect(() => {
    if (entry?.isIntersecting) {
      setActiveSection("contact");
      // entry?.target.scrollIntoView({
      //   behavior: 'smooth',
      //   block: 'center',
      // });
    }
  }, [entry?.isIntersecting]);

  return (
    <div
      id="contact"
      className=" flex flex-col lg:flex-row items-center w-screen my-8 min-h-screen gap-20"
    >
      <div className="flex gap-4 flex-col  ">
        <h3
          className="text-[4em] dark:text-[#55cebc] relative"
          ref={contactRef}
        >
          Contact
        </h3>
        <div className="flex flex-col gap-10 mt-12">
          {socialIcons.map((item, idx) => (
            <a
              href={item.url}
              key={idx}
              className="flex gap-4 items-center dark:text-gray-400"
              target="_blank"
            >
              <span className="relative">
                {/* <Image
                  src={ThemedImage(item.image)}
                  alt={item.title}
                  width={32}
                  height={32}
                  className=""
                /> */}
                <ThemedImage themeImage={item} />
                <Glow
                  background="bg-gradient-to-r from-yellow-500 to-pink-100"
                  width="w-full"
                  height="h-[20px]"
                />
              </span>
              <span>{item.title}</span>
            </a>
          ))}
        </div>
      </div>
      <Form />
    </div>
  );
}

export default Contact;
