import FilmCard from "../FilmCard/FilmCard";

function FilmList() {
  const films = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="filmlist">
      {films.map((film) => {
        return <FilmCard film={film} />;
      })}
    </div>
  );
}

export default FilmList;
