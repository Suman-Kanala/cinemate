const Button = ({ children }) => {
  return (
    <div className="  w-96 px-4 py-2 font-bold dark:text-white border-2 border-red-right rounded-lg hover:bg-red-right transition duration-300 ease-in-out hover:text-white">
      {children}
    </div>
  );
};

export default Button;
