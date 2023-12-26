import { FaSpinner } from "react-icons/fa";

export const Roller = () => {
  return (
    <div className="flex justify-center items-center animate-spin">
      <div>
        <FaSpinner />
      </div>
    </div>
  );
};
