import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: ["About Us", "Contact", "Careers"],
    },
    {
      title: "Support",
      links: ["Help Center", "FAQs", "Terms of Service"],
    },
    {
      title: "Categories",
      links: ["Concerts", "Sports", "Movies", "Comedy"],
    },
  ];

  return (
    <footer className="mt-10 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          {/* Footer links */}
          <div className="flex flex-wrap gap-x-10 gap-y-5">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h6 className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-900">
                  {section.title}
                </h6>

                <ul className="space-y-1">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-gray-600 no-underline transition-colors hover:text-blue-600"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social icons */}
          <div>
            <h6 className="mb-3 text-xs font-bold uppercase tracking-wide text-gray-900">
              Follow Us
            </h6>

            <div className="flex gap-3">
              {[
                {
                  Icon: FaFacebookF,
                  color: "hover:bg-blue-600",
                  label: "Facebook",
                },
                {
                  Icon: FaInstagram,
                  color: "hover:bg-pink-600",
                  label: "Instagram",
                },
                {
                  Icon: FaTwitter,
                  color: "hover:bg-sky-500",
                  label: "Twitter",
                },
                {
                  Icon: FaYoutube,
                  color: "hover:bg-red-600",
                  label: "YouTube",
                },
              ].map(({ Icon, color, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className={`flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:text-white ${color}`}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-5 flex flex-col gap-2 border-t border-gray-200 pt-4 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} SeatFlow. All rights reserved.
          </p>

          <div className="flex gap-4">
            <Link
              to="/privacy"
              className="text-gray-500 no-underline hover:text-blue-600"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-gray-500 no-underline hover:text-blue-600"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
