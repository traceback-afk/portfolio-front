import { useState } from "react";
import axios from "axios";
import { Link } from "react-router";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [rateLimited, setRateLimited] = useState(false);
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setRateLimited(false);

    try {
      const response = await axios.post(
        "https://ksourmi.pythonanywhere.com/api/contact/",
        { name, email, message }
      );

      if (response.status === 200) {
        setDone(true);
      } else {
        setError(true);
      }
    } catch (error: any) {
      if (error.response?.status === 429) {
        setRateLimited(true);
      } else {
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center py-20 flex-wrap px-10" id="contact">
      <div className="flex flex-col w-full md:w-7/12 lg:w-5/12">
        <h1 className="font-md text-5xl mb-4 text-center">
          Get In Touch
        </h1>
        <p className="text-gray-300 text-center text-xl">
          I'm always open to discussing new projects, creative ideas, or
          opportunities. Feel free to reach out.
        </p>
        <form onSubmit={sendMessage}>
          <fieldset className="fieldset py-4 w-full">
            <input
              type="text"
              className="input w-full input-lg rounded-none"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <div className="input validator w-full input-lg rounded-none">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
            <textarea
              className="textarea textarea-bordered w-full resize-none input-lg rounded-none"
              rows={5}
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </fieldset>
          <div className="flex flex-col justify-between items-center">
            {rateLimited && (
              <span className="badge badge-soft badge-error">
                Too many requests
              </span>
            )}
            {error && (
              <span className="badge badge-soft badge-error">
                Something went wrong
              </span>
            )}
            <button
              type="submit"
              className="btn btn-secondary btn-lg rounded-none"
            >
              {loading && (
                <span className="loading loading-spinner loading-md"></span>
              )}
              {done && !loading && (
                <i className="bi bi-check text-2xl text-white"></i>
              )}
              {!loading && !done && (
                <i className="bi bi-rocket-takeoff text-xl me-2"></i>
              )}
              {!loading && !done && "Send Message"}
              {loading && "Sending..."}
              {done && !loading && " Sent!"}
            </button>
            <p className="text-sm my-2 text-gray-300">OR</p>
            <button className="btn btn-outline btn-secondary btn-lg rounded-none">
              <i className="bi bi-arrow-right-short text-3xl"></i>
              Email Me Directly
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
