import RevealCard from "./reveal-card";


export default function Expertise() {
  return (
    <div
      id="expertise"
      className="flex flex-col items-center py-20 lg:px-20 px-10"
    >
      <h1 className="w-full text-center text-5xl mb-10">My Expertise</h1>
      <div className="flex justify-center flex-wrap">
        <RevealCard delay={0} className="react-card flex lg:w-1/3 sm:w-full gap-4 border-2 border-base-300 px-4 py-10 bg-base-100 lg:min-h-60">
          <i className="bi bi-chevron-right text-3xl"></i>
          <div>
            <h1 className="text-2xl mb-4">Programming Foundations</h1>
            <p>
              Proficient in <span className="text-info">Python</span>,{" "}
              <span className="text-info">JavaScript</span>,{" "}
              <span className="text-info">TypeScript</span>, and{" "}
              <span className="text-info">SQL</span>, with a strong grasp of
              OOP, functional programming, and test-driven development.
            </p>
          </div>
        </RevealCard>

        <RevealCard delay={0.2} className="django-card flex lg:w-1/3 sm:w-full gap-4 border-2 border-base-300 p-4 py-10 bg-base-100 lg:min-h-60">
          <i className="bi bi-chevron-right text-3xl"></i>
          <div>
            <h1 className="text-2xl mb-4">Web Development</h1>
            <p>
              Experienced in <span className="text-info">React</span>,{" "}
              <span className="text-info">Django Ninja</span>,{" "}
              <span className="text-info">Django REST Framework</span> and{" "}
              <span className="text-info">Postman</span>, building responsive
              UIs and scalable APIs.
            </p>
          </div>
        </RevealCard>

        <RevealCard delay={0.3} className="docker-card flex lg:w-1/3 sm:w-full gap-4 border-2 border-base-300 p-4 py-10 bg-base-100 lg:min-h-60">
          <i className="bi bi-chevron-right text-3xl"></i>
          <div>
            <h1 className="text-2xl mb-4">Tools & DevOps Essentials</h1>
            <p>
              Skilled with <span className="text-info">Linux</span>,{" "}
              <span className="text-info">Docker</span>, and{" "}
              <span className="text-info">Git</span> for streamlined
              development, containerization, and version control.
            </p>
          </div>
        </RevealCard>
      </div>
    </div>
  );
}
