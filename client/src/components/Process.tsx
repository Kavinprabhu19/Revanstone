import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Circle } from "lucide-react";

export default function Process() {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

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

  const phases = [
    {
      number: 1,
      title: "Discovery & Assessment",
      description: "We conduct a comprehensive evaluation of your idea, market opportunity, and competitive landscape to identify strengths and potential challenges.",
      bullets: [
        "Market research & analysis",
        "Competitive landscape mapping",
        "Initial viability assessment"
      ]
    },
    {
      number: 2,
      title: "Strategy Development",
      description: "We create a comprehensive business strategy that outlines your value proposition, target market, revenue model, and growth trajectory.",
      bullets: [
        "Business model development",
        "Revenue strategy formulation",
        "Market entry planning"
      ]
    },
    {
      number: 3,
      title: "Business Planning",
      description: "We develop a detailed business plan that outlines operational requirements, financial projections, and resource allocation.",
      bullets: [
        "Financial modeling",
        "Operational infrastructure design",
        "Resource requirement planning"
      ]
    },
    {
      number: 4,
      title: "MVP Development",
      description: "We create and validate a minimum viable product that demonstrates your core value proposition and can be used for initial market testing.",
      bullets: [
        "Product specification",
        "Development or prototyping",
        "Initial user testing"
      ]
    },
    {
      number: 5,
      title: "Go-to-Market",
      description: "We deploy your product or service to the market with a comprehensive launch strategy designed to generate awareness and initial traction.",
      bullets: [
        "Marketing strategy execution",
        "Sales enablement",
        "Customer acquisition"
      ]
    },
    {
      number: 6,
      title: "Growth & Scaling",
      description: "We implement growth strategies to expand your customer base, enhance your offering, and increase revenue while maintaining operational efficiency.",
      bullets: [
        "Market expansion",
        "Operational scaling",
        "Performance optimization"
      ]
    },
    {
      number: 7,
      title: "Optimization & Sustainability",
      description: "We implement systems and processes to ensure long-term business sustainability, operational excellence, and continued growth.",
      bullets: [
        "Business process optimization",
        "Continuous improvement framework",
        "Long-term strategic planning"
      ]
    }
  ];

  return (
    <section 
      id="process" 
      className="py-20 bg-white"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our <span className="text-[#147B58]">Process</span></h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We follow a structured approach to turn ideas into successful businesses through our proven 7-phase methodology.
          </p>
        </motion.div>
        
        <motion.div 
          className="relative"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#147B58] transform -translate-x-1/2"></div>
          
          {phases.map((phase, index) => (
            <motion.div 
              key={phase.number}
              className={`md:flex items-center mb-16 last:mb-0 relative ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              variants={itemVariants}
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mb-8 md:mb-0 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className={`${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <h3 className="text-xl font-bold text-primary mb-3 text-[#147B59]">Phase {phase.number}: {phase.title}</h3>
                  <p className="text-gray-700">{phase.description}</p>
                </div>
              </div>
              
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-[#e0e0e0] z-10">
                <span className="text-primary font-bold">{phase.number}</span>
              </div>
              
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className={`bg-[#f5f5f5] p-6 rounded-sm ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                  <ul className="text-gray-700 space-y-2">
                    {phase.bullets.map((bullet, i) => (
                      <li key={i} className={`flex items-start ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                        {index % 2 === 1 && (
                          <>
                            <span>{bullet}</span>
                            <Circle className="text-primary h-2 w-2 mt-1.5 ml-2 hidden md:block" fill="#333333" />
                            <Circle className="text-primary h-2 w-2 mt-1.5 mr-2 md:hidden" fill="#333333" />
                          </>
                        )}
                        {index % 2 === 0 && (
                          <>
                            <Circle className="text-primary h-2 w-2 mt-1.5 mr-2" fill="#333333" />
                            <span>{bullet}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
