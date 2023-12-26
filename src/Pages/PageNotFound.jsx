import { Link } from "react-router-dom";
import pagenot from "../assets/Images/404.jpg";
import Button from "../Components/Button";
import UseTitle from "../Hooks/UseTitle";
export const PageNotFound = () => {
  UseTitle("page not found");
  return (
    <main>
      <center className="flex justify-center items-center flex-col gap-8 mt-10">
        <p className="text-3xl w-96 font-mono font-bold dark:text-white ">
          404 page not found
        </p>
        <div className="w-96">
          <img src={pagenot} className="rounded-lg" alt="page not found" />
        </div>
        <Link to="/">
          <Button>Back to home</Button>
        </Link>
      </center>
    </main>
  );
};
