import { motion } from 'framer-motion';

const VolunteeringSection = () => {
  const volunteering = [
    {
      title: "Teaching English to Sudanese Refugees",
      description: "Teaching English to Sudanese refugees living in Uganda, helping them integrate and communicate effectively.",
      location: "Uganda"
    },
    {
      title: "Teaching Computer Applications",
      description: "Teaching Computer Application skills to Ugandans, empowering them with digital literacy and technical knowledge.",
      location: "Uganda"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
        <span className="text-yellow-500 text-3xl">•</span> Volunteering
      </h3>
      <div className="border-l-2 border-gray-200 dark:border-zinc-800 ml-3 pl-8 pb-4 space-y-10">
        {volunteering.map((volunteer, index) => (
          <motion.div key={index} variants={itemVariants} className="relative">
            <div className="absolute -left-[2.45rem] top-1.5 w-4 h-4 rounded-full bg-yellow-500 ring-4 ring-white dark:ring-[#18181b]"></div>
            <div className="mb-2">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">{volunteer.title}</h4>
              <p className="text-yellow-600 dark:text-yellow-400 font-medium">{volunteer.location}</p>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{volunteer.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default VolunteeringSection;
