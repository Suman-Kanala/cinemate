import { Card, Roller } from "../Components/Index";
import { UseFetch } from "../Hooks/UseFetch";
import UseTitle from "../Hooks/UseTitle";

export const MoviesList = ({ apiPath, title }) => {
  const { data: movies, loading } = UseFetch(apiPath);

  UseTitle(title);

  return (
    <main>
      <section className="py-7 max-w-7xl mx-auto ">
        <div className="flex justify-start flex-wrap lg:justify-evenly md:justify-evenly">
          {loading && <Roller />}
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
