import InfoItem from './InfoItem';
import { Mail, Phone, Calendar, MapPin, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import samImage from '../assets/images/sam_nob_black.png';

const ProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-[#18181b] rounded-3xl p-8 shadow-xl dark:shadow-none border border-gray-100 dark:border-gray-800 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>

      <div className="flex flex-col items-center mb-8">
        <div className="w-36 aspect-[1824/2346] mb-6 drop-shadow-xl rotate-3 hover:rotate-0 transition-all duration-300 ease-out transform hover:scale-105">
          <img
            src={samImage}
            alt="Samuel Katongole"
            className="w-full h-full object-contain"
          />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">Samuel Katongole</h1>
        <p className="text-yellow-600 dark:text-yellow-400 font-medium text-center text-sm uppercase tracking-wider">
          Software Engineer | Team Lead | Writer | Educator
        </p>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent mb-8"></div>

      <div className="flex flex-col gap-6">
        <InfoItem
          icon={<Mail size={20} className="text-yellow-500" />}
          label="EMAIL"
          value="2060iona.shemuel@gmail.com"
        />
        <InfoItem
          icon={<Phone size={20} className="text-yellow-500" />}
          label="PHONE"
          value="(+256)767 896 608"
        />
        <InfoItem
          icon={<Briefcase size={20} className="text-yellow-500" />}
          label="WORKING WITH"
          value="iONA Tech Services, Ltd."
          link='https://ionatec.com'
        />
        <InfoItem
          icon={<Calendar size={20} className="text-yellow-500" />}
          label="SINCE"
          value="December 15, 2025"
        />
        <InfoItem
          icon={<MapPin size={20} className="text-yellow-500" />}
          label="LOCATION"
          value="Kampala, Uganda"
        />
      </div>
    </motion.div>
  );
};

export default ProfileCard;
