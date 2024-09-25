const Button = ({ text, color, onClick }) => {
    const colorClasses = {
      blue: 'bg-blue-600 hover:bg-blue-800',
      red: 'bg-red-600 hover:bg-red-800',
      default: 'bg-gray-600 hover:bg-gray-800'
    };
  
    return (
      <button className={`px-8 py-2 text-white font-bold rounded-md ${colorClasses[color] || colorClasses.default}`} onClick={onClick}>
        {text}
      </button>
    );
  }
  
  export default Button;
  