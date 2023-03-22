const Input = ({ className = '', ...props }) => {
  return (
    <input
      className={`border-solid border-gray-300 border-2 px-6 py-2 rounded-xl w-full ${className}`}
      {...props}
    />
  );
};

export default Input;
