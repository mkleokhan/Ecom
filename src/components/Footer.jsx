import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <center>
        {" "}
        <footer className="bg-white dark:bg-gray-900 border mb-0">
          <div className="mx-auto w-full max-w-screen-xl">
            {/* Footer Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-8 px-16 py-4 lg:py-4 ">
              {/* Company Section */}
              <div className="text-center md:text-left">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Company
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="/About" className="hover:underline">
                      About
                    </Link>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Careers
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Brand Center
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              {/* Help Center Section */}
              <div className="text-center md:text-left">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Help center
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Discord Server
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Twitter
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Facebook
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal Section */}
              <div className="text-center md:text-left">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Licensing
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="px-4 py-6 bg-blue-900 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-sm text-white dark:text-white text-center">
              © 2024{" "}
              <a
                href="https://www.github.com/mkleokhan"
                target="_blank"
                className="hover:underline"
              >
                Muhammad Kamran
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </center>
    </>
  );
};

export default Footer;
