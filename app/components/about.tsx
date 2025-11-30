import { motion } from "motion/react";

export default function About() {
  return (
    <div className="flex flex-col justify-center mb-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          scale: { type: "spring", bounce: 0.4 },
        }}
      >
        <div>
          <h1 className="font-md text-3xl mb-4 text-center mt-10">About Me</h1>
          <p className="text-gray-300 text-center">
            I'm a web developer working on real world projects and constantly
            improving my skills. I work with Django, React and Postman and use
            tools like Docker to build and deploy scalable web apps. The tech
            world is always changing so I'm constantly learning something new to
            stay relevant and up to date.
          </p>
        </div>
        <div className="flex w-full h-20 justify-center my-10">
          <div className="divider divider-horizontal "></div>
        </div>
        <div>
          <h1 className="font-md text-3xl mb-4 text-center">Tech Stack</h1>
          <div className="flex flex-row gap-2 flex-wrap justify-center">
            <div className="badge badge-xl badge-outline badge-info">
              Python
            </div>
            <div className="badge badge-xl badge-outline badge-info">
              JavaScript
            </div>
            <div className="badge badge-xl badge-outline badge-info">C++</div>
            <div className="badge badge-xl badge-outline badge-info">SQL</div>
            <div className="badge badge-xl badge-outline badge-info">Linux</div>
            <div className="badge badge-xl badge-outline badge-info">HTML</div>
            <div className="badge badge-xl badge-outline badge-info">CSS</div>
            <div className="badge badge-xl badge-outline badge-info">
              Django
            </div>
            <div className="badge badge-xl badge-outline badge-info">
              Django REST Framework
            </div>
            <div className="badge badge-xl badge-outline badge-info">React</div>
            <div className="badge badge-xl badge-outline badge-info">
              Docker
            </div>
          </div>
        </div>
        <div className="flex w-full h-20 justify-center my-10">
          <div className="divider divider-horizontal "></div>
        </div>
        <div className="">
          <h1 className="font-md text-3xl mb-4 text-center">Certificates</h1>
          <div className="flex flex-row">
            <div className="flex justify-between border border-base-300 rounded-xl p-4 items-center bg-base-200/30">
              <div className="me-4">
                <h1 className="font-bold text-gray-200">
                  <span></span>CS50's Introduction to Programming with Python
                </h1>
                <p className="text-gray-400">
                  Harvard University - edX | 2024 Instructor: Prof. David J.
                  Malan
                </p>
              </div>

              <a
                className="btn btn-soft btn-info"
                href="https://cs50.harvard.edu/certificates/d52d72a3-9cc9-4327-b475-708a071a35b4"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
