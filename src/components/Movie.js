import PropTypes from "prop-types";

function Movie({ id, coverImg, title, description, genres }) {
  return (
    <div>
      <img src={coverImg} alt={id} />
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;
