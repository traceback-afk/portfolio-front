import { Bars2Icon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="navbar py-4 flex justify-center absolute z-10">
      <div className="navbar-start w-auto absolute left-0 px-4 pt-6 lg:px-10 lg:py-4">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Bars2Icon className="size-8" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-lg"
          >
            <li>
              {isHomePage ? (
                <ScrollLink
                  to="hero"
                  smooth="easeOutQuad"
                  duration={600}
                  className="hover:bg-transparent hover:text-primary"
                >
                  <h1>// home</h1>
                </ScrollLink>
              ) : (
                <Link
                  to="/#hero"
                  className="hover:bg-transparent hover:text-primary"
                >
                  <h1>// home</h1>
                </Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <ScrollLink
                  to="expertise"
                  smooth="easeOutQuad"
                  duration={600}
                  className="hover:bg-transparent hover:text-primary"
                >
                  <h1>// expertise</h1>
                </ScrollLink>
              ) : (
                <Link
                  to="/#expertise"
                  className="hover:bg-transparent hover:text-primary"
                >
                  <h1>// expertise</h1>
                </Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <ScrollLink
                  to="work"
                  smooth="easeOutQuad"
                  duration={600}
                  className="hover:bg-transparent hover:text-primary"
                >
                  <h1>// work</h1>
                </ScrollLink>
              ) : (
                <Link
                  to="/#work"
                  className="hover:bg-transparent hover:text-primary"
                >
                  <h1>// work</h1>
                </Link>
              )}
            </li>

            <li>
              {isHomePage ? (
                <ScrollLink
                  to="contact"
                  smooth="easeOutQuad"
                  duration={600}
                  className="hover:bg-transparent hover:text-primary"
                >
                  <h1>// contact</h1>
                </ScrollLink>
              ) : (
                <Link
                  to="/#contact"
                  className="hover:bg-transparent hover:text-primary"
                >
                  <h1>// contact</h1>
                </Link>
              )}
            </li>
          </ul>
        </div>
        <Link to={"/"} className="font-bold text-3xl">
          sourmi
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-2xl flex gap-4">
          <li>
            {isHomePage ? (
              <ScrollLink
                to="hero"
                smooth="easeOutQuad"
                duration={600}
                className="hover:bg-transparent hover:text-primary"
              >
                <h1>// home</h1>
              </ScrollLink>
            ) : (
              <Link
                to="/#hero"
                className="hover:bg-transparent hover:text-primary"
              >
                <h1>// home</h1>
              </Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <ScrollLink
                to="expertise"
                smooth="easeOutQuad"
                duration={600}
                className="hover:bg-transparent hover:text-primary"
              >
                <h1>// expertise</h1>
              </ScrollLink>
            ) : (
              <Link
                to="/#expertise"
                className="hover:bg-transparent hover:text-primary"
              >
                <h1>// expertise</h1>
              </Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <ScrollLink
                to="work"
                smooth="easeOutQuad"
                duration={600}
                className="hover:bg-transparent hover:text-primary"
              >
                <h1>// work</h1>
              </ScrollLink>
            ) : (
              <Link
                to="/#work"
                className="hover:bg-transparent hover:text-primary"
              >
                <h1>// work</h1>
              </Link>
            )}
          </li>

          <li>
            {isHomePage ? (
              <ScrollLink
                to="contact"
                smooth="easeOutQuad"
                duration={600}
                className="hover:bg-transparent hover:text-primary"
              >
                <h1>// contact</h1>
              </ScrollLink>
            ) : (
              <Link
                to="/#contact"
                className="hover:bg-transparent hover:text-primary"
              >
                <h1>// contact</h1>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
