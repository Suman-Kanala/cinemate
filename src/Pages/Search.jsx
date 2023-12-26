import { Card } from "../Components/Card";
import { useSearchParams } from "react-router-dom";
import { UseFetch } from "../Hooks/UseFetch";
import { Roller } from "../Components/Roller";
import UseTitle from "../Hooks/UseTitle";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies, loading } = UseFetch(apiPath, queryTerm);
  UseTitle(`search result for ${queryTerm}`);
  return (
    <main>
      <section className="py-7 max-w-7xl mx-auto  ">
        <p className="font-mono text-3xl dark:text-white text-center py-4">
          {movies.length === 0
            ? `no results found for ${queryTerm}`
            : `results found for '${queryTerm}'`}
        </p>
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
