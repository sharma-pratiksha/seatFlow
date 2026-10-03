import React from 'react'
import loggo from '../assets/loggo.jpg'
import { Link } from "react-router-dom"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: ["About Us", "Contact", "Careers"]
    },
    {
      title: "Support",
      links: ["Help Center", "FAQs", "Terms of Service"]
    },
    {
      title: "Categories",
      links: ["Concerts", "Sports", "Movies", "Comedy"]
    },
  ]

  return (
    <footer className="bg-white  mt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-10">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h6 className="text-sm font-bold text-gray-900 tracking-wide uppercase mb-4 ml-6">
                {section.title}
              </h6>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-sm! text-gray-600! hover:text-blue-600! transition-colors! duration-200! no-underline!"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}


{/* Left Side - Social Icons */}
<div className="flex-row ml-90 ">
  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
    Follow Us
  </h3>
  <div className="flex gap-3">
    <Link 
      to="#" 
      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
    >
      <FaFacebookF size={18} />
    </Link>

    <Link 
      to="#" 
      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-pink-600 hover:text-white transition-all duration-200"
    >
      <FaInstagram size={18} />
    </Link>

    <Link 
      to="#" 
      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-200"
    >
      <FaTwitter size={18} />
    </Link>

    <Link 
      to="#" 
      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-all duration-200"
    >
      <FaYoutube size={18} />
    </Link>
  </div>
</div>
        </div>


        {/* Optional bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm! text-gray-500! hover:text-blue-600! transition-colors! no-underline!">
              Privacy Policy
            </a>
            <a href="#" className="text-sm! text-gray-500! hover:text-blue-600! transition-colors! no-underline!">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer