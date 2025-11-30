import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";

export default function ScrollUpButton() {
  const [upButtonShow, setUpButtonShow] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      setUpButtonShow(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollLink
      to="body"
      smooth="easeOutQuad"
      duration={400}
      className={`flex md:invisible md:pointer-events-none fixed bottom-0 right-0 mx-4 w-12 h-12 justify-center items-center shadow-2xl lg:mx-10 mb-4 bg-white  transition-opacity ease-in-out duration-300 ${
        upButtonShow ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <i className="bi bi-arrow-up-short text-3xl text-secondary"></i>
    </ScrollLink>
  );
}
