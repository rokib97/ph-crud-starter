import React from "react";

const Footer = () => {
  return (
    <footer className="bg-deep-background-purple text-accent-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section 1 */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-neon-pink">About Us</h3>
            <p className="text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget justo non purus fermentum vehicula.
            </p>
            <a href="#" className="text-neon-blue hover:underline">
              Learn More
            </a>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-neon-pink">
              Quick Links
            </h3>
            <ul>
              <li>
                <a href="#" className="text-accent-white hover:text-neon-blue">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-accent-white hover:text-neon-blue">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-accent-white hover:text-neon-blue">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-accent-white hover:text-neon-blue">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-neon-pink">
              Contact Us
            </h3>
            <p className="text-sm mb-4">1234 Street Name, City, Country</p>
            <p className="text-sm mb-4">Email: example@domain.com</p>
            <p className="text-sm">Phone: +123 456 7890</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t-2 border-accent-white pt-4 text-center">
          <p className="text-sm">
            &copy; 2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
