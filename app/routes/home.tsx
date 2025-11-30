import Hero from "~/components/hero";
import FeaturedProjects from "~/components/work";
import About from "../components/about";
import Contact from "~/components/contact";
import Expertise from "~/components/expertise";
import WriteUps from "~/components/writeups";

export default function Home() {
  return (
    <div>
      <Hero />
      <WriteUps/>
      <Expertise/>
      <FeaturedProjects />
      {/* <About /> */}
      <Contact />
    </div>
  );
}
