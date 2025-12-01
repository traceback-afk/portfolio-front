"use client";

import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import type { ListWriteUp, Tag } from "../src/types";
import RevealCard from "~/components/reveal-card";

export default function AllWriteUps() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(false);
  const [writeUps, setWriteUps] = useState<ListWriteUp[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const fetchWriteUps = async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await axios.get(
        "https://ksourmi.pythonanywhere.com/api/blog/",
        {
          params: {
            tags: selectedTags.join(",") || undefined,
            q: searchQuery || undefined,
          },
        }
      );
      if (response.status === 200) {
        setWriteUps(response.data);
      } else {
        setError(true);
      }
    } catch (error: any) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const fetchTags = async () => {
    try {
      const response = await axios.get(
        "https://ksourmi.pythonanywhere.com/api/blog/tags/"
      );
      if (response.status === 200) {
        setTags(response.data);
      } else {
        setTags([]);
      }
    } catch (error: any) {
      setTags([]);
    }
  };

  useEffect(() => {
    fetchTags();
    fetchWriteUps();
  }, []);

  useEffect(() => {
    fetchWriteUps();
  }, [selectedTags, searchQuery]);

  const toggleTag = (tagName: string) => {
    setSelectedTags((prev) =>
      prev.includes(tagName)
        ? prev.filter((name) => name !== tagName)
        : [...prev, tagName]
    );
  };

  return (
    <div
      className="flex flex-col justify-center py-20 px-4 lg:px-20 mt-20 mb-20"
      id="writeups"
    >
      <h1 className="font-md w-full text-center text-4xl mb-10">
        Cybersecurity Writeups
      </h1>

      {/* Search */}
      <div className="flex flex-row w-12/12 justify-center">
        <input
          type="text"
          placeholder="Search writeups..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input input-lg input-bordered mb-8 w-10/12 md:w-4/12 sm:w-12/12"
        />
      </div>

      {/* Tags */}
      <div className="flex flex-row items-center justify-center mb-4 gap-2 flex-wrap">
        {tags.length === 0 ? (
          <p>No tags available.</p>
        ) : (
          tags.map((tag) => (
            <div
              key={tag.id}
              className={`badge badge-soft cursor-pointer ${
                selectedTags.includes(tag.name)
                  ? "badge-outline badge-info"
                  : ""
              }`}
              onClick={() => toggleTag(tag.name)}
            >
              {tag.name}
            </div>
          ))
        )}
      </div>

      {loading ? (
        <div className="flex flex-row justify-center items-center py-10">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : error ? (
        <span className="badge badge-soft badge-error p-10 text-center">
          Oops! Something went wrong while loading WriteUps. Please try again
          later.
        </span>
      ) : (
        <div className="flex flex-col">
          <div className="flex flex-row justify-center flex-wrap">

              {writeUps.length === 0 ? (
                <p className="text-center w-full mt-10">
                  No writeups found.
                </p>
              ) : (
                writeUps.map((writeup) => {
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
                    <AnimatePresence>
                    <motion.div
                      key={writeup.slug}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{
                        duration: 0.3,
                        scale: { type: "spring", bounce: 0.4 },
                      }}
                      className="lg:w-4/12 md:w-5/12 p-2 w-12/12"
                    >
                      <RevealCard delay={0.3}>
                        <Link to={`/writeups/${writeup.slug}`}>
                          <div className="flex flex-col w-full overflow-hidden me-5 h-full border-2 border-base-300 shadow-lg">
                            <div className="card-body flex flex-col p-4 bg-base-100">
                              <h2 className="card-title text-xl -mb-1">
                                {writeup.title}
                              </h2>
                              <p className="text-sm text-base-content/80">
                                {writeup.description}
                              </p>
                              <small className="text-gray-500">
                                {humanReadable}
                              </small>
                            </div>
                          </div>
                        </Link>
                      </RevealCard>
                    </motion.div>
                    </AnimatePresence>
                  );
                })
              )}

          </div>
        </div>
      )}
    </div>
  );
}
