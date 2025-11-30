"use client";

import { motion } from "motion/react";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import type { ListWriteUp } from "../src/types";
import RevealCard from "./reveal-card";

export default function WriteUps() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(false);
  const [writeUps, setWriteUps] = useState<ListWriteUp[]>([]);
  const [createdAt, setCreatedAt] = useState("");

  useEffect(() => {
    const fetchWriteUps = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await axios.get(
          "https://ksourmi.pythonanywhere.com/api/blog/"
        );
        if (response.status === 200) {
          setWriteUps(response.data);
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

    fetchWriteUps();
  }, []);

  return (
    <div className="flex flex-col justify-center py-20 px-4 lg:px-10" id="writeups">
      {loading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : error ? (
        <span className="badge badge-soft badge-error p-10 text-center">
          Oops! Something went wrong while loading WriteUps. Please try again
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
            Cybersecurity Writeups
          </h1>
          <div className="flex flex-row justify-center flex-wrap">
            {writeUps.map((writeup) => {
              const humanReadable = writeup.created_at
                ? new Date(writeup.created_at).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })
                : "";
              return (
                <RevealCard
                  key={writeup.slug}
                  delay={0.3}
                  className="lg:w-4/12 md:w-5/12 p-2"
                >
                  <Link to={`/writeups/${writeup.slug}`}>
                    <div className="flex flex-col w-full overflow-hidden me-5 h-full border-2 border-base-300 shadow-lg">
                      <div className="card-body flex flex-col p-4 bg-base-100">
                        <h2 className="card-title text-xl -mb-1">{writeup.title}</h2>
                        <p className="text-sm text-base-content/80">{writeup.description}</p>
                        <small className="text-gray-500">{humanReadable}</small>
                      </div>
                    </div>
                  </Link>
                </RevealCard>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
}
