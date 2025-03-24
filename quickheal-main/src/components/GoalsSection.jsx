  import { memo } from 'react';
  import { motion, AnimatePresence } from 'framer-motion';
  import PropTypes from 'prop-types';

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

  const borderVariants = {
    animate: {
      background: [
        "linear-gradient(0deg, #3B82F6 0%, transparent 50%)", 
        "linear-gradient(90deg, #3B82F6 0%, transparent 50%)",
        "linear-gradient(180deg, #3B82F6 0%, transparent 50%)",
        "linear-gradient(270deg, #3B82F6 0%, transparent 50%)",
        "linear-gradient(360deg, #3B82F6 0%, transparent 50%)"
      ],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

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

  const GoalCircle = memo(({ goal, index, isSubGoal = false }) => {
    const size = isSubGoal ? "w-32 h-32" : "w-48 h-48";
    const delay = isSubGoal ? 0.6 + index * 0.2 : index * 0.2;
    const content = isSubGoal ? goal.subGoal : goal.title;
    const bgColor = isSubGoal ? goal.color : "bg-white";
    const textSize = isSubGoal ? "text-xs" : "text-sm";

    return (
      <motion.div
        key={index}
        className={`${size} relative`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
      >
        <motion.div
          className="absolute inset-0 rounded-full"
          variants={borderVariants}
          animate="animate"
          style={{ padding: '2px' }}
        >
          <motion.div
            className={`${bgColor} w-full h-full rounded-full flex items-center justify-center p-4 text-center ${textSize}`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {content}
          </motion.div>
        </motion.div>
      </motion.div>
    );
  });

  GoalCircle.displayName = 'GoalCircle';

  GoalCircle.propTypes = {
    goal: PropTypes.shape({
      title: PropTypes.string.isRequired,
      subGoal: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    }).isRequired,
    index: PropTypes.number.isRequired,
    isSubGoal: PropTypes.bool
  };
  const ConnectingLine = memo(({ index }) => (
    <motion.div
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
  ));

  ConnectingLine.displayName = 'ConnectingLine';

  ConnectingLine.propTypes = {
    index: PropTypes.number.isRequired
  };
  const HealthGoals = () => {
    return (
      <AnimatePresence>
        <motion.div 
          className="max-w-4xl mx-auto p-8 rounded-3xl"
          variants={gradientVariants}
          animate="animate"
          initial="initial"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-2">Toward a healthy future.</h1>
            <h2 className="text-2xl">
              <span className="text-sky-400">Our goals</span> are your health
              <br />and better medicine.
            </h2>
          </div>

          <div className="relative">
            <div className="flex justify-between mb-24">
              {mainGoals.map((goal, index) => (
                <GoalCircle key={`main-${index}`} goal={goal} index={index} />
              ))}
            </div>

            <div className="flex justify-between mt-8">
              {mainGoals.map((goal, index) => (
                <GoalCircle key={`sub-${index}`} goal={goal} index={index} isSubGoal={true} />
              ))}
            </div>

            <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
              {mainGoals.map((_, index) => (
                <ConnectingLine key={`line-${index}`} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  };

  export default memo(HealthGoals);