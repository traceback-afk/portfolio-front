"use client";

import { useParams } from "react-router";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import type { GetProject } from "~/src/types";
import { Link } from "react-router";
import { Link as ScrollLink } from "react-scroll";
import axios from "axios";

export default function ProjectDetail() {
  const { slug } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(false);
  const [project, setProject] = useState<GetProject>();

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await axios.get(
          `https://ksourmi.pythonanywhere.com/api/project/${slug}`
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
              <img key={image.id} src={"https://ksourmi.pythonanywhere.com/" + image.image} className="w-full" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
