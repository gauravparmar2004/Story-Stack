const Logo = ({ size = 10 }) => {
  return (
    <div className={`w-${size} h-${size} bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md`}>
      <span className="text-white font-bold text-xl">RT</span>
    </div>
  );
};

export default Logo;
