
import { motion } from 'framer-motion';

const HealthGoals = () => {
  const mainGoals = [
    {
      title: "Improving accessibility and quality of medical services",
      subGoal: "Ensuring accessibility of medical care for all segments of the population",
      color: "bg-blue-100",
      x: "0%",
      y: "0%"
    },
    {
      title: "Fostering a healthy and responsible community",
      subGoal: "Guaranteeing confidentiality and protection of patient data",
      color: "bg-gray-100",
      x: "0%",
      y: "0%"
    },
    {
      title: "Striving for innovation and development of medical science",
      subGoal: "Supporting scientific research and medical discoveries",
      color: "bg-yellow-100",
      x: "0%",
      y: "0%"
    }
  ];

  // Animation variants for the rotating border
  const borderVariants = {
    animate: {
      background: ["linear-gradient(0deg, #3B82F6 0%, transparent 50%)", 
                  "linear-gradient(90deg, #3B82F6 0%, transparent 50%)",
                  "linear-gradient(180deg, #3B82F6 0%, transparent 50%)",
                  "linear-gradient(270deg, #3B82F6 0%, transparent 50%)",
                  "linear-gradient(360deg, #3B82F6 0%, transparent 50%)"],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  // Background gradient animation variants
  const gradientVariants = {
    animate: {
      background: [
        "linear-gradient(45deg, #E1F5FE 0%, #E3F2FD 50%, #E8EAF6 100%)",
        "linear-gradient(45deg, #E3F2FD 0%, #E8EAF6 50%, #E1F5FE 100%)",
        "linear-gradient(45deg, #E8EAF6 0%, #E1F5FE 50%, #E3F2FD 100%)"
      ],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <motion.div 
      className="max-w-4xl mx-auto p-8 rounded-3xl"
      variants={gradientVariants}
      animate="animate"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-2">Toward a healthy future.</h1>
        <h2 className="text-2xl">
          <span className="text-sky-400">Our goals</span> are your health
          <br />and better medicine.
        </h2>
      </div>

      <div className="relative">
        {/* Main Goals Circles */}
        <div className="flex justify-between mb-24">
          {mainGoals.map((goal, index) => (
            <motion.div
              key={index}
              className="w-48 h-48 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Animated border container */}
              <motion.div
                className="absolute inset-0 rounded-full"
                variants={borderVariants}
                animate="animate"
                style={{ padding: '2px' }}
              >
                <motion.div
                  className="w-full h-full rounded-full bg-white flex items-center justify-center p-4 text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="text-sm">{goal.title}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Sub Goals Circles */}
        <div className="flex justify-between mt-8">
          {mainGoals.map((goal, index) => (
            <motion.div
              key={`sub-${index}`}
              className="w-32 h-32 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.2 }}
            >
              {/* Animated border container for sub goals */}
              <motion.div
                className="absolute inset-0 rounded-full"
                variants={borderVariants}
                animate="animate"
                style={{ padding: '2px' }}
              >
                <motion.div
                  className={`${goal.color} w-full h-full rounded-full flex items-center justify-center p-4 text-center text-xs`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {goal.subGoal}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Connecting Lines - Fixed positioning */}
        <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
          {mainGoals.map((_, index) => (
            <motion.div
              key={`line-${index}`}
              className="absolute w-px bg-gradient-to-b from-blue-400 to-gray-200"
              style={{
                left: `${16.66 + (index * 33.33)}%`,
                top: '192px',
                height: '80px',
                transform: 'translateX(-50%)'
              }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ 
                delay: 0.4 + index * 0.2,
                duration: 0.5,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HealthGoals;