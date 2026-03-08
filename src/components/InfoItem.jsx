const InfoItem = ({ icon, label, value }) => {
  return (
    <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-zinc-900/50 transition-colors group">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-50 dark:bg-yellow-900/20 text-yellow-500 group-hover:scale-110 group-hover:bg-yellow-100 dark:group-hover:bg-yellow-900/40 transition-all duration-300">
        {icon}
      </div>
      <div className="flex flex-col">
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-0.5 tracking-wider">{label}</p>
        <p className="text-sm font-medium text-gray-900 dark:text-gray-200">{value}</p>
      </div>
    </div>
  );
};

export default InfoItem;