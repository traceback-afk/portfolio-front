"use client";

import { useParams } from "react-router";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import type { GetWriteUp } from "~/src/types";
import { Link } from "react-router";
import { Link as ScrollLink } from "react-scroll";
import axios from "axios";
import ReactMarkdown from "react-markdown"

export default function ProjectDetail() {
  const { slug } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(false);
  const [writeUp, setWriteUp] = useState<GetWriteUp>();
  const [createdAt, setCreatedAt] = useState("");

  useEffect(() => {
    const fetchWriteUp = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await axios.get(
          `https://ksourmi.pythonanywhere.com/api/blog/${slug}`
        );

        if (response.status === 200) {
          setWriteUp(response.data);
          const date = new Date(response.data.created_at);
          const humanReadable = date.toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          });
          setCreatedAt(humanReadable);
        } else {
          setError(true);
        }
      } catch (error: any) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchWriteUp();
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center py-30 lg:py-40"
      id="project-detail"
    >
      {loading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : error ? (
        <span className="badge badge-soft badge-error">
          Something went wrong. Try again later.
        </span>
      ) : (
        <div className="flex flex-col w-12/12 sm:w-12/12 md:w-10/12 lg:w-7/12 bg-base-100 py-2 px-5 md:px-10">
            <div className="breadcrumbs text-sm">
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/#writeups"}>Cybersecurity Writeups</Link>
                </li>
                <li className="text-primary">{writeUp?.title}</li>
              </ul>
            </div>
            <div className="mb-20">
              <h1 className="font-md text-3xl my-4 md:text-5xl">
              {writeUp?.title}
              </h1>
              <p className="text-gray-300 mb-4 lg:w-5/12 md:w-6/12">
                {writeUp?.description}
              </p>
              <small className="text-gray-500">{createdAt}</small>
            </div>

          <div className="prose prose-body dark:prose-invert">
            <ReactMarkdown>{writeUp?.content}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}
