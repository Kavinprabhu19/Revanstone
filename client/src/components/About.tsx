import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function About() {
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
    hidden: { opacity: 0, y: 20 },
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
      transition: { duration: 0.8 }
    }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section 
      id="about" 
      className="py-20 bg-white"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-12 lg:space-x-24">
          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            animate={controls}
            variants={fadeRight}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-gray-500 mb-6 mt-20">About <p className="text-[#147B58]">Revanstone</p></h2>
            <p className="text-gray-700 mb-6">
            At Revanstone, we turn startup ideas into enduring businesses. With strategic expertise and a passion for innovation, we partner with visionary founders to shape their concepts into scalable, successful enterprises. Our proven approach blends insight, precision, and execution to deliver results that last. Revanstone: Building tomorrow’s businesses, today.            </p>
            
            
            
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            animate={controls}
            variants={fadeLeft}
          >
            <div className="rounded-sm shadow-lg overflow-hidden">
              <img 
                src="https://i.ibb.co/Swh7mLJp/undraw-founding-team-8uhm.png" 
                alt="About Image" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
