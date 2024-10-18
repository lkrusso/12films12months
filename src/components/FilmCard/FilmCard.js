function FilmCard({ film }) {
  return (
    <div className="filmcard">
      <img
        src={`https://vumbnail.com/${film.id}.jpg`}
        alt={`Thumbnail of ${film.title} `}
      />
    </div>
  );
}

export default FilmCard;
