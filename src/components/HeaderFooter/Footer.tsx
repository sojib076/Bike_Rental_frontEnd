import { Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-gray-800 mt-20 pt-10  dark:mt-[-20px] dark:pt-0 border-t-2 border-lime-500">
      <footer className="bg-gray-900 pt-8 pb-6 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 my-2">
                Find us on any of these platforms, we respond in 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6 flex">
                <a
                  href="https://facebook.com"
                  className="bg-gray-800 text-blue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full mr-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="text-blue-600 w-full text-center text-xl" />
                </a>
                <a
                  href="https://twitter.com"
                  className="bg-gray-800 text-blue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full mr-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="text-blue-400 w-full text-center text-xl" />
                </a>
                <a
                  href="https://instagram.com"
                  className="bg-gray-800 text-pink-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="text-pink-600 w-full text-center text-xl" />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-400 text-sm font-semibold mb-2">Useful Links</span>
                  <ul className="list-unstyled">
                    <li>
                      <Link className="text-gray-300 hover:text-gray-100 font-semibold block pb-2 text-sm" to="/">
                        Home
                      </Link>
                    </li>
            
                    <li>
                      <Link className="text-gray-300 hover:text-gray-100 font-semibold block pb-2 text-sm" to="/login">
                        Login
                      </Link>
                    </li>
                   
                    <li>
                      <Link className="text-gray-300 hover:text-gray-100 font-semibold block pb-2 text-sm" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="text-gray-300 hover:text-gray-100 font-semibold block pb-2 text-sm" to="/allbikes">
                       All Bikes
                      </Link>
                    </li>
                    <li>
                      <Link className="text-gray-300 hover:text-gray-100 font-semibold block pb-2 text-sm" to="/privacy-policy">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link className="text-gray-300 hover:text-gray-100 font-semibold block pb-2 text-sm" to="/terms-of-service">
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link className="text-gray-300 hover:text-gray-100 font-semibold block pb-2 text-sm" to="/contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-700" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-400 py-1 font-bold">
                <span className="text-gray-400">Copyright © 2024 Okay Bikes</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
