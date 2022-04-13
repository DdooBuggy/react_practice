import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const rating = 8.8;
  const sortBy = "year";
  const getMovies = async () => {
    const json = await await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=${rating}&sort_by=${sortBy}`
      )
    ).json();
    setLoading(false);
    setMovies(json.data.movies);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <h1>Movies!</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <Link to={`/detail/${movie.id}`}>{movie.title}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
