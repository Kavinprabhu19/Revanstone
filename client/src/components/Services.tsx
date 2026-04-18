import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { ChartLine, Handshake, Check } from "lucide-react";

export default function Services() {
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
        when: "beforeChildren",
        staggerChildren: 0.3 
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

  const fadeRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section 
      id="services" 
      className="py-20 bg-[#f5f5f5]"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our <h2 className="text-[#147B58]">Services</h2></h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We offer flexible engagement models designed to meet the unique needs of every entrepreneur and business concept.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div 
            className="bg-white p-8 rounded-sm shadow-md flex flex-col h-full transition-transform duration-300 hover:translate-y-[-5px]"
            variants={fadeRight}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#e0e0e0] flex items-center justify-center mr-4">
                <ChartLine className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-primary"><span className="text-[#147B58]">Milestone-Based</span> Partnership</h3>
            </div>
            <p className="text-gray-700 mb-6">
              A structured approach with defined phases and deliverables. Ideal for entrepreneurs with clear business objectives and upfront capital.
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Upfront payment structure",
                "6-7 development phases",
                "Clearly defined deliverables",
                "Structured timeline",
                "Comprehensive progress reporting"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-primary h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <a 
              href="#contact" 
              className="text-primary font-medium hover:underline mt-auto inline-flex items-center"
            >
              
              
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-white p-8 rounded-sm shadow-md flex flex-col h-full transition-transform duration-300 hover:translate-y-[-5px]"
            variants={fadeLeft}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#e0e0e0] flex items-center justify-center mr-4">
                <Handshake className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-primary"><span className="text-[#147B58]">Equity-Based</span> Partnership</h3>
            </div>
            <p className="text-gray-700 mb-6">
              A collaborative approach where we invest our expertise and resources in exchange for equity. Perfect for early-stage concepts with high growth potential.
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Equity-based compensation",
                "Long-term strategic partnership",
                "No upfront payment",
                "Zero cost to Start"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-primary h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <a 
              href="#contact" 
              className="text-primary font-medium hover:underline mt-auto inline-flex items-center"
            >
             
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
