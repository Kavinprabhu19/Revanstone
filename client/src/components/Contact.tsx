import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Phone, Linkedin, Twitter, Mail } from "lucide-react";

export default function Contact() {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 bg-white"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ready to <span className="text-[#147B58]">Transform</span> Your <span className="text-[#147B58]">Idea?</span></h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Contact us today to schedule a consultation with our team of business development experts.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-[#f5f5f5] p-8 md:p-10 rounded-sm shadow-md text-center"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Phone className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-6">Speak With Our Team</h3>
              <p className="text-gray-700 mb-8">
                Our business development experts are ready to discuss your vision and explore how we can help you build a successful venture.
              </p>
            </motion.div>
            
            <motion.div 
              className="inline-block bg-white px-8 py-6 rounded-sm shadow-sm"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-700 mb-2 text-sm">Call us directly</p>
              <a href="tel:+919042846619" className="text-2xl font-bold text-primary hover:underline transition duration-300 ">
                +91 90428 46619
              </a>
            </motion.div>
            
            <motion.p 
              className="text-gray-700 mt-8"
              variants={itemVariants}
            >
              Business hours: Monday - Friday, 9:00 AM - 6:00 PM IST
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="mt-16 text-center"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.h3 
              className="text-xl font-bold text-primary mb-6"
              variants={itemVariants}
            >
              Or Connect With Us Online
            </motion.h3>
            
            <motion.div 
              className="flex justify-center space-x-4"
              variants={containerVariants}
            >
              <motion.a 
                href="#" 
                className="w-12 h-12 rounded-full bg-[#e0e0e0] flex items-center justify-center text-primary hover:bg-primary hover:text-white transition duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, backgroundColor: "#333333", color: "#ffffff" }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              
              <motion.a 
                href="#" 
                className="w-12 h-12 rounded-full bg-[#e0e0e0] flex items-center justify-center text-primary hover:bg-primary hover:text-white transition duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, backgroundColor: "#333333", color: "#ffffff" }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              
              <motion.a 
                href="mailto:revanstone@yahoo.com" 
                className="w-12 h-12 rounded-full bg-[#e0e0e0] flex items-center justify-center text-primary hover:bg-primary hover:text-white transition duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, backgroundColor: "#333333", color: "#ffffff" }}
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
