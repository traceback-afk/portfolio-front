"use client";

import { useParams } from "react-router";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import type { Project } from "~/src/types";
import { Link } from "react-router";
import { Link as ScrollLink } from "react-scroll";
import axios from "axios";

export default function ProjectDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(false);
  const [project, setProject] = useState<Project>();

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await axios.get(
          `https://ksourmi.pythonanywhere.com/api/projects/${id}`
        );

        if (response.status === 200) {
          setProject(response.data);
        } else {
          setError(true);
        }
      } catch (error: any) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center px-4 lg:px-10 py-30 lg:py-40"
      id="project-detail"
    >
      {loading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : error ? (
        <span className="badge badge-soft badge-error">
          Something went wrong. Try again later.
        </span>
      ) : (
        <div>
          <div className="mb-4">
            <h1 className="font-md text-3xl  mt-4 md:text-5xl">
              {project?.name}
            </h1>
            <div className="breadcrumbs text-sm my-20">
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/#work"}>Portfolio</Link>
                </li>
                <li>{project?.name}</li>
              </ul>
            </div>
            <p className="text-gray-300 mb-4 lg:w-5/12 md:w-6/12">
              {project?.description}
            </p>
            <a
              href={project?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-secondary btn-lg mt-2 inline-flex items-center"
            >
              <i className="bi bi-code me-2 text-2xl"></i>
              View On GitHub
            </a>
          </div>
          <div className="flex flex-col w-full gap-4">
            {project?.images.map((image) => (
              <img key={image.id} src={image.image} className="w-full" />
            ))}
          </div>
          {/* <div className="flex gap-2">
            {project?.tools.map((tool) => (
              <img
                key={tool.id}
                className="w-8 h-8"
                src={tool.icon}
                alt={tool.name}
              />
            ))}
          </div>

          <div className="flex flex-row flex-wrap gap-2 mt-2 mb-4 justify-center">
            {project?.tags.map((tag) => (
              <div
                key={tag.id}
                className="badge badge-outline badge-sm text-gray-500"
              >
                {tag.name}
              </div>
            ))}
          </div> */}
        </div>
      )}
    </div>
  );
}
