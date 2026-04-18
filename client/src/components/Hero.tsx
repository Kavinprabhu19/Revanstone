import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroProps {
  scrollToElement: (id: string) => void;
}

export default function Hero({ scrollToElement }: HeroProps) {
  return (
    <section 
      className="relative w-full h-full overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
      id="hero"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
<source src="https://res.cloudinary.com/dunanazqy/video/upload/v1776536061/12266398_1920_1080_30fps_xffl6e.mp4" type="video/mp4" />
Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center bg-white bg-opacity-80 p-10 rounded-lg"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="text-gray-700">Transforming </span>
            <span className="text-primary text-[rgb(20,123,89)]">Ideas </span>
            <span className="text-gray-700">Into </span><br className="hidden md:block" />
            <span className="text-primary text-[rgb(20,123,89)]">Business</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-700 text-lg md:text-xl mb-10 max-w-3xl mx-auto"
          >
            We partner with entrepreneurs to build, launch, and scale successful ventures through strategic guidance and operational support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              className="bg-[#147B58] text-white font-medium py-3 px-8 rounded-sm hover:bg-opacity-90 transition duration-300"
              onClick={() => scrollToElement("contact")}
            >
              Get Started
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
    </section>
    
  );
}
