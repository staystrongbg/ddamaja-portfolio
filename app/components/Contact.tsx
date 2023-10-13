'use client';
import { useInView } from 'react-intersection-observer';
import { useObserverContext } from '../context/intersectionObserver';
import { useEffect } from 'react';

function Contact() {
  const { inView: contactInView, ref: contactRef, entry } = useInView();
  const { setActiveSection, shouldObserverHandleScroll } = useObserverContext();

  useEffect(() => {
    if (entry?.isIntersecting && shouldObserverHandleScroll) {
      setActiveSection('contact');
      entry?.target.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [entry?.isIntersecting]);

  return (
    <div
      id="contact"
      className="flex-col flex-container-center my-8 min-h-screen"
    >
      <h3 ref={contactRef}>Contact</h3>
      Contact social media, email, phone, github
    </div>
  );
}

export default Contact;
