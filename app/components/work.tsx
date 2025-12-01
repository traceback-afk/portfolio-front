"use client";

import { motion } from "motion/react";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import type { ListProject } from "../src/types";
import RevealCard from "./reveal-card";

export default function FeaturedProjects() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(false);
  const [projects, setProjects] = useState<ListProject[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await axios.get(
          "https://ksourmi.pythonanywhere.com/api/project/"
        );

        if (response.status === 200) {

          setProjects(response.data);
        } else {
          setError(true);
        }
      } catch (error: any) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="flex flex-col justify-center py-20 px-4 lg:px-10" id="work">
      {loading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : error ? (
        <span className="badge badge-soft badge-error p-10 text-center">
          Oops! Something went wrong while loading projects. Please try again
          later.
        </span>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            scale: { type: "spring", bounce: 0.4 },
            delay: 0.2,
          }}
          className="flex flex-col"
        >
          <h1 className="font-md  w-full text-center text-5xl mb-10">
            My Work
          </h1>
          <div className="flex flex-row justify-center flex-wrap">
            {projects.map((project) => (
              <RevealCard delay={0.3} className="lg:w-4/12 md:w-5/12 p-2">
                <Link key={project.id} to={`/projects/${project.slug}`}>
                  <div className="flex flex-col w-full overflow-hidden me-5 h-full border-2 border-base-300 shadow-lg">
                    <figure className="shadow-md">
                      <motion.img
                        src={"https://ksourmi.pythonanywhere.com/" + project.image.image}
                        alt={project.name}
                        className=""
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    </figure>
                    <div className="card-body flex flex-col p-4 bg-base-100">
                      <h2 className="card-title text-xl -mb-1">
                        {project.name}
                      </h2>

                      <p className="text-sm text-base-content/80">
                        {project.short_description}
                      </p>
                    </div>
                  </div>
                </Link>
              </RevealCard>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
