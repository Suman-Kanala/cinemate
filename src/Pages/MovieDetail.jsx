import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import stat from "../assets/Images/default.jpg";
import { FaStar } from "react-icons/fa";
export const MovieDetail = () => {
  const [movie, setMoie] = useState([]);
  const params = useParams();
  const movie_id = params.id;
  // const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=13cd5fc7ce6fceb60f8c58d08b901fce`;

  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : stat;

  useEffect(() => {
    const dataFetch = async () => {
      const req = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=13cd5fc7ce6fceb60f8c58d08b901fce`
      );
      const response = await req.json();
      setMoie(response);
    };
    dataFetch();
  }, [movie_id]);

  const imdb = `https://www.imdb.com/title/${movie.imdb_id}`;

  useEffect(() => {
    document.title = `${movie.title}`;
  });

  return (
    <main>
      <section className="flex max-sm:flex-col p-3 m-3 max-sm:justify-center justify-between gap-8  lg:justify-around ">
        <div className="flex">
          <img className="rounded-lg" src={image} alt="" />
        </div>
        <div className="flex flex-col  py-4 px-4 justify-start max-sm:justify-center flex-1  dark:bg-gray-800 dark:text-white text-lg">
          <h3 className="font-mono font-bold text-2xl py-2">{movie.title}</h3>
          <p className="my-2">{movie.overview}</p>
          <p className="flex justify-start gap-8 my-3  ">
            {movie.genres &&
              movie.genres.map((genre) => (
                <span
                  key={genre.name}
                  className="border-2 p-2 rounded-lg dark:border-white "
                >
                  {genre.name}
                </span>
              ))}
          </p>
          <p className="my-4 flex justify-start max-sm:justify-center items-center gap-2">
            <span className="text-yellow-300">
              <FaStar />
            </span>
            <span>{movie.vote_average}</span>
            <span>{"|"}</span>
            <span>{movie.vote_count} reviews</span>
          </p>
          <p className="my-2 font-bold">Runtime: {movie.runtime}</p>
          <p className="my-2 font-bold">Budget: {movie.budget}</p>
          <p className="my-2 font-bold">Revenue: {movie.revenue}</p>
          <p className="my-2 font-bold">Release Date: {movie.release_date}</p>
          <p className="my-2 font-bold">
            IMDB Code:{" "}
            <Link to={imdb} target="_blank">
              {movie.imdb_id}
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};
