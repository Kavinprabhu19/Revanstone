import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

interface FooterProps {
  scrollToElement: (id: string) => void;
}

export default function Footer({ scrollToElement }: FooterProps) {
  const quickLinks = [
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Process", id: "process" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <motion.h3 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold mb-4"
            >
              REVANSTONE
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 mb-6 max-w-md"
            >
              Transforming entrepreneurial visions into market-ready businesses through strategic guidance and operational support.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-300"
            >
              © {new Date().getFullYear()} Revanstone. All rights reserved.
            </motion.p>
          </div>
          
          <div>
            <motion.h4 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg font-bold mb-4"
            >
              Quick Links
            </motion.h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <a 
                    href={`#${link.id}`}
                    className="text-gray-300 hover:text-white transition duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToElement(link.id);
                    }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <motion.h4 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg font-bold mb-4"
            >
              Contact
            </motion.h4>
            <ul className="space-y-2">
              <motion.li 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start"
              >
                <MapPin className="h-5 w-5 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-300">
                  Chennai<br />
                </span>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start"
              >
                <Phone className="h-5 w-5 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-300">+91 90428 46619</span>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start"
              >
                <Mail className="h-5 w-5 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-300">revanstone@yahoo.com</span>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
