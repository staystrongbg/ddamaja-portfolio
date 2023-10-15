'use client';
import { useInView } from 'react-intersection-observer';
import { useObserverContext } from '../context/intersectionObserver';
import { useEffect } from 'react';
import Form from './Form';
import Image from 'next/image';

function Contact() {
  const { inView: contactInView, ref: contactRef, entry } = useInView();
  const { setActiveSection } = useObserverContext();

  useEffect(() => {
    if (entry?.isIntersecting) {
      setActiveSection('contact');
      // entry?.target.scrollIntoView({
      //   behavior: 'smooth',
      //   block: 'center',
      // });
    }
  }, [entry?.isIntersecting]);

  return (
    <div
      id="contact"
      className=" flex  justify-around items-center w-screen my-8 min-h-screen"
    >
      <div className="flex gap-4 flex-col  ">
        <h3 className="text-[4em]" ref={contactRef}>
          Contact
        </h3>
        <div className="flex gap-4">
          <Image src="" alt="" width={32} height={32} />
          email
        </div>
        <div className="flex gap-4">
          <Image src="" alt="" width={32} height={32} />
          linkedin
        </div>
        <div className="flex gap-4">
          <Image src="" alt="" width={32} height={32} />
          github
        </div>
      </div>
      {/* Contact social media, email, phone, github */}
      <Form />
    </div>
  );
}

export default Contact;
